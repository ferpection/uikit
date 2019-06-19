import { PRIMARY_COLORSET } from '../../helpers/colors'

export const styles = ({ isFilled = false } = {}) => ({
  padding: '15px 20px',
  borderWidth: '1.4px',
  borderColor: PRIMARY_COLORSET.ACTION_BLUE,
  borderRadius: '100px',
  textDecoration: 'none',
  color: isFilled ? 'white' : PRIMARY_COLORSET.ACTION_BLUE,
  backgroundColor: isFilled ? PRIMARY_COLORSET.ACTION_BLUE : 'transparent',
  fontSize: '15px',
  transition: 'box-shadow .3s ease-in-out',
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
  },
  '&[disabled]': {
    opacity: '.5',
    pointerEvents: 'none',
  },
})
