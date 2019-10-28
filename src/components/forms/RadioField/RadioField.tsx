/** @jsx jsx */
import React, { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, innerRadioStyles, innerRadioStylesDisabled } from './styles'

export const RadioField: FC<RadioFieldProps> = props => {
  const [value, setValue] = useState(props.value || '')

  const { onValueChange = () => {}, isDisabled } = props
  useEffect(() => {
    onValueChange(value)
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  return (
    <ul css={[listStyles]}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li css={[listStyles, innerRadioStyles, props.isDisabled ? innerRadioStylesDisabled : null]} key={index}>
            {cloneElement(child, {
              isDisabled,
              onChange: handleChange,
              isChecked: child.props.value === value,
            })}
          </li>
        )
      })}
    </ul>
  )
}

export interface RadioFieldProps extends FormProps {
  value?: string
  onValueChange?: (value: string) => void
}
