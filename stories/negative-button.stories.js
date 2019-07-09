import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { NegativeButton } from '../src/components/index.js'

storiesOf('Components|Button/NegativeButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <NegativeButton
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Cancel')}
    </NegativeButton>
  ))
  .add('with text and icon', () => (
    <NegativeButton
      icon={text('icon', 'times')}
      iconStore={text('icon store', 'fas')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Cancel')}
    </NegativeButton>
  ))
  .add('with icon only', () => (
    <NegativeButton
      icon={text('icon', 'twitter')}
      iconStore={text('icon store', 'fab')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    />
  ))
