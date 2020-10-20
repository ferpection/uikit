import { css } from '@emotion/core'
import { O200_COLOR, O25_COLOR } from '../../../colors'

export const listStyles = css`
  padding: 0;
  margin: 5px 0;
  list-style: none;
`

export const listItemStyles = css`
  margin: 0;
`

export const innerCheckboxStyles = css`
  & label {
    padding: 10px;
    padding-left: 43px;
    margin: 0;
    border: 1px solid #ddd;
    transition: background-color 0.2s ease-in-out;
  }
  & label:contain(input[type='checkbox']:checked) {
    background-color: #eff9f9;
  }
  li + & label {
    border-top: none;
  }
  & input[type='checkbox'] + div {
    left: 12px;
  }
  &:first-of-type label {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  &:last-of-type label {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const innerRadioStylesErrors = css`
  & label {
    border-left-color: ${`${O200_COLOR}`};
    border-right-color: ${`${O200_COLOR}`};
    background-color: ${`${O25_COLOR}`};
    box-shadow: 0 0 0 1px ${`${O200_COLOR}`};
  }
  &:first-of-type label {
    border-top-color: ${`${O200_COLOR}`};
  }
  &:last-of-type label {
    border-bottom-color: ${`${O200_COLOR}`};
  }
`

export const innerCheckboxStylesDisabled = css`
  color: #b0b0b0;

  & label {
    border-color: #dddddd;
    background-color: #f8f8f8;
  }
`
