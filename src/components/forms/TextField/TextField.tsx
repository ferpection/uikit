import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import { FormErrors } from '../FormErrors/FormErrors'

import {
  baseStyle,
  textareaStyle,
  disabledStyle,
  highlightedStyle,
  errorStyle,
} from './styles'

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const TextField = props => {
  const {
    dataType = 'text',
    rowCount = 1,
    placeholder,
    isDisabled,
    isHighlighted,
    hideErrors,
    value: externalValue,
    isRequired,
  } = props

  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  const { onValueChange = () => {}, onErrors = () => {} } = props

  const handleChanges = v => {
    setValue(v)
    onValueChange(v)
  }

  useEffect(() => {
    if (externalValue != null && externalValue !== value) {
      setValue(externalValue)
    }

    let errors = {}
    if (dataType === 'email' && !EMAIL_REGEXP.test(value)) {
      errors = Object.assign({}, errors, {
        emailInvalid: { value },
      })
    }

    if (isRequired && (value == null || value === '')) {
      errors = Object.assign({}, errors, {
        required: {},
      })
    }

    setValidity(Object.keys(errors).length <= 0)
    onErrors(errors)

    if (!hideErrors) {
      setErrorMessages(errors)
    }
  }, [value])

  return (
    <>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[
            baseStyle,
            isHighlighted && highlightedStyle,
            !isValid && errorStyle,
            isDisabled && disabledStyle,
          ]}
          value={value}
          onChange={event => handleChanges(event.target.value)}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      ) : null}
      {rowCount >= 2 ? (
        <textarea
          css={[
            baseStyle,
            textareaStyle,
            isHighlighted && highlightedStyle,
            !isValid && errorStyle,
            isDisabled && disabledStyle,
          ]}
          value={value}
          onChange={event => handleChanges(event.target.value)}
          placeholder={placeholder}
          rows={rowCount}
          disabled={isDisabled}
        />
      ) : null}
      <FormErrors errors={errorMessages} />
    </>
  )
}

TextField.propTypes = {
  placeholder: propTypes.string,
  dataType: propTypes.oneOf(['text', 'email']),
  rowCount: propTypes.number,
  isHighlighted: propTypes.bool,
  isDisabled: propTypes.bool,
  isRequired: propTypes.bool,
  hideErrors: propTypes.bool,
  value: propTypes.string,
  onValueChange: propTypes.func,
  onErrors: propTypes.func,
}
