/** @jsx jsx */
import { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/react'

import useFormValidation from '../../../hooks/useFormValidation'

import { ActionType } from '../../action-type'
import { useTheme } from '../../contexts/ThemeContext'

import { defaultFormProps, FormProps } from '../form-props'

import {
  listStyles,
  listItemStyles,
  innerRadioStyles,
  listItemDisabledStyles,
  listItemErrorStyles,
  listErrorStyles,
} from './styles'

export interface RadioGroupProps extends FormProps {
  className?: string
  value?: string
  placeholder?: undefined
  actionType?: ActionType
  onValueChange?: (value: string) => void
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const theme = useTheme()
  const [value, setValue] = useState(props.value || '')
  const {
    onValueChange,
    isDisabled,
    isRequired,
    validators,
    actionType,
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
    <ul
      css={[listStyles, !isValid && listErrorStyles(theme)]}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...otherProps}
    >
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[
              listItemStyles,
              innerRadioStyles,
              isDisabled && listItemDisabledStyles,
              !isValid && listItemErrorStyles(theme),
            ]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled: child.props.isDisabled ? true : isDisabled,
              actionType: actionType != null ? actionType : child.props.actionType,
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
