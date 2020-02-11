import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import { CheckboxButton, TextField, DatePickerField } from '../src/components'

storiesOf('Components|Button/CheckboxButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <CheckboxButton>Test</CheckboxButton>
    </>
  ))
  .add('disabled state', () => (
    <>
      <CheckboxButton isDisabled>Test</CheckboxButton>
    </>
  ))
  .add('sub component', () => (
    <>
      <h3>With text</h3>
      <CheckboxButton checkboxPosition={select('checkbox position', ['top', 'center', 'bottom'], 'center')}>
        Id culpa reprehenderit enim nisi et reprehenderit voluptate. Laborum deserunt tempor culpa id anim dolor duis sint consectetur mollit dolore magna voluptate. Deserunt consectetur velit ullamco irure reprehenderit mollit mollit irure ea non. Commodo enim esse esse fugiat proident reprehenderit exercitation proident qui ex duis duis.

        Veniam ex non voluptate eu laboris sit aute incididunt incididunt velit sunt aute. Nisi ea proident consequat laborum aliquip ullamco magna. Velit pariatur sit do minim dolore occaecat tempor mollit deserunt mollit. Qui eiusmod anim duis occaecat ex duis et do irure irure eu veniam eiusmod.
      </CheckboxButton>
      <h3>With {TextField.name}</h3>
      <CheckboxButton checkboxPosition={select('checkbox position', ['top', 'center', 'bottom'], 'center')}>
        <TextField isSmall={boolean('inner field is small', false)} />
      </CheckboxButton>
      <h3>With text and {TextField.name}</h3>
      <CheckboxButton checkboxPosition={select('checkbox position', ['top', 'center', 'bottom'], 'center')}>
        Test: <TextField isSmall={boolean('inner field is small', false)}/>
      </CheckboxButton>
      <h3>With text and {DatePickerField.name}</h3>
      <CheckboxButton checkboxPosition={select('checkbox position', ['top', 'center', 'bottom'], 'center')}>
        Test: <DatePickerField isSmall={boolean('inner field is small', false)} />
      </CheckboxButton>
    </>
  ))
