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
      {text('label', 'Validate')}
    </NegativeButton>
  ))
  .add('with some emoji', () => (
    <NegativeButton
      onClick={action('clicked')}
      isDisabled={boolean('disabled', false)}
      isFilled={boolean('filled', false)}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </NegativeButton>
  ))
