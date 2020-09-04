import { css } from '@emotion/core'
import { N100_COLOR, N300_COLOR, C200_COLOR, C15_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const hiddenInput = css`
  display: none;
`

export const baseStyle = css`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid ${`${N100_COLOR}`};
  width: 100%;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-weight: normal;
  font-style: normal;
  font-size: 15px;
  background-color: white;
  color: ${`${N300_COLOR}`};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  &:hover {
    z-index: 1;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
  }

  input[type="file"]:focus + & {
    z-index: 1;
    border: 1px solid ${`${C200_COLOR}`};
    outline: 0;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
    background-color: ${`${C15_COLOR}`};
  }
  input[type="file"]:active + & {
    z-index: 1;
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
`

export const placeholder = css`
  font-style: italic;
  color: #aaa;
  margin: 3px;
  padding: 7px 2px 7px 7px;
`

export const button = css`
  border: 1px solid ${`${C200_COLOR}`};
  color: ${`${C200_COLOR}`};
  border-radius: 3px;
  margin: 3px;
  padding: 6px 16px;
`
