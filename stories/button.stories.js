import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Button } from '../src/components/index.js'

storiesOf('Components|Button/Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Action')}
    </Button>
  ))
  .add('with text and icon', () => (
    <Button
      icon={text('icon', 'arrow-left')}
      iconStore={text('icon store', 'fas')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Action')}
    </Button>
  ))
  .add('with icon only', () => (
    <Button
      icon={text('icon', 'instagram')}
      iconStore={text('icon store', 'fab')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    />
  ))
  .add('as row link', () => (
    <Button
      icon="twitter"
      iconStore="fab"
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
      isRaw={boolean('raw', true)}
    >
      Tweet it!
    </Button>
  ))
