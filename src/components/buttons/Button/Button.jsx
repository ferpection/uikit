import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  prepareBaseState,
  prepareFilledState,
  iconOnlyState,
} from './styles.js'
import { PRIMARY_COLORSET } from '../../../colors/index.js'

const COLORS = {
  action: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  positive: PRIMARY_COLORSET.SHAMROCK,
  negative: PRIMARY_COLORSET.SUNGLOW,
}

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
    actionType = 'default',
    ...args
  } = props

  const icon = findIconDefinition({ prefix: iconStore, iconName })
  const iconExist = icon != null
  const childrenExist = children != null
  const onlyIconExist = iconExist && !childrenExist

  let baseState = prepareBaseState({ color, darkerColor: hoverColor })
  let filledState = prepareFilledState({ color, darkerColor: hoverColor })

  if (color == null) {
    baseState = prepareBaseState({ color: COLORS[actionType] || COLORS['action'] })
    filledState = prepareFilledState({ color: COLORS[actionType] || COLORS['action'] })
  }

  let ariaLabelForIcon = ''

  if (typeof children === 'string') {
    ariaLabelForIcon = children
  }

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
  actionType: propTypes.oneOf(['default', 'positive', 'negative']),
}
