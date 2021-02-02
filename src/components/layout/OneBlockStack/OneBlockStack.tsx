/** @jsx jsx */
import { Children, FC, isValidElement } from 'react'
import { jsx } from '@emotion/core'

import { containerStyles, innerDivElementStyles, innerElementStyles } from './styles'
import { useMergedFocusHandlers } from '../../../hooks'

interface OneBlockStackProps {
  isHighlighted?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

export const OneBlockStack: FC<OneBlockStackProps> = props => {
  const [handleFocus, handleBlur] = useMergedFocusHandlers({ onBlur: props.onBlur, onFocus: props.onFocus })

  const children = Children.toArray(props.children).map((child, index, arr) => {
    if (!isValidElement(child)) {
      return null
    }

    if (typeof child.type === 'string') {
      if (['p', 'section', 'div'].includes(child.type)) {
        return (
          <child.type
            key={index}
            {...child.props}
            css={[innerDivElementStyles(props.isHighlighted), innerElementStyles(index, arr.length)]}
          />
        )
      }

      return null
    }

    const childProps = { ...child.props }
    if (child.props.isSmall != null) childProps.isSmall = false
    if (child.props.isHighlighted != null) childProps.isHighlighted = props.isHighlighted
    if (child.props.onFocus != null) childProps.onFocus = handleFocus
    if (child.props.onBlur != null) childProps.onBlur = handleBlur

    return jsx(child.type, {
      key: child.key || index,
      ...childProps,
      css: [
        ['p', 'section', 'div'].includes((child.type as unknown as any).__emotion_base) && innerDivElementStyles(props.isHighlighted),
        innerElementStyles(index, arr.length),
      ],
    })
  })

  return <div css={[containerStyles]}>{children}</div>
}

OneBlockStack.defaultProps = {
  isHighlighted: false,
  onFocus: () => {},
  onBlur: () => {},
}
