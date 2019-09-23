import React from 'react'
import propTypes from 'prop-types'

import { FerpectionBadgeIcon } from '../../iconography/FerpectionBadgeIcon'
import { Color } from '../../../colors'

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

ThematicSection.propTypes = {
  title: propTypes.string.isRequired,
  actions: propTypes.element,
  badgeIcon: propTypes.string,
  badgeColor: propTypes.instanceOf(Color),
}
