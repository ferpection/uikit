import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { errorStyle, iconStyle } from './styles'

export const FormErrors: React.FC<FormErrorsProps> = props => {
  const { errors } = props

  return (
    <>
      {Object.keys(errors).map(errorName => (
        <p key={errorName} css={errorStyle}>
          <FontAwesomeIcon icon="exclamation-triangle" css={iconStyle} />
          {errorName}
        </p>
      ))}
    </>
  )
}

export interface FormErrorsProps {
  errors: {
    [errorKey: string]: any
  }
}