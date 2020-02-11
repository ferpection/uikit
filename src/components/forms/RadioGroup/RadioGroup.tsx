/** @jsx jsx */
import { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, listItemStyles, innerRadioStyles, innerRadioStylesDisabled } from './styles'

export const RadioGroup: FC<RadioGroupProps> = props => {
  const [value, setValue] = useState(props.value || '')
  const { onValueChange = () => {}, isDisabled, onBlur: handleBlur, onFocus: handleFocus, ...otherProps } = props

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  useEffect(() => {
    onValueChange(value)
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  return (
    <ul css={[listStyles]} onBlur={handleBlur} onFocus={handleFocus} {...otherProps}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[listStyles, listItemStyles, innerRadioStyles, props.isDisabled ? innerRadioStylesDisabled : null]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled,
              onValueChange: handleChange,
              isChecked: child.props.value === value,
              radioPosition: 'center',
            })}
          </li>
        )
      })}
    </ul>
  )
}

export interface RadioGroupProps extends FormProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: undefined
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}
