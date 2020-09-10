/** @jsx jsx */
import { FC, useState, SyntheticEvent, useEffect } from 'react'
import { jsx } from '@emotion/core'
import Dayzed from 'dayzed'

import { TextField } from '../TextField/TextField'
import { FormProps } from '../form-props'
import { Calendar } from './Calendar/Calendar'

import { datePickerContainer, datePickerContainerSmall } from './styles'

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
