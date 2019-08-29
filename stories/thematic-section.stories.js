import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { ThematicSection } from '../src/components/index.js'

storiesOf('Layout|ThematicSection', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with classic buttons', () => (
    <ThematicSection title="Questions de qualification" />
  ))
