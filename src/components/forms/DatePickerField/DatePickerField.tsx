/** @jsx jsx */
import { FC, useState } from 'react'
import { jsx } from '@emotion/core'
import Dayzed from 'dayzed'

import { TextField } from '../TextField/TextField'
import { FormProps } from '../form-props'
import { Calendar } from './Calendar'

import { datePickerContainer } from './styles'

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const { value: initialValue, isSmall = false } = props
  const [value, setValue] = useState(initialValue ? new Date(initialValue) : null)
  const [displayModal, setDisplayModal] = useState(false)

  return (
    <div css={datePickerContainer}>
      <TextField value={value?.toLocaleDateString()} isSmall={isSmall} onFocus={() => setDisplayModal(true)} />
      {displayModal === true ? (
        <Dayzed
          onDateSelected={(selectedDate) => {
            setValue(selectedDate.date)
            setDisplayModal(false)
          }}
          selected={value}
          render={props => <Calendar isSmall={isSmall} {...props} />}
        />
      ) : null}
    </div>
  )
}

export interface DatePickerFieldProps extends FormProps {
  value?: string
  isSmall?: boolean
}
