import { Fragment, SyntheticEvent, FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

import { ButtonContainer } from '../ButtonContainer'
import { useTheme } from '../../../hooks/useTheme'

import { addButtonStyles, disabledStyles } from './styles'

interface PlaceholderButtonProps {
  isDisabled?: boolean
  to?: string
  icon?: IconName | null
  ariaLabel?: string
  children?: string | ReactNode
  onClick?: (event: SyntheticEvent) => void
  onMouseUp?: (event?: SyntheticEvent) => void
  onMouseDown?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

export const PlaceholderButton: FC<PlaceholderButtonProps> = props => {
  const theme = useTheme()
  const { children = 'Add an element', isDisabled, icon = 'plus', ...args } = props

  return (
    <ButtonContainer
      {...args}
      css={[addButtonStyles(theme), isDisabled && disabledStyles]}
      aria-label={typeof children === 'string' ? children : null}
      disabled={isDisabled}
    >
      {icon != null ? (
        <Fragment>
          <FontAwesomeIcon icon={icon} />
          &nbsp;
        </Fragment>
      ) : null}
      {children}
    </ButtonContainer>
  )
}
