import React from 'react'
import { styles } from './styles'

export const Button = props => {
  const { children, isFilled, isDisabled = false, ...args } = props

  return (
    <button css={styles({ isFilled })} disabled={isDisabled} {...args}>
      {children}
    </button>
  )
}
