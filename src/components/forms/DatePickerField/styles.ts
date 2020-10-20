import { css } from '@emotion/core'

export const datePickerContainer = css`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const datePickerContainerSmall = css`
  ${datePickerContainer};
  width: unset;
`

export const calendarButton = css`
  position: absolute;
  right: 5px;
  top: 9px;
  z-index: 2;
`

export const calendarButtonSmall = css`
  right: 0;
  top: 0;
`
