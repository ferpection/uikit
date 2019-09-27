/** @jsx jsx */
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jsx } from '@emotion/core'

import { errorStyle, iconStyle } from './styles'

export const FormErrors: React.FC<FormErrorsProps> = props => {
  const { errors } = props

  return (
    <Fragment>
      {Object.keys(errors).map(errorName => (
        <p key={errorName} css={errorStyle}>
          <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
          {errorName}
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
