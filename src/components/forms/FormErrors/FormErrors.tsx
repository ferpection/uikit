/** @jsx jsx */
import React, { Fragment, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../contexts/I18nContext'

import { errorStyle, iconStyle } from './styles'

export const FormErrors: React.FC<FormErrorsProps> = props => {
  const { t } = useContext(I18nContext)
  const { errors } = props

  return (
    <Fragment>
      {Object.keys(errors).map(errorName => (
        <p key={errorName} css={errorStyle}>
          <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
          {t(errorName, errors[errorName])}
        </p>
      ))}
    </Fragment>
  )
}

export interface FormErrorsProps {
  errors: {
    [errorKey: string]: any
  }
}
