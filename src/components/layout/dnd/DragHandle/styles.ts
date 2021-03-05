import { css } from '@emotion/react'

export const defaultHandle = css`
  display: inline-block;
  padding: 10px;
  cursor: move;
  cursor: grab;
  &:active,
  & input:active,
  & textarea:active {
    cursor: grabbing;
  }
`

export const draggingStyle = css`
  pointer-events: none;
`
