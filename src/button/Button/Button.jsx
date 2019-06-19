import React from 'react'
import { styles } from './styles'

export const Button = props => {
  const { children, isFilled, ...args } = props

  return (
    <button css={styles({ isFilled })} {...args}>
      {children}
    </button>
  )
}
