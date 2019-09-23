import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propTypes from 'prop-types'

import { errorStyle, iconStyle } from './styles'

export const FormErrors = props => {
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

FormErrors.propTypes = {
  errors: propTypes.object,
}
