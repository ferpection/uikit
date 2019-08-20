import React, { Children, isValidElement, cloneElement } from 'react'

import { PRIMARY_COLORSET } from '../../../colors'
import { FerpectionLogo } from '../../logos/FerpectionLogo.jsx'

import { defaultHeaderStyles, buttonListStyle, lightHeaderStyle, logoStyles } from './styles'

export const Header = (props) => {
  const { homeUrl = 'https://ferpection.com/', children, isLightVersion } = props
  const buttonList = Children
    .toArray(children)
    .filter(child => isValidElement(child))
    .map(child => cloneElement(child, { isFilled: false, color: PRIMARY_COLORSET.CINNABAR, headerLigthVersion: isLightVersion }))
    .map((child, i) => <li key={i}>{child}</li>)

  return (
    <header css={[
      defaultHeaderStyles,
      isLightVersion ? lightHeaderStyle : null,
    ]}>
      <div css={logoStyles}>
        <a href={homeUrl} title="Go to homepage">
          <FerpectionLogo color={isLightVersion ? PRIMARY_COLORSET.CINNABAR : '#FFFFFF'}/>
        </a>
      </div>
      <nav>
        <ul css={[buttonListStyle]}>
          {buttonList}
        </ul>
      </nav>
    </header>
  )
}
