import { css } from '@emotion/core'
import { PRIMARY_COLORSET, FULL_COLORSET } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

export const baseStyle = css`
  position: relative;
  display: block;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 10px 5px 10px 10px;
  border-radius: 3px;
  border: 1px solid ${FULL_COLORSET.LINEN};
  width: 100%;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-weight: normal;
  font-style: normal;
  font-size: 15px;
  background-color: white;
  color: ${FULL_COLORSET.BOULDER};
  line-height: 1.5;
  transition: all .2s ease-in-out;
  &:hover {
    z-index: 1;
    box-shadow: 0 0 0 8px  rgba(220, 240, 240, 0.4) /* $actionBackgroundColor ! Transparent */;
  }
  &:focus {
    z-index: 1;
    border: 1px solid ${PRIMARY_COLORSET.ROBINS_EGG_BLUE};
    outline: 0;
    box-shadow: 0 0 0 8px  rgba(220, 240, 240, 0.4) /* $actionBackgroundColor ! Transparent */;
    background-color: ${FULL_COLORSET.BLACK_SQUEEZE};
  }
  &:active {
    z-index: 1;
    box-shadow: 0 0 0 16px  rgba(220, 240, 240, 0.4);
  }
  &::placeholder {
    font-style: italic;
    color: #aaa;
  }
`

export const highlightedStyle = css`
  background-color:  ${FULL_COLORSET.BLACK_SQUEEZE};
`

export const disabledStyle = css`
  border-color: ${FULL_COLORSET.LINEN};
  background-color: #f8f8f8;
  box-shadow: none;
  cursor: not-allowed;
  &:hover {
    box-shadow: none;
  }
  &::placeholder {
    color: ${FULL_COLORSET.LINEN};
  }
`

export const errorStyle = css`
  border-color: ${PRIMARY_COLORSET.SUNGLOW}; /* $negativeColor */
  background-color:  ${FULL_COLORSET.FLORAL_WHITE} /* $negativeBackgroundColor */;
  margin-bottom: 0;
  box-shadow: 0 0 0 1px ${PRIMARY_COLORSET.SUNGLOW};
  &:hover {
    box-shadow: 0 0 0 8px rgba(253, 242, 210, 0.4);
  }
  &:focus {
    background-color: ${FULL_COLORSET.BLACK_SQUEEZE};
    border-color: ${PRIMARY_COLORSET.ROBINS_EGG_BLUE};
    box-shadow: 0 0 0 8px rgba(220, 240, 240, 0.4);
  }
  &:active {
    box-shadow: 0 0 0 16px rgba(220, 240, 240, 0.4);
  }
`

export const textareaStyle = css`
  max-width: 100%;
  min-width: 100%;
  min-height: 75px;
`
