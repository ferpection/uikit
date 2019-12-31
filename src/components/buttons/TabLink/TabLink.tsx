/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'
import { useRouteMatch } from 'react-router'

import { Button, ButtonProps } from '../Button/Button'

import { defaultButtonStyles, activeButtonStyles } from './styles'

export const TabLink: FC<TabLinkProps> = props => {
  const { children, ...otherProps } = props
  const { to, exactMatch = false } = otherProps
  const match = useRouteMatch({
    path: to,
    exact: exactMatch,
  })

  return (
    <Button {...otherProps} isRaw css={[defaultButtonStyles, match ? activeButtonStyles : null]}>
      {children}
    </Button>
  )
}

export interface TabLinkProps extends ButtonProps {
  exactMatch?: boolean
}
