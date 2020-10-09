/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'

import { TextField } from '../TextField/TextField'
import { defaultFormProps, FormProps } from '../form-props'

import { Calendar } from './Calendar/Calendar'
import { YearPicker } from './YearPicker/YearPicker'
import { MonthPicker } from './MonthPicker/MonthPicker'

import { datePickerContainer, datePickerContainerSmall } from './styles'
import { englishStrings, frenchStrings } from './locales'

export enum DateComponent {
  Date = 'date',
  Month = 'month',
  Year = 'year',
}

export interface DatePickerFieldProps extends FormProps {
  value?: Date
  isSmall?: boolean
  dateComponentSelectors?: DateComponent[]
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
  const [selectedCalendarType, setSelectedCalendarType] = useState(() => {
    if (dateComponentSelectors.includes(DateComponent.Date)) {
      return DateComponent.Date
    }

    if (dateComponentSelectors.includes(DateComponent.Year)) {
      return DateComponent.Year
    }

    if (dateComponentSelectors.includes(DateComponent.Month)) {
      return DateComponent.Month
    }
  })

  addTranslations('en', englishStrings)
  addTranslations('fr', frenchStrings)

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])

  const displayDateSelector =
    displayModal === true && selectedCalendarType === DateComponent.Date && dateComponentSelectors.includes(DateComponent.Date)
  const displayMonthSelector =
    displayModal === true && selectedCalendarType === DateComponent.Month && dateComponentSelectors.includes(DateComponent.Month)
  const displayYearSelector =
    displayModal === true && selectedCalendarType === DateComponent.Year && dateComponentSelectors.includes(DateComponent.Year)

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
            dateComponentSelectors.includes(DateComponent.Month) || dateComponentSelectors.includes(DateComponent.Year)
          }
          onOtherDateComponentSelectionAsked={() => {
            if (dateComponentSelectors.includes(DateComponent.Year)) {
              setSelectedCalendarType(DateComponent.Year)
              return
            }

            if (dateComponentSelectors.includes(DateComponent.Month)) {
              setSelectedCalendarType(DateComponent.Month)
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

            if (dateComponentSelectors.includes(DateComponent.Date)) {
              setSelectedCalendarType(DateComponent.Date)
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

            if (dateComponentSelectors.includes(DateComponent.Month)) {
              setSelectedCalendarType(DateComponent.Month)
              return
            }

            if (dateComponentSelectors.includes(DateComponent.Date)) {
              setSelectedCalendarType(DateComponent.Date)
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
  dateComponentSelectors: [DateComponent.Date],
}
