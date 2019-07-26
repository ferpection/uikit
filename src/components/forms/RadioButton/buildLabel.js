import React from 'react'

import { radioStyles } from './styles.js'

export function buildLabel(children) {
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
