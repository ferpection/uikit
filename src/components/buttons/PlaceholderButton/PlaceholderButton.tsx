/** @jsx jsx */
import React, { Fragment, SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { jsx } from '@emotion/core'

import { ButtonContainer } from '../ButtonContainer'

import { addButtonStyles, disabledStyles } from './styles'

export const PlaceholderButton: React.FC<PlaceholderButtonProps> = props => {
  const {
    children = 'Add an element',
    isDisabled,
    icon = 'plus',
    ...args
  } = props

  return (
    <ButtonContainer
      {...args}
      css={[addButtonStyles, isDisabled && disabledStyles]}
      aria-label={children}
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

interface PlaceholderButtonProps {
  isDisabled?: boolean
  to?: string
  icon?: IconName | null
  ariaLabel?: string
  children?: string
  onClick?: (event: SyntheticEvent) => void
  onMouseUp?: (event?: SyntheticEvent) => void
  onMouseDown?: (event?: SyntheticEvent) => void
}
