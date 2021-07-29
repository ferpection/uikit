import { useEffect, Fragment, SyntheticEvent, forwardRef, MutableRefObject, ChangeEvent } from 'react'

import useFormValidation from '../../../hooks/useFormValidation'

import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { defaultFormProps, FormProps } from '../form-props'

import { useTextFieldState } from './hooks/useTextFieldState'
import { DataType } from './types'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle, errorStyle, smallStyle } from './styles'
import { useTheme } from '../../../hooks/useTheme'

export interface TextFieldProps extends FormProps {
  dataType?: DataType
  rowCount?: number
  isHighlighted?: boolean
  hideErrors?: boolean
  className?: string
  value?: string
  isSmall?: boolean
  onValueChange?: (value: string, event: SyntheticEvent) => void
  onSelect?: (event?: SyntheticEvent) => void
}

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    dataType,
    rowCount,
    placeholder,
    isDisabled,
    isHighlighted,
    isRequired,
    isSmall,
    hideErrors,
    value: externalValue,
    validators,
    onValueChange: handleValueChange,
    onErrors: handleErrorsChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onSelect: handleSelect,
    ...otherProps
  } = props

  const [value, setValue] = useTextFieldState(externalValue || '', dataType)

  useEffect(() => setValue(externalValue || ''), [externalValue])
  const { isValid, errors, showableErrors } = useFormValidation(
    value,
    [
      (v: string) => ({ 'uikit:emailInvalid': dataType === 'email' && !EMAIL_REGEXP.test(v) }),
      (v: string) => ({ 'uikit:required': isRequired && (v == null || v === '') }),
      ...validators,
    ],
    hideErrors,
  )

  const theme = useTheme()
  const handleChanges = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value)
    handleValueChange(event.target.value, event)
  }

  useEffect(() => handleErrorsChange(errors), [errors])

  const inputType = dataType === 'number' ? 'text' : dataType

  const canDisplayEmptyError = Boolean(showableErrors['uikit:required'])
  const canDisplayInvalidEmailError = Boolean(showableErrors['uikit:emailInvalid'])

  return (
    <Fragment>
      {rowCount < 2 ? (
        <input
          ref={ref as MutableRefObject<HTMLInputElement>}
          type={inputType}
          css={[
            baseStyle(theme),
            isHighlighted && highlightedStyle(theme),
            !isValid && errorStyle(theme),
            isDisabled && disabledStyle,
            isSmall && smallStyle,
          ]}
          placeholder={placeholder}
          inputMode={dataType === 'number' ? 'numeric' : null}
          pattern={dataType === 'number' ? '[0-9]*' : null}
          value={value}
          disabled={isDisabled}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
          onSelect={event => handleSelect(event)}
          {...otherProps}
        />
      ) : null}
      {rowCount >= 2 ? (
        <textarea
          css={[
            baseStyle(theme),
            textareaStyle,
            isHighlighted && highlightedStyle(theme),
            !isValid && errorStyle(theme),
            isDisabled && disabledStyle,
            isSmall && smallStyle,
          ]}
          ref={ref as MutableRefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          value={value}
          rows={rowCount}
          inputMode={dataType === 'number' ? 'numeric' : null}
          disabled={isDisabled}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
          onSelect={event => handleSelect(event)}
          {...otherProps}
        />
      ) : null}
      {canDisplayEmptyError && <FormErrorMessages translatedErrors={['Please fill the field.']} />}
      {canDisplayInvalidEmailError && (
        <FormErrorMessages translatedErrors={['Please enter an email address on this field.']} />
      )}
    </Fragment>
  )
})

TextField.defaultProps = {
  ...(defaultFormProps as TextFieldProps),
  dataType: 'text',
  rowCount: 1,
  hideErrors: false,
  isSmall: false,
  isHighlighted: false,
  onSelect: () => {},
}
