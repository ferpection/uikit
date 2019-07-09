import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import { styles } from './styles.js'

export const Button = props => {
  const {
    children,
    disabled = false,
    isFilled,
    isDisabled = disabled,
    color,
    hoverColor,
    icon: iconName,
    iconPrefix = 'fas',
    ...args
  } = props

  const icon = findIconDefinition({ prefix: iconPrefix, iconName })
  const iconExist = icon != null
  const childrenExist = children != null

  return (
    <button
      css={styles({ isFilled, color, darkerColor: hoverColor })}
      disabled={isDisabled}
      {...args}
    >
      {iconExist ? (
        <FontAwesomeIcon icon={icon} size="m" />
      ) : null}

      {iconExist && childrenExist ? (
        <>&nbsp;</>
      ) : null}

      {children}
    </button>
  )
}

Button.propTypes = {
  isFilled: propTypes.bool,
  isDisabled: propTypes.bool,
  color: propTypes.string,
  hoverColor: propTypes.string,
  icon: propTypes.string,
  iconPrefix: propTypes.string,
}
