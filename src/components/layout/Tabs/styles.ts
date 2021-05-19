import { css } from '@emotion/react'

import { Theme } from '../../contexts/ThemeContext'

export const defaultTabSyles = (theme: Theme) => css`
  padding: 5px;
  background-color: ${`${theme.colors.action.shade(-20).toRGBA(0.1)}`};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`
