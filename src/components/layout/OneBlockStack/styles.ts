import { css } from '@emotion/react'

import { N100_COLOR } from '../../../colors'
import { Theme } from '../../../contexts/ThemeContext'

export const containerStyles = css`
  font-size: 0;
`

export const innerElementStyles = (index: number, length: number) => css`
  border-top-left-radius: ${index === 0 ? '3px' : 0};
  border-top-right-radius: ${index === 0 ? '3px' : 0};
  border-bottom-left-radius: ${index === length - 1 ? '3px' : 0};
  border-bottom-right-radius: ${index === length - 1 ? '3px' : 0};
  ${index !== 0 &&
  `
    border-top-color: transparent;
  `}
  margin: 0;
  width: 100%;
  label: FieldStackElement;
`

export const innerDivElementStyles = (theme: Theme, isHighlighted: boolean = false, isOnError: boolean = false) => css`
  border: 1px solid ${`${N100_COLOR}`};
  ${isOnError && `border-color: ${theme.colors.negative};`}
  ${isOnError && `box-shadow: 0 0 0 1px ${theme.colors.negative};`}
  font-size: 15px;
  padding: 10px;
  box-sizing: border-box;
  ${isHighlighted && `background-color: ${theme.colors.actionLight};`}
  ${isOnError && `background-color: ${theme.colors.negativeLight};`}
`
