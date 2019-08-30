import React from 'react'

import { Button } from '../../buttons/Button/Button'

import { containerStyles, headerStyles, titleStyles, sectionStyles, titleTextStyles, logoStyles } from './styles'

export const ThematicSection = (props) => (
  <div css={[containerStyles]}>
    <header css={[headerStyles]}>
      <div css={[titleStyles]}>
        <div css={[logoStyles]}><img /></div>
        <h2 css={[titleTextStyles]}>{props.title}</h2>
      </div>
      <div>
        <Button icon="comment-medical" isDisabled isRaw />
      </div>
    </header>
    <section css={[sectionStyles]}>
      {props.children}
    </section>
  </div>
)
