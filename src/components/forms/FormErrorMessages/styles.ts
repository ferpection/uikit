import { css } from '@emotion/react'

import { N300_COLOR, O200_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const errorStyle = css`
  margin-top: 10px;
  padding: 0;
  font-size: 15px;
  color: ${`${N300_COLOR}`};
  font-family: ${`${SANSSERIF_FONTSET}`};
`

export const iconStyle = css`
  display: inline-block;
  vertical-align: -2px;
  margin-right: 10px;
  color: ${`${O200_COLOR}`};
  font-size: 20px;
  line-height: 1;
  vertical-align: middle;
`
