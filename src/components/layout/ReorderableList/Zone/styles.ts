import { css } from '@emotion/react'

import { Theme } from '../../../contexts/ThemeContext'

export const defaultStyle = css`
  margin: 20px 0;
  border: 2px dashed transparent;
`

export const dropzone = (theme: Theme) => css`
  border-color: ${`${theme.colors.action}`};
  border-radius: 3px;
  transition: all ease-in-out 0.4;
  border-width: 2px;
  font-weight: inherit;
`

export const dropzoneOver = css`
  border-width: 3px;
  font-weight: 500;
`
