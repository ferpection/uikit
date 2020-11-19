import { css } from '@emotion/core'

export const containerStyles = css`
  font-size: 0;
`

export const innerElementStyles = (index: number, length: number) => css`
  border-top-left-radius: ${index === 0 ? '3px' : 0};
  border-top-right-radius: ${index === 0 ? '3px' : 0};
  border-bottom-left-radius: ${index === length - 1 ? '3px' : 0};
  border-bottom-right-radius: ${index === length - 1 ? '3px' : 0};
  ${index !== 0 &&
  `
    border-top-color: transparent;
  `}
  margin: 0;
  width: 100%;
  label: FieldStackElement;
`
