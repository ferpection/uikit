import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react'

import { Color, R400_COLOR } from '../../../colors/index'
import { FerpectionLogo } from '../../iconography/FerpectionLogo'

import {
  defaultHeaderStyles,
  buttonListStyle,
  lightHeaderStyle,
  logoStyles,
} from './styles.js'

export const Header: React.FC<HeaderProps> = props => {
  const {
    homeUrl = 'https://ferpection.com/',
    children,
    isLightVersion,
  } = props
  const BLACK_COLOR = new Color(255, 255, 255)

  const buttonList = Children.toArray(children)
    .filter(child => isValidElement(child))
    .map((child: ReactElement) =>
      cloneElement(child, {
        isFilled: false,
        color: R400_COLOR,
        headerLigthVersion: isLightVersion,
      })
    )
    .map((child, i) => <li key={i}>{child}</li>)

  return (
    <header
      css={[defaultHeaderStyles, isLightVersion ? lightHeaderStyle : null]}
    >
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

export interface HeaderProps {
  homeUrl?: string
  isLightVersion?: boolean
}
