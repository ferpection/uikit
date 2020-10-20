/** @jsx jsx */
import { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import useFormValidation from '../../../hooks/useFormValidation'

import { defaultFormProps, FormProps } from '../form-props'

import {
  listStyles,
  listItemStyles,
  innerRadioStyles,
  innerRadioStylesDisabled,
  innerRadioStylesErrors,
} from './styles'

export interface RadioGroupProps extends FormProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: undefined
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const [value, setValue] = useState(props.value || '')
  const {
    onValueChange,
    isDisabled,
    isRequired,
    validators,
    onErrors: handleErrors,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ...otherProps
  } = props

  const { isValid, errors } = useFormValidation(value, [
    (v: string) => ({ 'uikit:required': isRequired && (v == null || v === '') }),
    ...validators,
  ])

  useEffect(() => setValue(props.value), [props.value])
  useEffect(() => onValueChange(value), [value])
  useEffect(() => handleErrors(errors), [errors])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  return (
    <ul css={[listStyles]} onBlur={handleBlur} onFocus={handleFocus} {...otherProps}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[
              listStyles,
              listItemStyles,
              innerRadioStyles,
              isDisabled && innerRadioStylesDisabled,
              !isValid && innerRadioStylesErrors,
            ]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled: child.props.isDisabled ? true : isDisabled,
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

RadioGroup.defaultProps = {
  ...(defaultFormProps as RadioGroupProps),
}
