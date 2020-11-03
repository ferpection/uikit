import { css } from '@emotion/core'
import { N100_COLOR, N300_COLOR, C200_COLOR } from '../../../colors'

export const textStyle = css`
  margin: 0;
  padding-top: 52px;
`

export const iconBar = css`
  position: absolute;
  top: 1px;
  left: 1px;
  display: inline-block;
  box-sizing: border-box;
  border-bottom: 1px solid ${`${N100_COLOR}`};
  border-radius: 3px 3px 0 0;
  width: calc(100% - 2px);
  font-weight: normal;
  font-style: normal;
  font-size: 15px;
  background-color: white;
  color: ${`${N300_COLOR}`};
  line-height: 1.5;
  z-index: 2;
  vertical-align: bottom;
`

export const container = css`
  position: relative;
  margin: 5px 0;
  padding: 0;
`

export const helpButtonStyle = css`
  float: right;
  margin: 0 5px;
`

export const buttonStyle = css`
  margin: 0;
  padding: 10px;
  border-width: 0;
  border-right: 1px solid ${`${N100_COLOR}`};
  min-width: 40px;
  background-color: white;
  color: ${`${N300_COLOR}`};
  border-radius: 3px 0 0 0;
  font-size: 16px;

  &:hover,
  &:active {
    color: ${`${C200_COLOR}`};
    cursor: pointer;
  }
`

export const disabledStyle = css`
  background-color: #f8f8f8;
  cursor: not-allowed;
  color: ${`${N300_COLOR}`};
  &:hover {
    cursor: not-allowed;
    color: ${`${N300_COLOR}`};
  }
`
