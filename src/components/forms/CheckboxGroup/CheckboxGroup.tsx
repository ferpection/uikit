/** @jsx jsx */
import { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import useFormValidation from '../../../hooks/useFormValidation'

import { defaultFormProps, FormProps } from '../form-props'

import {
  listStyles,
  listItemStyles,
  innerCheckboxStyles,
  listItemDisabledStyles,
  listItemErrorStyles,
  listErrorStyles,
} from './styles'

export interface CheckboxGroupProps extends FormProps {
  className?: string
  value?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: undefined
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const [values, setValues] = useState(props.value || [])
  const {
    onValueChange,
    className,
    isDisabled,
    isRequired,
    validators,
    onErrors: handleErrors,
    onBlur: handleBlur,
    onFocus: handleFocus,
  } = props

  const { isValid, errors } = useFormValidation(values, [
    (v: string) => ({ 'uikit:required': isRequired && (v == null || v.length < 1) }),
    ...validators,
  ])

  useEffect(() => setValues(props.value || []), [props.value])
  useEffect(() => onValueChange(values), [values])
  useEffect(() => handleErrors(errors), [errors])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value
    if (values.includes(option)) {
      setValues(values.filter(opt => opt !== option))
      return
    }

    setValues([...values, event.target.value])
  }

  return (
    <ul className={className} css={[listStyles, !isValid && listErrorStyles]} onBlur={handleBlur} onFocus={handleFocus}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[
              listItemStyles,
              innerCheckboxStyles,
              isDisabled && listItemDisabledStyles,
              !isValid && listItemErrorStyles,
            ]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled: child.props.isDisabled ? true : isDisabled,
              onValueChange: handleChange,
              isChecked: values.includes(child.props.value),
              checkboxPosition: 'center',
            })}
          </li>
        )
      })}
    </ul>
  )
}

CheckboxGroup.defaultProps = {
  ...(defaultFormProps as CheckboxGroupProps),
}
