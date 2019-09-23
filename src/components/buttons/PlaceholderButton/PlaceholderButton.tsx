import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

import { processButtonContainer } from '../process-button-container'

import { addButtonStyles, disabledStyles } from './styles'

export const PlaceholderButton: React.FC<PlaceholderButtonProps> = props => {
  const {
    children = 'Add an element',
    isDisabled,
    icon = 'plus',
    to,
    ...args
  } = props

  const Container = processButtonContainer(to)

  return (
    <Container
      {...args}
      css={[addButtonStyles, isDisabled && disabledStyles]}
      aria-label={children}
      disabled={isDisabled}
    >
      {icon != null ? (
        <>
          <FontAwesomeIcon icon={icon} />
          &nbsp;
        </>
      ) : null}
      {children}
    </Container>
  )
}

interface PlaceholderButtonProps {
  isDisabled?: boolean
  to?: string
  icon?: IconName
  ariaLabel?: string
  children?: string
}
