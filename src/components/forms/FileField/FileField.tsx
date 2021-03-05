/** @jsx jsx */
import React, { useState, useEffect, SyntheticEvent, Fragment, useRef, useContext } from 'react'
import { jsx } from '@emotion/react'

import useFormValidation from '../../../hooks/useFormValidation'

import { I18nContext } from '../../contexts/I18nContext'

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
  isHighlighted?: boolean
  isMultiple?: boolean
  accept?: string
  hideErrors?: boolean
  capture?: 'user' | 'environment'
  className?: string
  onValueChange?: (value: File[], event: SyntheticEvent) => void
}

export function FileField(props: FileFieldProps) {
  const { addTranslations, t } = useContext(I18nContext)

  addTranslations('en', {
    fileAmount: '{ $count } files',
    browse: 'Browse',
    required: 'Please fill the field.',
    placeholder: 'Choose a file...',
  })

  addTranslations('zh_HANS', {
    fileAmount: '{ $count }档',
    required: '请填写该字段。',
    browse: '浏览',
    placeholder: '选择一个文件...',
  })

  addTranslations('fr', {
    fileAmount: '{ $count } fichiers',
    browse: 'Choisir',
    required: 'Vous devez remplir le champ.',
    placeholder: 'Choisissez un fichier...',
  })

  const {
    className,
    accept,
    capture,
    placeholder = t('uikit:placeholder'),
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
          {files.length > 1 && <div css={[valueStyle]}>{t('uikit:fileAmount', { count: files.length })}</div>}
          <div css={[button, isDisabled && buttonDisabledStyle]} role="button">
            {t('uikit:browse')}
          </div>
        </div>
      </label>
      <FormErrorMessages errors={showableErrors} />
    </Fragment>
  )
}

FileField.defaultProps = {
  ...(defaultFormProps as FileFieldProps),
  isHighlighted: false,
}
