import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { Header, Button } from '../src/components/index.js'

storiesOf('Layout|Header', module)
  .addDecorator(withA11y)
  .add('with classic button', () => (
    <Header>
      <Button>Home</Button>
      <Button>Blog</Button>
    </Header>
  ))
