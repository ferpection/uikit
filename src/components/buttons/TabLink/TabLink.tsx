/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'
import { useRouteMatch } from 'react-router'

import { Button, ButtonProps } from '../Button/Button'

import { defaultButtonStyles, activeButtonStyles } from './styles'

export interface TabLinkProps extends ButtonProps {
  exactMatch?: boolean
}

export const TabLink: FC<TabLinkProps> = props => {
  const { children, exactMatch = false, ...otherProps } = props
  const { to } = otherProps
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
