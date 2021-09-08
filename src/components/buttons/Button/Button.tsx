import { Fragment, SyntheticEvent, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

import { ButtonContainer } from '../ButtonContainer'
import { useTheme } from '../../../hooks/useTheme'
import { Color } from '../../../colors'

import { prepareBaseState, prepareFilledState, iconOnlyState, rawLinkState } from './styles'

export interface ButtonProps {
  to?: string
  actionType?: 'action' | 'positive' | 'negative'
  className?: string
  color?: Color
  hoverColor?: Color
  icon?: IconName
  iconStore?: IconPrefix
  ariaLabel?: string
  tabIndex?: number
  iconPosition?: 'start' | 'start-text' | 'end-text' | 'end'
  textPosition?: 'start' | 'center' | 'end'
  isFilled?: boolean
  isDisabled?: boolean
  isRaw?: boolean
  onClick?: (event: SyntheticEvent) => void
  onMouseUp?: (event?: SyntheticEvent) => void
  onMouseDown?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

export const Button: FC<ButtonProps> = props => {
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
    iconPosition = isRaw ? 'start' : 'start-text',
    textPosition = 'center',
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
    iconPosition,
    textPosition,
  })
  const filledState = prepareFilledState({
    color: mainColor,
    darkerColor: hoverColor,
  })
  const contentPosition = textPositionStyle({ textPosition, iconPosition })

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
      aria-label={ariaLabel ?? ariaLabelForIcon}
      disabled={isDisabled}
    >
      {iconExist && <FontAwesomeIcon icon={icon} size="sm" />}
      {iconExist && childrenExist && <Fragment>&nbsp;</Fragment>}
      {childrenExist && <div css={[contentPosition]}>{children}</div>}
    </ButtonContainer>
  )
}
