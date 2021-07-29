import { FC } from 'react'
import { ReactElementLike } from 'prop-types'

import {
  FerpectionBadgeIcon,
  FerpectionBadgeIconProps,
} from '../../iconography/FerpectionBadgeIcon/FerpectionBadgeIcon'
import { Color } from '../../../colors'

import { containerStyles, headerStyles, titleStyles, sectionStyles, titleTextStyles, logoStyles } from './styles'

export interface ThematicSectionProps {
  title: string
  actions?: ReactElementLike
  badgeIcon?: FerpectionBadgeIconProps['icon']
  badgeColor?: Color
  className?: string
}

export const ThematicSection: FC<ThematicSectionProps> = props => (
  <div className={props.className} css={[containerStyles]}>
    <header css={[headerStyles]}>
      <div css={[titleStyles]}>
        <div css={[logoStyles]}>
          <FerpectionBadgeIcon icon={props.badgeIcon} borderColor={props.badgeColor} />
        </div>
        <h2 css={[titleTextStyles]}>{props.title}</h2>
      </div>
      <div>{props.actions}</div>
    </header>
    <section css={[sectionStyles]}>{props.children}</section>
  </div>
)
