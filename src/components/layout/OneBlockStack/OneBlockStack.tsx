/** @jsx jsx */
import { Children, FC, isValidElement } from 'react'
import { jsx } from '@emotion/core'

import { containerStyles, innerDivElementStyles, innerElementStyles } from './styles'

interface OneBlockStackProps {
  isHighlighted?: boolean
}

export const OneBlockStack: FC<OneBlockStackProps> = props => {
  const children = Children.toArray(props.children).map((child, index, arr) => {
    if (!isValidElement(child)) {
      return null
    }

    if (typeof child.type === 'string') {
      if (['p', 'section', 'div'].includes(child.type)) {
        return <child.type key={index} css={[innerDivElementStyles(props.isHighlighted), innerElementStyles(index, arr.length)]} {...child.props} />
      }

      return null
    }

    const childProps = { ...child.props }
    if (child.props.isSmall != null) childProps.isSmall = false
    if (child.props.isHighlighted != null) childProps.isHighlighted = props.isHighlighted

    return jsx(child.type, {
      key: child.key || index,
      ...childProps,
      css: innerElementStyles(index, arr.length),
    })
  })

  return <div css={[containerStyles]}>{children}</div>
}

OneBlockStack.defaultProps = {
  isHighlighted: false,
}
