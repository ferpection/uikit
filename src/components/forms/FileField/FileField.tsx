/** @jsx jsx */
import { useState, useEffect, SyntheticEvent, Fragment } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'

import {
  baseStyle,
  placeholder as placeholderStyle,
  button,
  hiddenInput,
  highlightedStyle,
  disabledStyle,
  placeholderDisabledStyle,
  buttonDisabledStyle,
  errorStyle,
  valueStyle,
} from './styles'

export function FileField(props: FileFieldProps) {
  const { isDisabled, placeholder = 'Choose a file...', isHighlighted, accept = '', isRequired, hideErrors } = props
  const [value, setValue] = useState('')
  const [isValid, setValidity] = useState(true)
  const [errorMessages, setErrorMessages] = useState({})

  const {
    onValueChange = () => {},
    onErrors = () => {},
    onBlur: handleBlur = () => {},
    onFocus: handleFocus = () => {},
  } = props

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onValueChange(event.target.value, event)
  }

  useEffect(() => {
    let errors = {}
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
      <label>
        <input
          css={[hiddenInput]}
          type="file"
          accept={accept}
          disabled={isDisabled}
          value={value}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
        />
        <div css={[baseStyle, isHighlighted && highlightedStyle, !isValid && errorStyle, isDisabled && disabledStyle]}>
          {(value == null || value === '') && (
            <div css={[placeholderStyle, isDisabled && placeholderDisabledStyle]}>{placeholder}</div>
          )}
          {value != null && value !== '' && <div css={[valueStyle]}>{value.split('\\').pop()}</div>}
          <div css={[button, isDisabled && buttonDisabledStyle]} role="button">
            Browse
          </div>
        </div>
      </label>
      <FormErrorMessages errors={errorMessages} />
    </Fragment>
  )
}

export interface FileFieldProps extends FormProps {
  isHighlighted?: boolean
  value?: string
  onValueChange?: (value: string, event: SyntheticEvent) => void
  accept?: string
  hideErrors?: boolean
}
