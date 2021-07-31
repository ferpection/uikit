import { FC } from 'react'

import { Color, R400_COLOR } from '../../colors'

import { Button, ButtonProps } from './Button/Button'

export interface HeaderLinkProps extends ButtonProps {
  headerLigthVersion?: boolean
}

export const HeaderLink: FC<HeaderLinkProps> = props => {
  const { headerLigthVersion, children, ...otherProps } = props
  const WHITE_COLOR = new Color(255, 255, 255)

  return (
    <Button {...otherProps} color={headerLigthVersion ? R400_COLOR : WHITE_COLOR} isRaw>
      {children}
    </Button>
  )
}
