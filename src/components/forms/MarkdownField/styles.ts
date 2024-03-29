import { css } from '@emotion/react'
import { N100_COLOR, N300_COLOR } from '../../../colors'
import { Theme } from '../../../contexts/ThemeContext'

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
  margin: 7px 5px;
`

export const buttonStyle = (theme: Theme) => css`
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
    color: ${`${theme.colors.action}`};
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
