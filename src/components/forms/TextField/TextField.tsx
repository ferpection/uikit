/** @jsx jsx */
import React, { useState, useEffect, Fragment, SyntheticEvent, useContext, forwardRef, MutableRefObject } from 'react'
import { jsx } from '@emotion/core'

import useFormErrors from '../../../hooks/useFormErrors'

import { I18nContext } from '../../contexts/I18nContext'

import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { FormProps } from '../form-props'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle, errorStyle, smallStyle } from './styles'

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

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    dataType = 'text',
    rowCount = 1,
    placeholder,
    isDisabled,
    isHighlighted,
    hideErrors,
    value: externalValue,
    errors: externalErrors,
    isRequired,
    className,
    isSmall = false,
  } = props

  const { addTranslations } = useContext(I18nContext)
  const [value, setValue] = useState(externalValue || '')

  addTranslations('en', {
    emailInvalid: 'Please enter an email address on this field.',
    notANumber: 'Please enter a valid number on this field.',
    required: 'Please fill the field.',
  })

  addTranslations('fr', {
    emailInvalid: 'Vous devez écrire une adresse email valide.',
    notANumber: 'Vous devez écrire un nombre dans ce champ.',
    required: 'Vous devez remplir le champ.',
  })

  useEffect(() => {
    setValue(externalValue || '')
  }, [externalValue])

  const {
    onValueChange: handleValueChange = () => {},
    onErrors: handleErrorsChange = () => {},
    onBlur: handleBlur = () => {},
    onFocus: handleFocus = () => {},
  } = props

  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value)
    handleValueChange(event.target.value, event)
  }

  const { isValid, errors, showableErrors, addError } = useFormErrors({ externalErrors, hideErrors, value, dataType, isRequired })

  addError('uikit:emailInvalid', ({ value: v, dataType: d }) => d === 'email' && !EMAIL_REGEXP.test(v))
  addError('uikit:notANumber', ({ value: v, dataType: d }) => d === 'number' && Number.isNaN(Number(v)))
  addError('uikit:required', ({ value: v, isRequired: r }) => r && (v == null || v === ''))

  useEffect(() => handleErrorsChange(errors), [errors])

  const inputType = dataType === 'number' ? 'text' : dataType

  return (
    <Fragment>
      {rowCount < 2 ? (
        <input
          ref={ref as MutableRefObject<HTMLInputElement>}
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
          inputMode={dataType === 'number' ? 'numeric' : null}
          pattern={dataType === 'number' ? '[0-9]*' : null}
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
          ref={ref as MutableRefObject<HTMLTextAreaElement>}
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
      <FormErrorMessages errors={showableErrors} />
    </Fragment>
  )
})
