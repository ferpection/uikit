import { css } from '@emotion/core'

import { PRIMARY_COLORSET, FULL_COLORSET } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const errorStyle = css`
  margin-top: 10px;
  padding: 0;
  font-size: 15px;
  color: ${FULL_COLORSET.BOULDER};
  font-family: ${`${SANSSERIF_FONTSET}`};
`

export const iconStyle = css`
  display: inline-block;
  vertical-align: -2px;
  margin-right: 10px;
  color: ${PRIMARY_COLORSET.SUNGLOW};
  font-size: 20px;
  line-height: 1;
  vertical-align: middle;
`
