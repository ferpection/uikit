import { css } from '@emotion/core'

export const listStyles = css`
  padding: 0;
  margin: 5px 0;
  list-style: none;
`

export const listItemStyles = css`
  margin: 0;
`

export const innerRadioStyles = css`
  & label {
    padding: 10px;
    padding-left: 43px;
    margin: 0;
    border: 1px solid #ddd;
    transition: background-color 0.2s ease-in-out;
  }
  & label:contain(input[type='radio']:checked) {
    background-color: #eff9f9;
  }
  li + & label {
    border-top: none;
  }
  & input[type='radio'] + div {
    left: 12px;
  }
  &:first-of-type label {
    border-radius: 3px 3px 0 0;
  }
  &:last-of-type label {
    border-radius: 0 0 3px 3px;
  }
`

export const innerRadioStylesDisabled = css`
  color: #b0b0b0;

  & label {
    border-color: #dddddd;
    background-color: #f8f8f8;
  }
`
