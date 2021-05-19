import { css } from '@emotion/react'
import { Theme } from '../../contexts/ThemeContext'

export const listStyles = css`
  padding: 0;
  margin: 5px 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`

export const listErrorStyles = (theme: Theme) => css`
  border-color: ${`${theme.colors.negative}`};
  box-shadow: 0 0 0 1px ${`${theme.colors.negative}`};
`

export const listItemStyles = css`
  padding: 0;
  margin: 0;
  list-style: none;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`

export const listItemErrorStyles = (theme: Theme) => css`
  background-color: ${`${theme.colors.negativeLight}`};

  &:not(:last-of-type) {
    border-bottom-color: ${`${theme.colors.negative}`};
  }
`

export const listItemDisabledStyles = css`
  color: #b0b0b0;
  border-color: #dddddd;
  background-color: #f8f8f8;
`

export const innerRadioStyles = css`
  & label {
    padding: 10px;
    padding-left: 43px;
    margin: 0;
    transition: background-color 0.2s ease-in-out;
  }
  & input[type='radio'] + div {
    left: 12px;
  }
`
