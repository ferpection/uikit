/** @jsx jsx */
import React, { useState, useEffect, SyntheticEvent, Fragment, useRef, useContext } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { I18nContext } from '../../contexts/I18nContext'

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

  addTranslations('fr', {
    fileAmount: '{ $count } fichiers',
    browse: 'Choisir',
    required: 'Vous devez remplir le champ.',
    placeholder: 'Choisissez un fichier...',
  })

  const {
    isDisabled,
    placeholder = t('uikit:placeholder'),
    isHighlighted,
    accept,
    isRequired,
    hideErrors,
    capture,
    isMultiple,
    value: initialValue,
  } = props
  const [files, setFiles] = useState<File[]>(initialValue ?? [])
  const [isValid, setValidity] = useState(true)
  const [errorMessages, setErrorMessages] = useState({})
  const fileInput = useRef<HTMLInputElement>()

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

  useEffect(() => {
    let errors = {}
    if (isRequired && (files == null || files.length < 1)) {
      errors = Object.assign({}, errors, {
        'uikit:required': {},
      })
    }

    setValidity(Object.keys(errors).length <= 0)
    onErrors(errors)

    if (!hideErrors) {
      setErrorMessages(errors)
    }
  }, [files])

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
        <div css={[baseStyle, isHighlighted && highlightedStyle, !isValid && errorStyle, isDisabled && disabledStyle]}>
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
      <FormErrorMessages errors={errorMessages} />
    </Fragment>
  )
}
