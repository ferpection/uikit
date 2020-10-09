/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'

import { TextField } from '../TextField/TextField'
import { defaultFormProps, FormProps } from '../form-props'

import { Calendar } from './Calendar/Calendar'
import { YearPicker } from './YearPicker/YearPicker'
import { MonthPicker } from './MonthPicker/MonthPicker'

import { CalendarType } from './calendar-type'
import { datePickerContainer, datePickerContainerSmall } from './styles'
import { englishStrings, frenchStrings } from './locales'

export interface DatePickerFieldProps extends FormProps {
  value?: Date
  isSmall?: boolean
  dateComponentSelectors?: CalendarType[]
  onValueChange?: (value: Date) => void
}

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const {
    value: initialValue,
    isSmall = false,
    placeholder = 'dd/mm/yyyy',
    dateComponentSelectors,
    onValueChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    ...otherProps
  } = props
  const { addTranslations } = useContext(I18nContext)
  const [value, setValue] = useState(initialValue)
  const [displayModal, setDisplayModal] = useState(false)
  const [calendarType, setCalendarType] = useState(() => {
    if (dateComponentSelectors.includes(CalendarType.Date)) {
      return CalendarType.Date
    }

    if (dateComponentSelectors.includes(CalendarType.Year)) {
      return CalendarType.Year
    }

    if (dateComponentSelectors.includes(CalendarType.Month)) {
      return CalendarType.Month
    }
  })

  addTranslations('en', englishStrings)
  addTranslations('fr', frenchStrings)

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])

  const displayDateSelector =
    displayModal === true && calendarType === CalendarType.Date && dateComponentSelectors.includes(CalendarType.Date)
  const displayMonthSelector =
    displayModal === true && calendarType === CalendarType.Month && dateComponentSelectors.includes(CalendarType.Month)
  const displayYearSelector =
    displayModal === true && calendarType === CalendarType.Year && dateComponentSelectors.includes(CalendarType.Year)

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
      {displayDateSelector && (
        <Calendar
          onDateSelected={({ date }) => {
            setValue(date)
            setDisplayModal(false)
          }}
          date={value || new Date()}
          selected={[value]}
          firstDayOfWeek={1}
          isSmall={isSmall}
          enableOtherDateComponentSelection={
            dateComponentSelectors.includes(CalendarType.Month) || dateComponentSelectors.includes(CalendarType.Year)
          }
          onOtherDateComponentSelectionAsked={() => {
            if (dateComponentSelectors.includes(CalendarType.Year)) {
              setCalendarType(CalendarType.Year)
              return
            }

            if (dateComponentSelectors.includes(CalendarType.Month)) {
              setCalendarType(CalendarType.Month)
            }
          }}
        />
      )}
      {displayMonthSelector && (
        <MonthPicker
          isSmall={isSmall}
          selected={value?.getMonth()}
          onMonthSelected={month => {
            const date = value ?? new Date()
            date.setMonth(month)

            setValue(date)

            if (dateComponentSelectors.includes(CalendarType.Date)) {
              setCalendarType(CalendarType.Date)
              return
            }

            setDisplayModal(false)
          }}
        />
      )}
      {displayYearSelector && (
        <YearPicker
          isSmall={isSmall}
          selected={value?.getFullYear()}
          onYearSelected={year => {
            const date = value ?? new Date()
            date.setFullYear(year)

            setValue(date)

            if (dateComponentSelectors.includes(CalendarType.Month)) {
              setCalendarType(CalendarType.Month)
              return
            }

            if (dateComponentSelectors.includes(CalendarType.Date)) {
              setCalendarType(CalendarType.Date)
              return
            }

            setDisplayModal(false)
          }}
        />
      )}
    </div>
  )
}

DatePickerField.defaultProps = {
  ...(defaultFormProps as DatePickerFieldProps),
  placeholder: 'dd/mm/yyyy',
  isSmall: false,
  dateComponentSelectors: [CalendarType.Date],
}
