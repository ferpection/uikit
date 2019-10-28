/** @jsx jsx */
import React, { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, innerCheckboxStyles, innerCheckboxStylesDisabled } from './styles'

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const [value, setValue] = useState(props.value || '')

  const { onValueChange = () => {}, isDisabled, onBlur: handleBlur, onFocus: handleFocus } = props
  useEffect(() => {
    onValueChange(value)
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  return (
    <ul css={[listStyles]} onBlur={handleBlur} onFocus={handleFocus}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li css={[listStyles, innerCheckboxStyles, props.isDisabled ? innerCheckboxStylesDisabled : null]} key={index}>
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

export interface CheckboxGroupProps extends FormProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder: undefined
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}
