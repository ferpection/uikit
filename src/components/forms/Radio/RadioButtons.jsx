import React from 'react'

import { inputStyles, radioStyles } from './styles.js'

export const RadioButton = props => {
  const { children, value } = props
  const rawLabel = buildLabel(children)
  const label = React.cloneElement(rawLabel, { htmlFor: value })

  return (
    <>
      <input css={inputStyles} type="radio" id={value} value={value} />
      {label}
    </>
  )
}

function buildLabel(children) {
  const childrenCount = React.Children.count(children)

  if (childrenCount < 1) {
    return <label css={[radioStyles]} />
  }

  if (childrenCount > 1 || typeof children === 'string' || children.type !== 'label') {
    return <label css={[radioStyles]}>{children}</label>
  }

  return (
    <children.type {...children.props} css={[radioStyles]}>
      {children.props.children}
    </children.type>
  )
}
