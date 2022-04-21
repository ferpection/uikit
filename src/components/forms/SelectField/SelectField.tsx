import { useState, useEffect, Fragment, ChangeEvent, SyntheticEvent, PropsWithChildren } from 'react'

import useFormValidation from '../../../hooks/useFormValidation'
import { useTheme } from '../../../hooks/useTheme'

import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { defaultFormProps, FormProps } from '../form-props'

import { baseStyle, placehoderStyle, highlightedStyle, disabledStyle, errorStyle, smallStyle } from './styles'

export interface SelectFieldProps extends FormProps {
  isHighlighted?: boolean
  className?: string
  isSmall?: boolean
  hideErrors?: boolean
  value?: string
  onValueChange?: (value: string, event: SyntheticEvent) => void
}

export function SelectField(props: PropsWithChildren<SelectFieldProps>) {
  const theme = useTheme()
  const { value: externalValue } = props
  const [value, setValue] = useState(externalValue || '')
  useEffect(() => setValue(externalValue), [externalValue])

  const {
    onValueChange = () => {},
    onErrors = () => {},
    onFocus: handleFocus = () => {},
    onBlur: handleBlur = () => {},
    isRequired = false,
    hideErrors = false,
    validators = [],
  } = props

  const handleChanges = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
    onValueChange(event.target.value, event)
  }

  const { isValid, errors, showableErrors } = useFormValidation(
    value,
    [...validators, v => ({ 'uikit:required': isRequired && (v == null || v === '') })],
    hideErrors,
  )

  useEffect(() => onErrors(errors), [errors])

  const { className, isSmall = false, placeholder, isHighlighted = false, isDisabled, children } = props
  const isEmpty = Boolean(errors['uikit:required'])
  const canDisplayEmptyError = Boolean(showableErrors['uikit:required'])

  return (
    <Fragment>
      <select
        css={[
          baseStyle(theme),
          isEmpty && placehoderStyle,
          isHighlighted && highlightedStyle(theme),
          !isValid && errorStyle(theme),
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
      {canDisplayEmptyError && <FormErrorMessages translatedErrors={['Please fill the field.']} />}
    </Fragment>
  )
}

SelectField.defaultProps = {
  ...(defaultFormProps as SelectFieldProps),
  isHighlighted: false,
}
