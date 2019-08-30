import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { HelpBlock } from '../src/components/index.js'

storiesOf('Components|HelpBlock', module)
  .addDecorator(withA11y)
  .add('normal state', () => (
    <HelpBlock question="Pourquoi commencer par les objectifs ?" >
      <p>
        Pour conduire une étude efficace, lorem ipsum
      </p>
      <p>Par exemple :</p>
      <ul>
        <li>choix un</li>
        <li>choix deux</li>
        <li>choix trois</li>
      </ul>
    </HelpBlock>
  ))
