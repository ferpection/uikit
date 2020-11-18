import { css } from '@emotion/core'
import { O200_COLOR, O25_COLOR } from '../../../colors'

export const listStyles = css`
  padding: 0;
  margin: 5px 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`

export const listErrorStyles = css`
  border-color: ${`${O200_COLOR}`};
  box-shadow: 0 0 0 1px ${`${O200_COLOR}`};
`

export const listItemStyles = css`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const innerCheckboxStyles = css`
  & label {
    padding: 10px;
    padding-left: 43px;
    margin: 0;
    transition: background-color 0.2s ease-in-out;
  }
  &:not(:last-of-type) label {
    border-bottom: 1px solid #ddd;
  }
  & label:contain(input[type='checkbox']:checked) {
    background-color: #eff9f9;
  }
  & input[type='checkbox'] + div {
    left: 12px;
  }
`

export const innerCheckboxStylesErrors = css`
  & label {
    background-color: ${`${O25_COLOR}`};
  }
  &:not(:last-of-type) label {
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
