import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { IconButton } from '../src/index'

storiesOf('Components|Button/IconButton', module)
  .add('with icon name', () => <IconButton icon="times" onClick={action('clicked')}></IconButton>)
  .add('with prefix', () => <IconButton prefix="fab" icon="instagram" onClick={action('clicked')}></IconButton>)
  .add('without icon name', () => <IconButton onClick={action('clicked')} />)
