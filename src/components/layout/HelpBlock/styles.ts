import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N300_COLOR, R400_COLOR } from '../../../colors'

export const containerStyles = css`
  padding: 0 25px;
  margin: 20px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-size: 13.5px;
  color: ${`${N300_COLOR}`};
  border-left: 1px solid ${`${R400_COLOR}`};
`

export const questionStyles = css`
  margin: 7px 0 20px;
  font-weight: lighter;
  font-size: 15px;
`

export const headerStyles = css`
  display: flex;
  align-items: center;
  position: relative;
`

export const logoOuterStyles = css`
  padding: 0 0 10px 0;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  left: -41px;
  top: 0;
`

export const logoStyles = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${`${R400_COLOR}`};
  color: ${`${R400_COLOR}`};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const questionTextStyles = css`
  p {
    margin-top: 0;
  }
  a {
    color: ${`${N300_COLOR}`};
  }
`
