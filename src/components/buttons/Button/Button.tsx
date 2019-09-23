import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import { processButtonContainer } from '../process-button-container'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Color } from '../../../colors'

import {
  prepareBaseState,
  prepareFilledState,
  iconOnlyState,
  rawLinkState,
} from './styles.js'

export const Button = props => {
  const theme = useContext(ThemeContext)
  const {
    children,
    disabled = false,
    isFilled,
    isRaw,
    isDisabled = disabled,
    color,
    hoverColor,
    icon: iconName,
    iconStore = 'fas',
    ariaLabel,
    actionType = 'default',
    to,
    ...args
  } = props

  const icon = findIconDefinition({ prefix: iconStore, iconName })
  const iconExist = icon != null
  const childrenExist = children != null
  const onlyIconExist = iconExist && !childrenExist
  const mainColor = color || theme.colors[actionType] || theme.colors.action

  const baseState = prepareBaseState({
    color: mainColor,
    darkerColor: hoverColor,
  })
  const filledState = prepareFilledState({
    color: mainColor,
    darkerColor: hoverColor,
  })

  let ariaLabelForIcon = ''

  if (typeof children === 'string') {
    ariaLabelForIcon = children
  }

  if (onlyIconExist) {
    ariaLabelForIcon = iconName.replace(/-/g, '')
  }

  const Container = processButtonContainer(to)

  return (
    <Container
      {...args}
      css={[
        baseState,
        isFilled && !isRaw ? filledState : null,
        onlyIconExist ? iconOnlyState : null,
        isRaw ? rawLinkState : null,
      ]}
      aria-label={ariaLabel || ariaLabelForIcon}
      disabled={isDisabled}
    >
      {iconExist ? <FontAwesomeIcon icon={icon} size="sm" /> : null}

      {iconExist && childrenExist ? <>&nbsp;</> : null}

      {children}
    </Container>
  )
}

Button.propTypes = {
  isFilled: propTypes.bool,
  isDisabled: propTypes.bool,
  isRaw: propTypes.bool,
  color: propTypes.instanceOf(Color),
  hoverColor: propTypes.instanceOf(Color),
  icon: propTypes.string,
  iconStore: propTypes.string,
  actionType: propTypes.oneOf(['default', 'positive', 'negative']),
  to: propTypes.string,
}
