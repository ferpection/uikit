import React from 'react'
import propTypes from 'prop-types'

import { PRIMARY_COLORSET } from '../../colors/index.js'

import { Button } from './Button/Button.jsx'

export const HeaderLink = (props) => (
  <Button {...props}
    color={props.headerLigthVersion ? PRIMARY_COLORSET.CINNABAR : '#FFFFFF'}
    isRaw
  >
    {props.children}
  </Button>
)

HeaderLink.propTypes = {
  ...Button.propTypes,
  headerLigthVersion: propTypes.bool,
}
