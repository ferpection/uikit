/** @jsx jsx */
import { Children, FC, isValidElement } from 'react'
import { css, jsx } from '@emotion/core'

interface FieldStackProps {}

// OneBlockStack
export const FieldStack: FC<FieldStackProps> = (props) => {
  const children = Children
    .toArray(props.children)
    .map((child, index, arr) => {
      if (!isValidElement(child)) {
        return null
      }

      if (typeof child.type === 'string') {
        return null
      }

      return jsx(child.type, {
        key: child.key,
        ...child.props,
        isSmall: false,
        css: css`
          border-top-left-radius: ${index === 0 ? '3px': 0};
          border-top-right-radius: ${index === 0 ? '3px': 0};
          border-bottom-left-radius: ${index === arr.length - 1 ? '3px': 0};
          border-bottom-right-radius: ${index === arr.length - 1 ? '3px': 0};
          border-top-color: ${index === 0 ? '1px': 0};
          margin: 0;
          width: 100%;
          label: FieldStackElement;
        `
      })
    })

  return (
    <div css={css`font-size: 0;`}>
      {children}
    </div>
  )
}

FieldStack.defaultProps = {}
