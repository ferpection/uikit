import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Button } from './Button/Button.jsx'

export const IconButton = props => {
  const { icon: iconName, prefix = 'fas', ...args } = props

  if (typeof iconName !== 'string') {
    throw new Error('IconButton needs a string as icon name')
  }

  const icon = findIconDefinition({ prefix, iconName })

  return (
    <Button {...args}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Button>
  )
}

IconButton.propTypes = {
  ...Button.propTypes,
  icon: propTypes.string,
  prefix: propTypes.string,
}
