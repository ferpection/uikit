import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { Tabs, Button } from '../src/components/index.ts'

storiesOf('Layout|Tabs', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with classic buttons', () => (
    <Tabs>
      <Button>Home</Button>
      <Button>Blog</Button>
    </Tabs>
  ))
