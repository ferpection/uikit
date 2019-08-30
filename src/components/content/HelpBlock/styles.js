import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N500_COLOR, R400_COLOR } from '../../../colors'

export const containerStyles = css`
  padding: 0 20px;
  margin: 10px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  color: ${`${N500_COLOR}`};
  border-left: 1px solid ${`${R400_COLOR}`};
`

export const questionStyles = css`
  margin: 0;
`
