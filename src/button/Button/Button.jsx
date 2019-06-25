import React from 'react'
import propTypes from 'prop-types'

import { styles } from './styles.js'

export const Button = props => {
  const { children, disabled = false, isFilled, isDisabled = disabled, ...args } = props

  return (
    <button css={styles({ isFilled })} disabled={isDisabled} {...args}>
      {children}
    </button>
  )
}

Button.propTypes = {
  isFilled: propTypes.bool,
  isDisabled: propTypes.bool,
}
