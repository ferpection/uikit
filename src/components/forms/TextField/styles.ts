import { css } from '@emotion/core'
import { C200_COLOR, O200_COLOR, O25_COLOR, C15_COLOR, N100_COLOR, N300_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const baseStyle = css`
  position: relative;
  display: inline-block;
  margin: 5px 0;
  box-sizing: border-box;
  padding: 10px 5px 10px 10px;
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
  &:focus {
    z-index: 1;
    border: 1px solid ${`${C200_COLOR}`};
    outline: 0;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
    background-color: ${`${C15_COLOR}`};
  }
  &:active {
    z-index: 1;
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
  &::placeholder {
    font-style: italic;
    color: #aaa;
  }
`

export const highlightedStyle = css`
  background-color: ${`${C15_COLOR}`};
`

export const disabledStyle = css`
  border-color: ${`${N100_COLOR}`};
  background-color: #f8f8f8;
  box-shadow: none;
  cursor: not-allowed;
  &:hover {
    box-shadow: none;
  }
  &::placeholder {
    color: ${`${N100_COLOR}`};
  }
`

export const errorStyle = css`
  border-color: ${`${O200_COLOR}`};
  background-color: ${`${O25_COLOR}`};
  margin-bottom: 0;
  box-shadow: 0 0 0 1px ${`${O200_COLOR}`};
  &:hover {
    box-shadow: 0 0 0 8px ${`${O200_COLOR.toRGBA(0.1)}`};
  }
  &:focus {
    background-color: ${`${C15_COLOR}`};
    border-color: ${`${C200_COLOR}`};
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
  }
  &:active {
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
`

export const textareaStyle = css`
  max-width: 100%;
  min-width: 100%;
  min-height: 75px;
`
