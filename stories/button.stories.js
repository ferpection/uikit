import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Button } from '../src/index'

storiesOf('Components|Button/Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>{text('Label', 'Validate')}</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
