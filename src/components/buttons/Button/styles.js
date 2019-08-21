import { PRIMARY_COLORSET } from '../../../colors/colorsets.js'
import { colorShades } from '../../../utils/colors.js'

export const prepareBaseState = ({
  color = PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  darkerColor = colorShades(color, -20),
} = {}) => ({
  display: 'inline-block',
  WebkitAppearance: 'none',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '12px 20px',
  margin: '1px',
  borderWidth: '1.4px',
  borderColor: color,
  borderRadius: '100px',
  borderStyle: 'solid',
  color: color,
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: [
    'Open Sans',
    'HelveticaNeue-Light',
    'Helvetica Neue Light',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'Lucida Grande',
    'sans-serif',
  ],
  textDecoration: 'none',
  transition: [
    'box-shadow .3s ease-in-out',
    'background-color .3s ease-in-out',
    'color .3s ease-in-out',
  ],
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
    color: darkerColor,
    borderColor: darkerColor,
  },
  '&[disabled]': {
    opacity: '.5',
    pointerEvents: 'none',
  },
})

export const prepareFilledState = ({
  color = PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  darkerColor = colorShades(color, -20),
} = {}) => ({
  color: 'white',
  backgroundColor: color,
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
    backgroundColor: darkerColor,
    color: 'white',
    borderColor: darkerColor,
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
  '&:hover': {
    boxShadow: 'none',
  },
}
