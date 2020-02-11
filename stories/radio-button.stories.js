import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, select } from '@storybook/addon-knobs'

import { RadioButton, TextField } from '../src/components'

storiesOf('Components|Button/RadioButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <RadioButton>Test</RadioButton>
    </>
  ))
  .add('disabled state', () => (
    <>
      <RadioButton isDisabled>Test</RadioButton>
    </>
  ))
  .add('sub component', () => (
    <>
      <h3>With text</h3>
      <RadioButton radioPosition={select('radio position', ['top', 'center', 'bottom'], 'center')}>
        Id culpa reprehenderit enim nisi et reprehenderit voluptate. Laborum deserunt tempor culpa id anim dolor duis
        sint consectetur mollit dolore magna voluptate. Deserunt consectetur velit ullamco irure reprehenderit mollit
        mollit irure ea non. Commodo enim esse esse fugiat proident reprehenderit exercitation proident qui ex duis
        duis. Veniam ex non voluptate eu laboris sit aute incididunt incididunt velit sunt aute. Nisi ea proident
        consequat laborum aliquip ullamco magna. Velit pariatur sit do minim dolore occaecat tempor mollit deserunt
        mollit. Qui eiusmod anim duis occaecat ex duis et do irure irure eu veniam eiusmod.
      </RadioButton>
      <h3>With {TextField.name}</h3>
      <RadioButton radioPosition={select('radio position', ['top', 'center', 'bottom'], 'center')}>
        <TextField />
      </RadioButton>
      <h3>With text and {TextField.name}</h3>
      <RadioButton radioPosition={select('radio position', ['top', 'center', 'bottom'], 'center')}>
        Test: <TextField />
      </RadioButton>
    </>
  ))
