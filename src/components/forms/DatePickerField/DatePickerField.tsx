/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect, useContext } from 'react'
import { jsx } from '@emotion/core'

import { removeConsecutiveDuplicate } from '../../../utils/array'
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
    dateComponentSelectors: externalDateComponentSelectors,
    onValueChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    ...otherProps
  } = props
  const { addTranslations } = useContext(I18nContext)
  const [value, setValue] = useState(initialValue)
  const [modalState, setModalState] = useState<number | null>(null)

  addTranslations('en', englishStrings)
  addTranslations('fr', frenchStrings)

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])

  const dateComponentSelectors = removeConsecutiveDuplicate(externalDateComponentSelectors)

  // data about current modal
  const displayDateSelector = dateComponentSelectors[modalState] === DateComponent.Date
  const displayMonthSelector = dateComponentSelectors[modalState] === DateComponent.Month
  const displayYearSelector = dateComponentSelectors[modalState] === DateComponent.Year
  const isMasterDateSelector =
    modalState === 0 && // first element
    displayDateSelector &&
    (dateComponentSelectors.includes(DateComponent.Month) || dateComponentSelectors.includes(DateComponent.Year))

  // actions to change modal
  const closeModal = () => setModalState(null)
  const moveToSelector = (selectorID: number) => {
    if (selectorID > dateComponentSelectors.length) {
      closeModal()
      return
    }

    setModalState(selectorID)
  }
  const moveToNextSelector = () => moveToSelector(modalState + 1)

  // event handlers
  const handleTextFieldChange = (v: string) => {
    const [day, month, year] = v.split('/')
    const date = new Date(Number(year), Number(month) - 1, Number(day))

    if (date instanceof Date && Number.isNaN(date.getTime())) {
      return
    }

    setValue(date)
    closeModal()
  }

  const handleTextFieldFocus = (event: SyntheticEvent<HTMLInputElement, FocusEvent>) => {
    moveToSelector(0)
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

            if (isMasterDateSelector) {
              closeModal()
              return
            }

            moveToNextSelector()
          }}
          date={value || new Date()}
          selected={[value]}
          firstDayOfWeek={1}
          isSmall={isSmall}
          enableOtherDateComponentSelection={isMasterDateSelector}
          onOtherDateComponentSelectionAsked={() => moveToSelector(1)}
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
            moveToNextSelector()
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
            moveToNextSelector()
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
