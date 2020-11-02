/** @jsx jsx */
import React, { Fragment, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'
import { FormErrors } from '../form-errors'

import { errorStyle, iconStyle } from './styles'

export interface FormErrorMessagesProps {
  errors: FormErrors
  className?: string
}

export const FormErrorMessages: React.FC<FormErrorMessagesProps> = props => {
  const { t } = useContext(I18nContext)
  const { errors, className } = props

  return (
    <Fragment>
      {Object.keys(errors)
        .filter(errorName => errors[errorName] !== false)
        .map(errorName => {
          const error = errors[errorName]

          return (
            <p key={errorName} className={className} css={errorStyle}>
              <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
              {error === true ? t(errorName) : null}
              {typeof error !== 'boolean' ? t(errorName, error) : null}
            </p>
          )
        })}
    </Fragment>
  )
}
