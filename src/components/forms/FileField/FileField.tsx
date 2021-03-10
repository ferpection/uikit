/** @jsx jsx */
import React, { useState, useEffect, SyntheticEvent, Fragment, useRef } from 'react'
import { jsx } from '@emotion/react'

import useFormValidation from '../../../hooks/useFormValidation'

import { defaultFormProps, FormProps } from '../form-props'
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

export interface FileFieldProps extends FormProps {
  value?: File[]
  browseButtonLabel?: string
  severalFilesSelectedLabel?: string | ((count: number) => string)
  isHighlighted?: boolean
  isMultiple?: boolean
  accept?: string
  hideErrors?: boolean
  capture?: 'user' | 'environment'
  className?: string
  onValueChange?: (value: File[], event: SyntheticEvent) => void
}

export function FileField(props: FileFieldProps) {
  const {
    className,
    accept,
    capture,
    placeholder = 'Choose a file...',
    browseButtonLabel = 'Browse',
    severalFilesSelectedLabel = count => `${count} files`,
    isDisabled = false,
    isHighlighted = false,
    isRequired = false,
    isMultiple = false,
    hideErrors = false,
    value: initialValue,
    validators = [],
  } = props
  const [files, setFiles] = useState<File[]>(Array.isArray(initialValue) ? initialValue : [])
  const fileInput = useRef<HTMLInputElement>()

  useEffect(() => {
    fileInput.current.value = null
    setFiles(Array.isArray(initialValue) ? initialValue : [])
  }, [initialValue])

  const {
    onValueChange = () => {},
    onErrors = () => {},
    onBlur: handleBlur = () => {},
    onFocus: handleFocus = () => {},
  } = props

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(fileInput?.current?.files)
    setFiles(newFiles)
    onValueChange(newFiles, event)
  }

  const { isValid, errors, showableErrors } = useFormValidation(
    files,
    [...validators, (f: File[]) => ({ 'uikit:required': isRequired && (f == null || f.length < 1) })],
    hideErrors,
  )

  useEffect(() => onErrors(errors), [errors])

  const canDisplayEmptyError = Boolean(showableErrors['uikit:required'])

  return (
    <Fragment>
      <label>
        <input
          css={[hiddenInput]}
          ref={fileInput}
          type="file"
          accept={accept}
          capture={capture}
          multiple={isMultiple}
          disabled={isDisabled}
          onChange={event => handleChanges(event)}
          onFocus={event => handleFocus(event)}
          onBlur={event => handleBlur(event)}
        />
        <div
          className={className}
          css={[baseStyle, isHighlighted && highlightedStyle, !isValid && errorStyle, isDisabled && disabledStyle]}
        >
          {files.length < 1 && (
            <div css={[placeholderStyle, isDisabled && placeholderDisabledStyle]}>{placeholder}</div>
          )}
          {files.length === 1 && <div css={[valueStyle]}>{files[0].name.split(/(\\|\/)/).pop()}</div>}
          {files.length > 1 && <div css={[valueStyle]}>{typeof severalFilesSelectedLabel === 'string' ? severalFilesSelectedLabel : severalFilesSelectedLabel(files.length)}</div>}
          <div css={[button, isDisabled && buttonDisabledStyle]} role="button">
            {browseButtonLabel}
          </div>
        </div>
      </label>
      {canDisplayEmptyError && (<FormErrorMessages translatedErrors={['Please fill the field.']} />)}
    </Fragment>
  )
}

FileField.defaultProps = {
  ...(defaultFormProps as FileFieldProps),
  isHighlighted: false,
}
