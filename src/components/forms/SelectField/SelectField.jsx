import React, { useState, useEffect } from 'react'

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
  } = props

  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  const {
    onValueChange = () => {},
    onErrors = e => setErrorMessages(e),
  } = props

  const handleChanges = v => {
    setValue(v)
    onValueChange(v)
  }

  useEffect(() => {
    if (externalValue != null && externalValue !== value) {
      setValue(externalValue)
    }

    let errors = {}
    if (isRequired && (value == null || value === '')) {
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
          isHighlighted && highlightedStyle,
          !isValid && errorStyle,
          isDisabled && disabledStyle,
        ]}
        disabled={isDisabled}
        onChange={event => handleChanges(event.target.value)}
      >
        <option css={[placehoderStyle]} disabled selected>
          {placeholder}
        </option>
      </select>
      <FormErrors errors={errorMessages} />
    </>
  )
}
