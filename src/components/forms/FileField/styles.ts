import { css } from '@emotion/react'
import { N100_COLOR, N300_COLOR, C200_COLOR, C15_COLOR, O200_COLOR, O25_COLOR } from '../../../colors'
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
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  &:hover {
    z-index: 1;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
  }

  input[type='file']:focus + &,
  input[type='file']:focus-within + & {
    z-index: 1;
    border: 1px solid ${`${C200_COLOR}`};
    outline: 0;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
    background-color: ${`${C15_COLOR}`};
  }
  input[type='file']:active + & {
    z-index: 1;
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
`

export const highlightedStyle = css`
  background-color: ${`${C15_COLOR}`};
`

export const placeholder = css`
  font-style: italic;
  color: #aaa;
  margin: 3px;
  padding: 7px 2px 7px 7px;
`

export const valueStyle = css`
  color: ${`${N300_COLOR}`};
  margin: 3px;
  padding: 7px 2px 7px 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`

export const disabledStyle = css`
  border-color: ${`${N100_COLOR}`};
  background-color: #f8f8f8;
  box-shadow: none;
  cursor: not-allowed;
  &:hover,
  input[type='file']:focus + &,
  input[type='file']:active + &,
  input[type='file']:focus-within + & {
    box-shadow: none;
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
  input[type='file']:focus + &,
  input[type='file']:focus-within + & {
    background-color: ${`${C15_COLOR}`};
    border-color: ${`${C200_COLOR}`};
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
  }
  input[type='file']:active + & {
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
`

export const placeholderDisabledStyle = css`
  color: ${`${N100_COLOR}`};
`

export const button = css`
  border: 1px solid ${`${C200_COLOR}`};
  color: ${`${C200_COLOR}`};
  border-radius: 3px;
  margin: 3px;
  padding: 6px 16px;

  &:hover {
    background-color: ${C200_COLOR.toHex()};
    color: white;
    cursor: pointer;
  }
`

export const buttonDisabledStyle = css`
  border-color: ${`${N100_COLOR}`};
  color: ${`${N100_COLOR}`};
  &:hover {
    cursor: not-allowed;
    background-color: transparent;
    color: ${`${N100_COLOR}`};
  }
`
