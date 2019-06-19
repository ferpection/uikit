export const styles = ({ isFilled = false }) => ({
  padding: '15px 20px',
  borderWidth: '1.4px',
  borderColor: '#24D58D',
  borderRadius: '100px',
  textDecoration: 'none',
  color: isFilled ? 'white' : '#24D58D',
  backgroundColor: isFilled ? '#24D58D' : 'transparent',
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
