import { css } from '@emotion/core'
import { C200_COLOR } from '../../../../colors'

export const defaultStyle = css`
  margin: 20px;
  border: 2px dashed transparent;
`

export const dropzone = css`
  border-color: ${`${C200_COLOR}`};
  border-radius: 3px;
  transition: all ease-in-out 0.4;
  border-width: 2px;
  font-weight: inherit;
`

export const dropzoneOver = css`
  border-width: 3px;
  font-weight: 500;
`
