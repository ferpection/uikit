import React from 'react'
import propTypes from 'prop-types'

import { Color, R400_COLOR } from '../../colors/index.js'

import { Button } from './Button/Button.jsx'

export const HeaderLink = props => {
  const { headerLigthVersion, children, ...otherProps } = props
  const WHITE_COLOR = new Color(255, 255, 255)

  return (
    <Button
      {...otherProps}
      color={headerLigthVersion ? R400_COLOR : WHITE_COLOR}
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
