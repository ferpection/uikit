import React from 'react'
import propTypes from 'prop-types'

import { styles } from './styles.js'

export const Button = props => {
  const {
    children,
    disabled = false,
    isFilled,
    isDisabled = disabled,
    color,
    hoverColor,
    ...args
  } = props

  return (
    <button
      css={styles({ isFilled, color, darkerColor: hoverColor })}
      disabled={isDisabled}
      {...args}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  isFilled: propTypes.bool,
  isDisabled: propTypes.bool,
  color: propTypes.string,
  hoverColor: propTypes.string,
}
