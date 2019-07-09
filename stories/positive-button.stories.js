import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { PositiveButton } from '../src/components/index.js'

storiesOf('Components|Button/PositiveButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <PositiveButton
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Validate')}
    </PositiveButton>
  ))
  .add('with text and icon', () => (
    <PositiveButton
      icon={text('icon', 'check')}
      iconStore={text('icon store', 'fas')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      {text('label', 'Validate')}
    </PositiveButton>
  ))
  .add('with icon only', () => (
    <PositiveButton
      icon={text('icon', 'google')}
      iconStore={text('icon store', 'fab')}
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    />
  ))
