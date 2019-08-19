import React, { Children, isValidElement, cloneElement } from 'react'

import { defaultHeaderStyles, buttonListStyle } from './styles'
import { PRIMARY_COLORSET } from '../../../colors';

export const Header = (props) => {
  const { homeUrl = 'https://ferpection.com/', children } = props
  const buttonList = Children
    .toArray(children)
    .filter(child => isValidElement(child))
    .map(child => cloneElement(child, { isFilled: false, color: PRIMARY_COLORSET.CINNABAR }))
    .map(child => <li>{child}</li>)

  return (
    <header css={[defaultHeaderStyles]}>
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
