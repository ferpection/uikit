import React from 'react'

import { FerpectionBadgeIcon } from '../../iconography/FerpectionBadgeIcon'

import {
  containerStyles,
  headerStyles,
  titleStyles,
  sectionStyles,
  titleTextStyles,
  logoStyles,
} from './styles'

export const ThematicSection = props => (
  <div css={[containerStyles]}>
    <header css={[headerStyles]}>
      <div css={[titleStyles]}>
        <div css={[logoStyles]}>
          <FerpectionBadgeIcon icon={props.icon} borderColor={props.color} />
        </div>
        <h2 css={[titleTextStyles]}>{props.title}</h2>
      </div>
      <div>{props.actions}</div>
    </header>
    <section css={[sectionStyles]}>{props.children}</section>
  </div>
)
