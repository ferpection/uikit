import React from 'react'
import { Button } from './Button/Button.jsx'
import { PRIMARY_COLORSET } from '../../colors/index.js'

export const NegativeButton = props => (
  <Button {...props} color={PRIMARY_COLORSET.SUNGLOW} />
)

NegativeButton.propTypes = {
  ...Button.propTypes,
}
