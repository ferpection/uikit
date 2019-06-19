import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text } from '@storybook/addon-knobs'

import { IconButton } from '../src/index'

storiesOf('Components|Button/IconButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with icon name', () => <IconButton icon={text('fa icon', 'times')} onClick={action('clicked')}></IconButton>)
  .add('with prefix', () => <IconButton prefix={text('fa prefix', 'fab')} icon={text('fa icon', 'instagram')} onClick={action('clicked')}></IconButton>)
  .add('without icon name', () => <IconButton onClick={action('clicked')} />)
