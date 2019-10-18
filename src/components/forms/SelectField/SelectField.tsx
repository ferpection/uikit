/** @jsx jsx */
import React, {
  useState,
  useEffect,
  Fragment,
  ChangeEvent,
  SyntheticEvent,
} from 'react'
import { jsx } from '@emotion/core'

import { FormErrors } from '../FormErrors/FormErrors'
import { FormProps } from '../form-props'

import {
  baseStyle,
  placehoderStyle,
  highlightedStyle,
  disabledStyle,
  errorStyle,
} from './styles'

export const SelectField: React.FC<SelectFieldProps> = props => {
  const {
    placeholder,
    isHighlighted,
    isDisabled,
    isRequired,
    value: externalValue,
    children,
  } = props

  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  const {
    onValueChange = () => {},
    onErrors = (e: { [errorKey: string]: any }) => setErrorMessages(e),
    onFocus: handleFocus = () => {},
    onBlur: handleBlur = () => {},
  } = props

  const isEmpty = value == null || value === ''
  const handleChanges = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
    onValueChange(event.target.value, event)
  }

  useEffect(() => {
    if (externalValue != null && externalValue !== value) {
      setValue(externalValue)
    }

    let errors = {}
    if (isRequired && isEmpty) {
      errors = Object.assign({}, errors, {
        required: {},
      })
    }

    setValidity(Object.keys(errors).length <= 0)
    onErrors(errors)
  }, [value])

  return (
    <Fragment>
      <select
        css={[
          baseStyle,
          isEmpty && placehoderStyle,
          isHighlighted && highlightedStyle,
          !isValid && errorStyle,
          isDisabled && disabledStyle,
        ]}
        disabled={isDisabled}
        value={value}
        onChange={event => handleChanges(event)}
        onBlur={event => handleBlur(event)}
        onFocus={event => handleFocus(event)}
      >
        <option disabled={!isEmpty}>{placeholder}</option>
        {children}
      </select>
      <FormErrors errors={errorMessages} />
    </Fragment>
  )
}

export interface SelectFieldProps extends FormProps {
  isHighlighted: boolean
  value?: string
  onValueChange?: (value: string, event: SyntheticEvent) => void
}
