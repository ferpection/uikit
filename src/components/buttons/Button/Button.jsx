import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  prepareBaseState,
  prepareFilledState,
  iconOnlyState,
} from './styles.js'

export const Button = props => {
  const {
    children,
    disabled = false,
    isFilled,
    isDisabled = disabled,
    color,
    hoverColor,
    icon: iconName,
    iconStore = 'fas',
    ariaLabel,
    ...args
  } = props

  const icon = findIconDefinition({ prefix: iconStore, iconName })
  const iconExist = icon != null
  const childrenExist = children != null
  const onlyIconExist = iconExist && !childrenExist

  const baseState = prepareBaseState({ color, darkerColor: hoverColor })
  const filledState = prepareFilledState({ color, darkerColor: hoverColor })

  let ariaLabelForIcon = ''
  if (onlyIconExist) {
    ariaLabelForIcon = iconName.replace(/-/g, '')
  }

  return (
    <button
      {...args}
      css={[
        baseState,
        isFilled ? filledState : null,
        onlyIconExist ? iconOnlyState : null,
      ]}
      type="button"
      ariaLabel={ariaLabel || ariaLabelForIcon}
      disabled={isDisabled}
    >
      {iconExist ? <FontAwesomeIcon icon={icon} size="m" /> : null}

      {iconExist && childrenExist ? <>&nbsp;</> : null}

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
  iconStore: propTypes.string,
}
