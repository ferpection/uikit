import { PRIMARY_COLORSET } from '../../../colors/colorsets.js'
import { colorShades } from '../../../utils/colors.js'

export const styles = ({
  isFilled = false,
  color = PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  darkerColor = colorShades(color, -20),
} = {}) => ({
  cursor: 'pointer',
  padding: '12px 20px',
  borderWidth: '1.4px',
  borderColor: color,
  borderRadius: '100px',
  color: isFilled ? 'white' : color,
  backgroundColor: isFilled ? color : 'transparent',
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
    backgroundColor: isFilled ? darkerColor : null,
    color: isFilled ? 'white' : darkerColor,
    borderColor: darkerColor,
  },
  '&[disabled]': {
    opacity: '.5',
    pointerEvents: 'none',
  },
})
