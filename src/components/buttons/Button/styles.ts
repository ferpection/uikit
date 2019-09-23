import { SANSSERIF_FONTSET } from '../../../fonts'
import { C200_COLOR } from '../../../colors'

export const prepareBaseState = ({
  color = C200_COLOR,
  darkerColor = color.shade(-20),
} = {}) => ({
  display: 'inline-block',
  WebkitAppearance: 'none',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '12px 20px',
  margin: '1px',
  borderWidth: '1.4px',
  borderColor: String(color),
  borderRadius: '100px',
  borderStyle: 'solid',
  color: String(color),
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: SANSSERIF_FONTSET,
  textDecoration: 'none',
  transition: [
    'box-shadow .3s ease-in-out',
    'background-color .3s ease-in-out',
    'color .3s ease-in-out',
  ],
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
    color: String(darkerColor),
    borderColor: String(darkerColor),
  },
  '&[disabled]': {
    opacity: '.5',
    pointerEvents: 'none',
  },
})

export const prepareFilledState = ({
  color = C200_COLOR,
  darkerColor = color.shade(-20),
} = {}) => ({
  color: 'white',
  backgroundColor: String(color),
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
    backgroundColor: String(darkerColor),
    color: 'white',
    borderColor: String(darkerColor),
  },
})

export const iconOnlyState = {
  boxSizing: 'border-box',
  height: '48px',
  width: '48px',
  padding: 'unset',
}

export const rawLinkState = {
  backgroundColor: 'transparent',
  borderWidth: '0px',
  padding: '5px',
  height: 'unset',
  width: 'unset',
  '&:hover': {
    boxShadow: 'none',
  },
}
