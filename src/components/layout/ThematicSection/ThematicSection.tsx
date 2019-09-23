import React from 'react'
import { ReactElementLike } from 'prop-types'

import { FerpectionBadgeIcon, FerpectionBadgeIconProps } from '../../iconography/FerpectionBadgeIcon'
import { Color } from '../../../colors'

import {
  containerStyles,
  headerStyles,
  titleStyles,
  sectionStyles,
  titleTextStyles,
  logoStyles,
} from './styles'

export const ThematicSection: React.FC<ThematicSectionProps> = props => (
  <div css={[containerStyles]}>
    <header css={[headerStyles]}>
      <div css={[titleStyles]}>
        <div css={[logoStyles]}>
          <FerpectionBadgeIcon
            icon={props.badgeIcon}
            borderColor={props.badgeColor}
          />
        </div>
        <h2 css={[titleTextStyles]}>{props.title}</h2>
      </div>
      <div>{props.actions}</div>
    </header>
    <section css={[sectionStyles]}>{props.children}</section>
  </div>
)

export interface ThematicSectionProps {
  title: string
  actions?: ReactElementLike
  badgeIcon?: FerpectionBadgeIconProps["icon"]
  badgeColor?: Color
}
