import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N300_COLOR, R400_COLOR } from '../../../colors'

export const containerStyles = css`
  padding: 0 20px;
  margin: 15px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-size: 15px;
  color: ${`${N300_COLOR}`};
  border-left: 1px solid ${`${R400_COLOR}`};
`

export const questionStyles = css`
  margin: 0 0 25px;
  font-weight: lighter;
  font-size: 16px;
`
