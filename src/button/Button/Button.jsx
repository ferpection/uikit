import React from 'react'
import { styles } from './styles'

export const Button = props => {
  const { children, ...args } = props

  return (
    <button css={styles} {...args}>
      {children}
    </button>
  )
}
