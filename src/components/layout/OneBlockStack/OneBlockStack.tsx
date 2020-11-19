/** @jsx jsx */
import { Children, FC, isValidElement } from 'react'
import { jsx } from '@emotion/core'

import { containerStyles, innerDivElementStyles, innerElementStyles } from './styles'

interface OneBlockStackProps {}

export const OneBlockStack: FC<OneBlockStackProps> = props => {
  const children = Children.toArray(props.children).map((child, index, arr) => {
    if (!isValidElement(child)) {
      return null
    }

    if (typeof child.type === 'string') {
      if (['p', 'section', 'div'].includes(child.type)) {
        return <child.type css={[innerDivElementStyles, innerElementStyles(index, arr.length)]} {...child.props} />
      }

      return null
    }

    return jsx(child.type, {
      key: child.key,
      ...child.props,
      isSmall: false,
      css: innerElementStyles(index, arr.length),
    })
  })

  return <div css={[containerStyles]}>{children}</div>
}

OneBlockStack.defaultProps = {}
