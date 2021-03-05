import { css } from '@emotion/react'

import { N100_COLOR, N300_COLOR, N500_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const containerStyles = css`
  padding: 20px 40px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  color: ${`${N300_COLOR}`};
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
  font-weight: 500;
  font-size: 1.3em;
  margin: 5px;
  color: ${`${N500_COLOR}`};
`

const logoSize = 85
export const logoStyles = css`
  position: absolute;
  left: -83px;
  top: -19px;
  width: ${logoSize}px;
  height: ${logoSize}px;
  border-radius: 50%;
`

export const sectionStyles = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
