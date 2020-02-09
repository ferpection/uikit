/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect } from 'react'
import { jsx } from '@emotion/core'
import Dayzed from 'dayzed'

import { TextField } from '../TextField/TextField'
import { FormProps } from '../form-props'
import { Calendar } from './Calendar/Calendar'

import { datePickerContainer } from './styles'

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const {
    value: initialValue,
    dateValue: initialDateValue = new Date(initialValue),
    isSmall = false,
    onValueChange = () => {},
    onDateValueChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    ...otherProps
  } = props
  const [value, setValue] = useState(initialDateValue)
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(() => {
    onValueChange(value?.toISOString())
    onDateValueChange(value)
  }, [value])

  const handleTextFieldChange = (v: string) => {
    const date = new Date(v)

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
    <div css={datePickerContainer}>
      <TextField
        value={value?.toLocaleDateString()}
        isSmall={isSmall}
        onValueChange={handleTextFieldChange}
        onFocus={handleTextFieldFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      {displayModal === true ? (
        <Dayzed
          onDateSelected={({ date }) => {
            setValue(date)
            setDisplayModal(false)
          }}
          date={value || new Date()}
          selected={[value]}
          firstDayOfWeek={1}
          render={dayzedData => <Calendar isSmall={isSmall} {...dayzedData} />}
        />
      ) : null}
    </div>
  )
}

export interface DatePickerFieldProps extends FormProps {
  value?: string
  dateValue?: Date
  isSmall?: boolean
  onValueChange?: (value: string) => void
  onDateValueChange?: (value: Date) => void
}
