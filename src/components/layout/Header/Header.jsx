import React, { Children, isValidElement, cloneElement } from 'react'

import { defaultHeaderStyles, buttonListStyle, lightHeaderStyle } from './styles'
import { PRIMARY_COLORSET } from '../../../colors';

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
      <div>
        <a href={homeUrl} title="Go to homepage"><img alt=""/></a>
      </div>
      <nav>
        <ul css={[buttonListStyle]}>
          {buttonList}
        </ul>
      </nav>
    </header>
  )
}
