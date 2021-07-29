/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { jsx } from '@emotion/react'
import { useRouteMatch } from 'react-router'

import { Button, ButtonProps } from '../Button/Button'

import { defaultButtonStyles, activeButtonStyles } from './styles'
import { useTheme } from '../../../hooks/useTheme'

export interface TabLinkProps extends ButtonProps {
  exactMatch?: boolean
}

export const TabLink: FC<TabLinkProps> = props => {
  const theme = useTheme()
  const { children, exactMatch = false, ...otherProps } = props
  const { to } = otherProps
  const match = useRouteMatch({
    path: to,
    exact: exactMatch,
  })

  return (
    <Button {...otherProps} isRaw css={[defaultButtonStyles(theme), match ? activeButtonStyles(theme) : null]}>
      {children}
    </Button>
  )
}
