/** @jsx jsx */
import React, { useState, useEffect, Fragment, SyntheticEvent } from 'react'
import { jsx } from '@emotion/core'

import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { FormProps } from '../form-props'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle, errorStyle } from './styles'

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const TextField: React.FC<TextFieldProps> = props => {
  const {
    dataType = 'text',
    rowCount = 1,
    placeholder,
    isDisabled,
    isHighlighted,
    hideErrors,
    value: externalValue,
    isRequired,
    className,
  } = props

  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  useEffect(() => {
    setValue(externalValue || '')
  }, [externalValue])

  const {
    onValueChange = () => {},
    onErrors = () => {},
    onBlur: handleBlur = () => {},
    onFocus: handleFocus = () => {},
  } = props

  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value)
    onValueChange(event.target.value, event)
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
    <Fragment>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[baseStyle, isHighlighted && highlightedStyle, !isValid && errorStyle, isDisabled && disabledStyle]}
          className={className}
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
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
          className={className}
          placeholder={placeholder}
          value={value}
          rows={rowCount}
          disabled={isDisabled}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
        />
      ) : null}
      <FormErrorMessages errors={errorMessages} />
    </Fragment>
  )
}

export interface TextFieldProps extends FormProps {
  dataType?: 'text' | 'email'
  rowCount?: number
  isHighlighted?: boolean
  hideErrors?: boolean
  className?: string
  value?: string
  onValueChange?: (value: string, event: SyntheticEvent) => void
}
