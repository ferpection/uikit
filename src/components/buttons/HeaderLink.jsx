import React from 'react'
import propTypes from 'prop-types'

import { PRIMARY_COLORSET } from '../../colors/index.js'

import { Button } from './Button/Button.jsx'

export const HeaderLink = props => {
  const { headerLigthVersion, children, ...otherProps } = props

  return (
    <Button
      {...otherProps}
      color={headerLigthVersion ? PRIMARY_COLORSET.CINNABAR : '#FFFFFF'}
      isRaw
    >
      {children}
    </Button>
  )
}

HeaderLink.propTypes = {
  ...Button.propTypes,
  headerLigthVersion: propTypes.bool,
}
