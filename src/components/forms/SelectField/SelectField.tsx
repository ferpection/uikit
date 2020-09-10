/** @jsx jsx */
import React, { useState, useEffect, Fragment, ChangeEvent, SyntheticEvent, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { FormProps } from '../form-props'

import { baseStyle, placehoderStyle, highlightedStyle, disabledStyle, errorStyle, smallStyle } from './styles'

export interface SelectFieldProps extends FormProps {
  isHighlighted: boolean
  className?: string
  isSmall?: boolean
  hideErrors?: boolean
  value?: string
  onValueChange?: (value: string, event: SyntheticEvent) => void
}

export const SelectField: React.FC<SelectFieldProps> = props => {
  const { value: externalValue } = props

  const { addTranslations } = useContext(I18nContext)
  const [value, setValue] = useState(externalValue || '')
  const [errorMessages, setErrorMessages] = useState({})
  const [isValid, setValidity] = useState(true)

  addTranslations('en', {
    required: 'Please fill the field.',
  })

  addTranslations('fr', {
    required: 'Vous devez remplir le champ.',
  })

  useEffect(() => {
    setValue(externalValue)
  }, [externalValue])

  const {
    onValueChange = () => {},
    onErrors = () => {},
    onFocus: handleFocus = () => {},
    onBlur: handleBlur = () => {},
    isRequired,
    hideErrors,
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

    if (!hideErrors) {
      setErrorMessages(errors)
    }
  }, [value])

  const { className, isSmall = false, placeholder, isHighlighted, isDisabled, children } = props

  return (
    <Fragment>
      <select
        css={[
          baseStyle,
          isEmpty && placehoderStyle,
          isHighlighted && highlightedStyle,
          !isValid && errorStyle,
          isDisabled && disabledStyle,
          isSmall && smallStyle,
        ]}
        className={className}
        disabled={isDisabled}
        value={value}
        onChange={event => handleChanges(event)}
        onBlur={event => handleBlur(event)}
        onFocus={event => handleFocus(event)}
      >
        <option disabled={!isEmpty}>{placeholder}</option>
        {children}
      </select>
      <FormErrorMessages errors={errorMessages} />
    </Fragment>
  )
}
