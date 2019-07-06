import React from 'react'
import { Button } from './Button/Button.jsx'
import { PRIMARY_COLORSET } from '../../colors/index.js'

export const PositiveButton = props => <Button {...props} color={PRIMARY_COLORSET.SHAMROCK} />

PositiveButton.propTypes = {
  ...Button.propTypes,
}
