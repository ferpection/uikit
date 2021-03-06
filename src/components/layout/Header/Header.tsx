/** @jsx jsx */
import React, { Children, isValidElement, cloneElement, ReactElement } from 'react'
import { jsx } from '@emotion/react'

import { Color, R400_COLOR } from '../../../colors/index'

import { FerpectionLogo } from '../../iconography/FerpectionLogo'
import { HeaderLink } from '../../buttons/HeaderLink'

import { defaultHeaderStyles, buttonListStyle, lightHeaderStyle, logoStyles } from './styles'

export interface HeaderProps {
  homeUrl?: string
  isLightVersion?: boolean
  className?: string
}

export const Header: React.FC<HeaderProps> = props => {
  const { className, homeUrl = 'https://ferpection.com/', children, isLightVersion } = props
  const BLACK_COLOR = new Color(255, 255, 255)

  const buttonList = Children.toArray(children)
    .filter(child => isValidElement(child))
    .map((child: ReactElement) => {
      const opts: any = {
        isFilled: false,
        color: R400_COLOR,
      }

      if (child.type === HeaderLink) {
        opts.headerLigthVersion = isLightVersion
      }

      return cloneElement(child, opts)
    })
    .map((child, i) => <li key={i}>{child}</li>)

  return (
    <header className={className} css={[defaultHeaderStyles, isLightVersion ? lightHeaderStyle : null]}>
      <div css={logoStyles}>
        <a href={homeUrl} title="Go to homepage">
          <FerpectionLogo color={isLightVersion ? R400_COLOR : BLACK_COLOR} />
        </a>
      </div>
      <nav>
        <ul css={[buttonListStyle]}>{buttonList}</ul>
      </nav>
    </header>
  )
}
