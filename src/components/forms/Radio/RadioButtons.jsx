import React from 'react'

import { buildLabel } from './buildLabel.js'
import { inputStyles } from './styles.js'

export const RadioButton = props => {
  const { children, value } = props
  const label = buildLabel(children)
  const linkedLabel = React.cloneElement(label, { htmlFor: value })

  return (
    <>
      <input css={inputStyles} type="radio" id={value} value={value} />
      {linkedLabel}
    </>
  )
}
