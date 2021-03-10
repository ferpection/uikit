/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect, Fragment } from 'react'
import { jsx } from '@emotion/react'

import { removeConsecutiveDuplicate } from '../../../utils/array'

import { Button } from '../../buttons/Button/Button'

import { TextField } from '../TextField/TextField'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { defaultFormProps, FormProps } from '../form-props'
import { FormErrors } from '../form-errors'

import { Calendar } from './Calendar/Calendar'
import { YearPicker } from './YearPicker/YearPicker'
import { MonthPicker } from './MonthPicker/MonthPicker'

import { datePickerContainer, datePickerContainerSmall, calendarButton, calendarButtonSmall } from './styles'

export enum DateComponent {
  Date = 'date',
  Month = 'month',
  Year = 'year',
}

const DATE_REGEX = /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(\/)(?:0?2)\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/

export interface DatePickerFieldProps extends FormProps {
  value?: Date
  isSmall?: boolean
  dateComponentSelectors?: DateComponent[]
  onValueChange?: (value: Date) => void
  hideErrors?: boolean
  className?: string
  isHighlighted?: boolean

  dateLanguage?: string
  previousButtonLabel?: string
  nextButtonLabel?: string
  yearComponentTitle?: string
  monthComponentTitle?: string
}

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const {
    value: initialValue,
    isSmall,
    placeholder,
    dateComponentSelectors: externalDateComponentSelectors,
    onValueChange,
    onBlur,
    onFocus,
    onErrors,
    hideErrors,
    validators,
    dateLanguage = 'en',
    previousButtonLabel,
    nextButtonLabel,
    yearComponentTitle,
    monthComponentTitle,
    ...otherProps
  } = props
  const [value, setValue] = useState(initialValue)
  const [modalState, setModalState] = useState<number | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})

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
    closeModal()

    if (!DATE_REGEX.test(v)) {
      return
    }

    const [day, month, year] = v.split('/')
    const date = new Date(Number(year), Number(month) - 1, Number(day))

    if (isNaN(date.getTime())) {
      // if date parsing failed
      setValue(null)
      return
    }

    setValue(date)
  }

  const handleTextFieldFocus = (event: SyntheticEvent<HTMLInputElement, FocusEvent>) => {
    moveToSelector(0)
    onFocus(event)
  }

  const handleErrors = (errors: FormErrors) => {
    onErrors(errors)
    setErrors(errors)
  }

  return (
    <Fragment>
      <div css={[datePickerContainer, isSmall && datePickerContainerSmall]}>
        <Button
          css={[calendarButton, isSmall && calendarButtonSmall]}
          icon="calendar"
          isRaw
          isDisabled={props.isDisabled}
          onClick={() => (modalState == null ? moveToSelector(0) : closeModal())}
        />
        <TextField
          value={value?.toLocaleDateString('fr-FR', { day: '2-digit', year: 'numeric', month: '2-digit' })}
          isSmall={isSmall}
          placeholder={placeholder || 'dd/mm/yyyy'}
          onValueChange={handleTextFieldChange}
          onFocus={handleTextFieldFocus}
          onBlur={onBlur}
          validators={[(v: string) => ({ 'uikit:invalidDate': v.length > 0 && !DATE_REGEX.test(v) }), ...validators]}
          onErrors={handleErrors}
          hideErrors
          {...otherProps}
        />
        {displayDateSelector && (
          <Calendar
            previousButtonLabel={previousButtonLabel}
            nextButtonLabel={nextButtonLabel}
            language={dateLanguage}
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
            previousButtonLabel={previousButtonLabel}
            nextButtonLabel={nextButtonLabel}
            title={monthComponentTitle}
            language={dateLanguage}
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
            previousButtonLabel={previousButtonLabel}
            nextButtonLabel={nextButtonLabel}
            title={yearComponentTitle}
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
      {hideErrors === false && (
        <FormErrorMessages
          translatedErrors={[errors['uikit:invalidDate'] && 'Please enter a valid date (dd/mm/yyyy)']}
        />
      )}
    </Fragment>
  )
}

DatePickerField.defaultProps = {
  ...(defaultFormProps as DatePickerFieldProps),
  hideErrors: false,
  isSmall: false,
  dateComponentSelectors: [DateComponent.Date],
  isHighlighted: false,
}
