import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import { FormErrors } from '../FormErrors/FormErrors'

import {
  baseStyle,
  placehoderStyle,
  highlightedStyle,
  disabledStyle,
  errorStyle,
} from './styles'

export const SelectField = props => {
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
    onErrors = e => setErrorMessages(e),
  } = props

  const isEmpty = value == null || value === ''
  const handleChanges = v => {
    setValue(v)
    onValueChange(v)
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
    <>
      <select
        css={[
          baseStyle,
          isEmpty && placehoderStyle,
          isHighlighted && highlightedStyle,
          !isValid && errorStyle,
          isDisabled && disabledStyle,
        ]}
        disabled={isDisabled}
        onChange={event => handleChanges(event.target.value)}
        value={value}
      >
        <option disabled={!isEmpty} defaultValue>
          {placeholder}
        </option>
        {children}
      </select>
      <FormErrors errors={errorMessages} />
    </>
  )
}

SelectField.propTypes = {
  placeholder: propTypes.string,
  isHighlighted: propTypes.bool,
  isDisabled: propTypes.bool,
  isRequired: propTypes.bool,
  value: propTypes.string,
  onValueChange: propTypes.func,
  onErrors: propTypes.func,
}
