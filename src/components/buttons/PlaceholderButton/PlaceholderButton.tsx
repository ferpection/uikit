import { Fragment, SyntheticEvent, FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

import { ButtonContainer } from '../ButtonContainer'
import { useTheme } from '../../../hooks/useTheme'

import { addButtonStyles, disabledStyles, textPositionStyles } from './styles'

interface PlaceholderButtonProps {
  isDisabled?: boolean
  to?: string
  icon?: IconName | null
  iconStore?: IconPrefix
  ariaLabel?: string
  children?: string | ReactNode
  iconPosition?: 'start' | 'start-text' | 'end-text' | 'end'
  textPosition?: 'start' | 'center' | 'end'
  onClick?: (event: SyntheticEvent) => void
  onMouseUp?: (event?: SyntheticEvent) => void
  onMouseDown?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

export const PlaceholderButton: FC<PlaceholderButtonProps> = props => {
  const theme = useTheme()
  const {
    children = 'Add an element',
    isDisabled,
    icon = 'plus',
    iconStore = 'fas',
    ariaLabel: userAriaLabel,
    iconPosition = 'start-text',
    textPosition = 'center',
    ...args
  } = props

  let ariaLabel = userAriaLabel
  if (typeof children === 'string') {
    ariaLabel ??= children
  }

  return (
    <ButtonContainer
      {...args}
      css={[addButtonStyles(theme, { iconPosition, textPosition }), isDisabled && disabledStyles]}
      aria-label={ariaLabel}
      disabled={isDisabled}
    >
      {icon != null && <FontAwesomeIcon icon={[iconStore, icon]} />}
      {icon != null && children != null && <Fragment>&nbsp;</Fragment>}
      {children != null && <div css={[textPositionStyles({ textPosition, iconPosition })]}>{children}</div>}
    </ButtonContainer>
  )
}
