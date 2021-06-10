import { css } from '@emotion/react'

import { Theme } from '../../../../contexts/ThemeContext'

export const defaultStyle = css`
  margin: 20px 0;
  border: 3px dotted transparent;
`

export const dropzone = (theme: Theme) => css`
  border-color: ${`${theme.colors.action}`};
  border-radius: 3px;
  transition: all ease-in-out 0.4;
  border-width: 3px;
  font-weight: inherit;
`

export const dropzoneOver = css`
  border-width: 3px;
  border-style: solid;
  font-weight: 500;
`
