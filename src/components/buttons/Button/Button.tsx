/** @jsx jsx */
import React, { Fragment, SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { jsx } from '@emotion/react'

import { ButtonContainer } from '../ButtonContainer'
import { useTheme } from '../../contexts/ThemeContext'
import { Color } from '../../../colors'

import { prepareBaseState, prepareFilledState, iconOnlyState, rawLinkState } from './styles'

export interface ButtonProps {
  className?: string
  isFilled?: boolean
  isDisabled?: boolean
  isRaw?: boolean
  color?: Color
  hoverColor?: Color
  icon?: IconName
  iconStore?: IconPrefix
  actionType?: 'action' | 'positive' | 'negative'
  to?: string
  ariaLabel?: string
  tabIndex?: number
  onClick?: (event: SyntheticEvent) => void
  onMouseUp?: (event?: SyntheticEvent) => void
  onMouseDown?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

export const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme()
  const {
    children,
    isFilled,
    isRaw,
    isDisabled,
    color,
    hoverColor,
    icon: iconName,
    iconStore = 'fas',
    ariaLabel,
    actionType = 'action',
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

  return (
    <ButtonContainer
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

      {iconExist && childrenExist ? <Fragment>&nbsp;</Fragment> : null}

      {children}
    </ButtonContainer>
  )
}
