/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect, Fragment, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'

import { TextField } from '../TextField/TextField'
import { defaultFormProps, FormProps } from '../form-props'

import { Calendar } from './Calendar/Calendar'
import { YearPicker } from './YearPicker/YearPicker'
import { MonthPicker } from './MonthPicker/MonthPicker'

import { datePickerContainer, datePickerContainerSmall } from './styles'
import { englishStrings, frenchStrings } from './locales'

enum CalendarType {
  Date,
  Month,
  Year,
}

export interface DatePickerFieldProps extends FormProps {
  value?: Date
  isSmall?: boolean
  onValueChange?: (value: Date) => void
}

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const {
    value: initialValue,
    isSmall = false,
    placeholder = 'dd/mm/yyyy',
    onValueChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    ...otherProps
  } = props
  const [value, setValue] = useState(initialValue)
  const [displayModal, setDisplayModal] = useState(false)
  const [calendarType, setCalendarType] = useState(CalendarType.Date)
  const { addTranslations } = useContext(I18nContext)

  addTranslations('en', englishStrings)
  addTranslations('fr', frenchStrings)

  useEffect(() => {
    onValueChange(value)
  }, [value])

  const handleTextFieldChange = (v: string) => {
    const [day, month, year] = v.split('/')
    const date = new Date(Number(year), Number(month) - 1, Number(day))

    if (date instanceof Date && Number.isNaN(date.getTime())) {
      return
    }

    setValue(date)
    setDisplayModal(false)
  }

  const handleTextFieldFocus = (event: SyntheticEvent<HTMLInputElement, FocusEvent>) => {
    setDisplayModal(true)
    onFocus(event)
  }

  return (
    <div css={[datePickerContainer, isSmall && datePickerContainerSmall]}>
      <TextField
        value={value?.toLocaleDateString('fr-FR', { day: '2-digit', year: 'numeric', month: '2-digit' })}
        isSmall={isSmall}
        placeholder={placeholder}
        onValueChange={handleTextFieldChange}
        onFocus={handleTextFieldFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      {displayModal === true && (
        <Fragment>
          {calendarType === CalendarType.Date && (
            <Calendar
              onDateSelected={({ date }) => {
                setValue(date)
                setDisplayModal(false)
              }}
              date={value || new Date()}
              selected={[value]}
              firstDayOfWeek={1}
              isSmall={isSmall}
              onYearSelectionAsked={() => setCalendarType(CalendarType.Year)}
            />
          )}
          {calendarType === CalendarType.Month && (
            <MonthPicker
              isSmall={isSmall}
              selected={value?.getMonth()}
              onMonthSelected={month => {
                const date = value ?? new Date()
                date.setMonth(month)

                setValue(date)
                setCalendarType(CalendarType.Date)
              }}
            />
          )}
          {calendarType === CalendarType.Year && (
            <YearPicker
              isSmall={isSmall}
              selected={value?.getFullYear()}
              onYearSelected={year => {
                const date = value ?? new Date()
                date.setFullYear(year)

                setValue(date)
                setCalendarType(CalendarType.Month)
              }}
            />
          )}
        </Fragment>
      )}
    </div>
  )
}

DatePickerField.defaultProps = {
  ...defaultFormProps as DatePickerFieldProps,
  placeholder: 'dd/mm/yyyy',
  isSmall: false,
}
