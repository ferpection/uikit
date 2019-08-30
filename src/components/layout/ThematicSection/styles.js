import { css } from '@emotion/core'

import { N100_COLOR, N500_COLOR, R200_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const containerStyles = css`
  padding: 20px 40px;
`

export const headerStyles = css`
  border-bottom: 1px solid ${`${N100_COLOR}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const titleStyles = css`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 40px;
`

export const titleTextStyles = css`
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-weight: 600;
  color: ${`${N500_COLOR}`};
  margin: 5px;
`

const logoSize = 60
export const logoStyles = css`
  position: absolute;
  left: -75px;
  width: ${logoSize}px;
  height: ${logoSize}px;
  border: 5px solid ${`${R200_COLOR}`};
  border-radius: 50%;
  background-color: white;
`

export const sectionStyles = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
