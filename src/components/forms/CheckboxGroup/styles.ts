import { css } from '@emotion/core'

export const listStyles = css`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const innerCheckboxStyles = css`
  & label {
    padding: 10px;
    padding-left: 10px;
    border: 1px solid #ddd;
    padding-left: 43px;
    margin: 0;
    margin-top: 0px;
    transition: background-color 0.2s ease-in-out;
  }
  & label:contain(input[type='checkbox']:checked) {
    background-color: #eff9f9;
  }
  li + & label {
    border-top: none;
  }
  & div {
    left: 12px;
    top: 11px;
  }
  &:first-child label {
    margin-top: 20px;
    border-radius: 3px 3px 0 0;
  }
  &:last-child label {
    border-radius: 0 0 3px 3px;
  }
`
export const innerCheckboxStylesDisabled = css`
  color: #b0b0b0;

  & label {
    border-color: #dddddd;
    background-color: #f8f8f8;
  }
`
