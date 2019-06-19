import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { IconButton } from '../src/index'

storiesOf('Components|Button/IconButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with icon name', () => <IconButton icon="times" onClick={action('clicked')}></IconButton>)
  .add('with prefix', () => <IconButton prefix="fab" icon="instagram" onClick={action('clicked')}></IconButton>)
  .add('without icon name', () => <IconButton onClick={action('clicked')} />)
