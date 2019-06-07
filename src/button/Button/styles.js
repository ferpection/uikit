export const styles = {
  padding: '15px 20px',
  borderWidth: 0,
  textDecoration: 'none',
  backgroundColor: '#24D58D',
  color: 'white',
  borderRadius: '100px',
  transition: 'box-shadow .3s ease-in-out',
  '&:hover': {
    boxShadow: '0 1px 4px 1px rgba(0,0,0,0.3)',
  },
  '&[disabled]': {
    opacity: '.5',
    pointerEvents: 'none',
  },
}
