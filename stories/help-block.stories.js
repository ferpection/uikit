import React from 'react'

import { withA11y } from '@storybook/addon-a11y'

import { HelpBlock } from '../src/components/index.ts'

export default {
  title: 'Components/HelpBlock',
  component: HelpBlock,
  decorators: [withA11y],
}

export const NormalState = () => {
  return (
    <HelpBlock question="Pourquoi commencer par les objectifs ?">
      <p>Pour conduire une étude efficace, lorem ipsum</p>
      <p>Par exemple :</p>
      <ul>
        <li>choix un</li>
        <li>choix deux</li>
        <li>choix trois</li>
      </ul>
      <p>
        <a href="https://google.com">Ceci est un lien</a>
      </p>
    </HelpBlock>
  )
}
