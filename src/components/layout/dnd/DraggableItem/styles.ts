import { css } from '@emotion/core'

export const container = css`
  margin: 0;
  padding: 0;
  outline: none;
`

export const grabCursor = css`
  cursor: move;
  cursor: grab;
  &:active,
  & input:active,
  & textarea:active {
    cursor: grabbing;
  }
`
