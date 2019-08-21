import { FULL_COLORSET } from '../../../colors/index.js'

export const defaultHeaderStyles = {
  backgroundColor: FULL_COLORSET.CINNABAR,
  color: FULL_COLORSET.SEASHELL,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3px 30px',
  height: '65px',
  boxShadow: '0 0 3px 2px rgba(0, 0, 0, .2)',
}

export const lightHeaderStyle = {
  color: FULL_COLORSET.CINNABAR,
  backgroundColor: 'white',
}

export const buttonListStyle = {
  margin: '0',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  '& > li': {
    margin: '0 2px',
  },
}

export const logoStyles = {
  padding: '10px 0',
  boxSizing: 'border-box',
  height: '100%',
}
