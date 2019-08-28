import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { processButtonContainer } from '../process-button-container.jsx'

import { addButtonStyles, disabledStyles } from './styles.js'

export const PlaceholderButton = props => {
  const {
    children = 'Add an element',
    disabled = false,
    isDisabled = disabled,
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
      {icon != null && icon !== '' ? (
        <>
          <FontAwesomeIcon icon={icon} />
          &nbsp;
        </>
      ) : null}
      {children}
    </Container>
  )
}

PlaceholderButton.propTypes = {
  isDisabled: propTypes.bool,
  to: propTypes.string,
}