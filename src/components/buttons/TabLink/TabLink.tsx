import { FC } from 'react'

import { useMatch } from 'react-router'

import { Button, ButtonProps } from '../Button/Button'

import { defaultButtonStyles, activeButtonStyles } from './styles'
import { useTheme } from '../../../hooks/useTheme'

export interface TabLinkProps extends ButtonProps {}

export const TabLink: FC<TabLinkProps> = props => {
  const theme = useTheme()
  const { children, ...otherProps } = props
  const { to } = otherProps
  const match = useMatch({ path: to })

  return (
    <Button {...otherProps} isRaw css={[defaultButtonStyles(theme), match ? activeButtonStyles(theme) : null]}>
      {children}
    </Button>
  )
}
