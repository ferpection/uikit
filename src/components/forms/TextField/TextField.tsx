/** @jsx jsx */
import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react'
import { jsx } from '@emotion/core'

import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { FormProps } from '../form-props'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle, errorStyle, smallStyle } from './styles'
import { I18nContext } from '../../contexts/I18nContext'

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
    isSmall = false,
  } = props

  const { addTranslations } = useContext(I18nContext)
  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  addTranslations('en', {
    emailInvalid: 'Please enter an email address on this field.',
    required: 'Please fill the field.',
  })

  addTranslations('fr', {
    emailInvalid: 'Vous devez écrire une adresse email valide.',
    required: 'Vous devez remplir le champ.',
  })

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

    if (dataType === 'number' && Number.isNaN(Number(value))) {
      errors = Object.assign({}, errors, {
        notANumber: { value },
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

  const inputType = dataType === 'number' ? 'text' : dataType

  return (
    <Fragment>
      {rowCount < 2 ? (
        <input
          type={inputType}
          css={[
            baseStyle,
            isHighlighted && highlightedStyle,
            !isValid && errorStyle,
            isDisabled && disabledStyle,
            isSmall && smallStyle,
          ]}
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
            isSmall && smallStyle,
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
  dataType?: 'text' | 'email' | 'number'
  rowCount?: number
  isHighlighted?: boolean
  hideErrors?: boolean
  className?: string
  value?: string
  isSmall?: boolean
  onValueChange?: (value: string, event: SyntheticEvent) => void
}
