import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { Header, Button } from '../src/components/index.js'

storiesOf('Layout|Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with classic button', () => (
    <Header isLightVersion={boolean('light version', false)}>
      <Button>Home</Button>
      <Button>Blog</Button>
    </Header>
  ))
