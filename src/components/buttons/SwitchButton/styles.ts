import { css } from '@emotion/react'

import { N200_COLOR, C200_COLOR, N75_COLOR, N100_COLOR, Color } from '../../../colors'

const handlerWidth = 18

export const handlerStyles = ({ color = C200_COLOR, isFilled = false }: { color: Color; isFilled: boolean }) => css`
  appearance: none;
  width: ${handlerWidth}px;
  height: ${handlerWidth}px;
  position: absolute;
  top: 3px;
  left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${isFilled ? color.toString() : 'white'};
  transition: left 0.3s ease-in-out;
  svg {
    color: ${isFilled ? 'white' : color.toString()};
    transition: color 0.3s ease-in-out;
    font-size: 1.2em;
  }
  input[type='checkbox']:checked + & {
    left: ${handlerWidth + 2}px;
  }
  input[type='checkbox']:disabled + & {
    border-color: ${N100_COLOR.toString()};
    background-color: ${N75_COLOR.toString()};
    svg {
      color: ${N100_COLOR.toString()}};
    }
  }
`

export const labelStyles = ({ color = C200_COLOR, isFilled = false }) => css`
  position: relative;
  display: inline-block;
  padding: 3px;
  margin: 10px 20px;
  z-index: 1;
  border: 1px solid ${color.toString()};
  border-radius: ${handlerWidth}px;
  width: ${handlerWidth * 2}px;
  height: ${handlerWidth}px;
  background-color: ${isFilled ? color.toString() : 'white'};
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    border-color: ${color.toString()};
  }
`

export const labelStylesDisabled = css`
  border-color: ${N200_COLOR.toString()};
  background-color: ${N75_COLOR.toString()};
  &:hover {
    cursor: not-allowed;
    border-color: ${N200_COLOR.toString()};
  }
`

export const inputStyles = css`
  display: none;
`
