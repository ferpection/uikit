import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { RadioButton } from '../src/components/index.js'

storiesOf('Components|Button/RadioButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('without label or text', () => (
    <>
      <RadioButton
        value="ok"
        name="a"
        onChange={action('selected')}
        isDisabled={boolean('disabled', false)}
      />
    </>
  ))
  .add('with text', () => (
    <RadioButton
      value="ok"
      onChange={action('selected')}
      isDisabled={boolean('disabled', false)}
    >
      {text('label', 'Action')}
    </RadioButton>
  ))
  .add('with label', () => (
    <RadioButton
      value="ok"
      onChange={action('selected')}
      isDisabled={boolean('disabled', false)}
    >
      <label>{text('label', 'Action')}</label>
    </RadioButton>
  ))
  .add('with many elements', () => (
    <RadioButton
      value="ok"
      onChange={action('selected')}
      isDisabled={boolean('disabled', false)}
    >
      <b>bold:</b>
      <span>{text('label', 'Action')}</span>
    </RadioButton>
  ))
