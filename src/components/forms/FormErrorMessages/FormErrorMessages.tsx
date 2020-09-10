/** @jsx jsx */
import React, { Fragment, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'

import { errorStyle, iconStyle } from './styles'

export interface FormErrorMessagesProps {
  errors: {
    [errorKey: string]: any
  }
}

export const FormErrorMessages: React.FC<FormErrorMessagesProps> = props => {
  const { t } = useContext(I18nContext)
  const { errors } = props

  return (
    <Fragment>
      {Object.keys(errors)
        .filter(errorName => errors[errorName] !== false)
        .map(errorName => (
          <p key={errorName} css={errorStyle}>
            <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
            {errors[errorName] === true ? t(errorName) : null}
            {errors[errorName] !== true ? t(errorName, errors[errorName]) : null}
          </p>
        ))}
    </Fragment>
  )
}
