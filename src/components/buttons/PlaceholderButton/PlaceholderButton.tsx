/** @jsx jsx */
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { jsx } from '@emotion/core'

import { processButtonContainer } from '../processButtonContainer'

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
        <Fragment>
          <FontAwesomeIcon icon={icon} />
          &nbsp;
        </Fragment>
      ) : null}
      {children}
    </Container>
  )
}

interface PlaceholderButtonProps {
  isDisabled?: boolean
  to?: string
  icon?: IconName | null
  ariaLabel?: string
  children?: string
  onClick?: (event: Event) => void
}
