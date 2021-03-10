/** @jsx jsx */
import { Fragment, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jsx } from '@emotion/react'

import { FormErrors } from '../form-errors'

import { errorStyle, iconStyle } from './styles'

export interface FormErrorMessagesProps {
  errors?: FormErrors
  translatedErrors?: string[]
  className?: string
  translatorFn?: (translationKey: string, variables?: { [variableName: string]: any }) => string
}

export const FormErrorMessages: FC<FormErrorMessagesProps> = props => {
  const { errors = {}, translatedErrors = [], className, translatorFn = value => value } = props

  function renderError(text: string) {
    return (
      <p key={text} className={className} css={errorStyle}>
        <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
        {text}
      </p>
    )
  }

  return (
    <Fragment>
      {translatedErrors.filter(errorText => errorText != null).map(errorText => renderError(errorText))}
      {Object.keys(errors)
        .filter(errorName => errors[errorName] !== false)
        .map(errorName => {
          const error = errors[errorName]

          if (error === true) {
            return translatorFn(errorName)
          }

          if (typeof error !== 'boolean') {
            return translatorFn(errorName, error)
          }

          return null
        })
        .filter(errorText => errorText != null)
        .map(errorText => renderError(errorText))}
    </Fragment>
  )
}
