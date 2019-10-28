import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { C200_COLOR, Color } from '../../../colors'

export const prepareBaseState = ({
  color = C200_COLOR,
  darkerColor = color.shade(-20),
}: { color?: Color; darkerColor?: Color } = {}) =>
  css({
    display: 'inline-block',
    WebkitAppearance: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    padding: '12px 20px',
    margin: 1,
    borderWidth: 1.4,
    borderColor: String(color),
    borderRadius: 100,
    borderStyle: 'solid',
    color: String(color),
    fontSize: 18,
    fontWeight: 600,
    // We have to use a mutable version of SANSSERIF_FONTSET
    // for typescript to not complain
    fontFamily: SANSSERIF_FONTSET.map(font => font),
    textDecoration: 'none',
    transition: ['box-shadow .3s ease-in-out', 'background-color .3s ease-in-out', 'color .3s ease-in-out'],
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
      color: String(darkerColor),
      borderColor: String(darkerColor),
    },
    '&[disabled]': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  })

export const prepareFilledState = ({
  color = C200_COLOR,
  darkerColor = color.shade(-20),
}: { color?: Color; darkerColor?: Color } = {}) =>
  css({
    color: 'white',
    backgroundColor: String(color),
    '&:hover': {
      boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
      backgroundColor: String(darkerColor),
      color: 'white',
      borderColor: String(darkerColor),
    },
  })

export const iconOnlyState = css({
  boxSizing: 'border-box',
  height: '48px',
  width: '48px',
  padding: 'unset',
})

export const rawLinkState = css({
  backgroundColor: 'transparent',
  borderWidth: '0px',
  padding: '5px',
  height: 'unset',
  width: 'unset',
  '&:hover': {
    boxShadow: 'none',
  },
})
