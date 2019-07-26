import { PRIMARY_COLORSET, FULL_COLORSET } from '../../../colors/colorsets.js'
import a from '../../../images/check-white.svg'

export const inputStyles = {
  display: 'none',
}

export const radioStyles = {
  verticalAlign: '-50%',
  transition: 'color .2s ease-in-out',
  color: FULL_COLORSET.BOULDER,
  fontSize: '15px',
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
  '&:hover': {
    color: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  },
  'input[type="radio"] + &::before': {
    content: `''`,
    display: 'inline-block',
    border: `1px solid ${FULL_COLORSET.SILVER_CHALICE}`,
    backgroundSize: '12px',
    borderRadius: '50%',
    backgroundColor: 'white',
    height: '20px',
    width: '20px',
    verticalAlign: '-50%',
    margin: '3px',
    transition: [
      'transform .2s ease-in-out',
      'border-color .2s ease-in-out',
    ],
    marginRight: '8px',
  },
  'input[type="radio"] + &:hover::before': {
    color: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
    borderColor: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  },
  'input[type="radio"]:checked + &::before': {
    background: `url(${a}) 3px 3px no-repeat ${PRIMARY_COLORSET.ROBINS_EGG_BLUE}`,
    borderColor: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
  },
}
