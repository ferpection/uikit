import { css } from '@emotion/react'

import { C200_COLOR, N100_COLOR } from '../../../colors'

export const addButtonStyles = css`
  display: block;
  min-height: 44px;
  padding: 10px 12px;
  background-color: white;
  color: ${`${C200_COLOR}`};
  text-align: left;
  text-decoration: none;
  border: 1px dashed #ddd;
  border-radius: 3px;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    z-index: 2;
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
    border-style: solid;
    color: ${C200_COLOR.shade(-20).toRGBA()};
  }
  &:active {
    z-index: 2;
    box-shadow: 0 0 0 16px ${C200_COLOR.toRGBA(0.1)};
  }
  &:focus {
    outline: none;
  }
`

export const disabledStyles = css`
  border-color: ${`${N100_COLOR}`};
  background-color: #f8f8f8;
  box-shadow: none;
  cursor: not-allowed;
  color: ${`${N100_COLOR}`};
  &:hover {
    border-style: dashed;
    color: ${`${N100_COLOR}`};
    box-shadow: none;
  }
`
