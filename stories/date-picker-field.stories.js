import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { DatePickerField, TextField } from '../src/components/index.ts'

storiesOf('Components|Forms/DatePickerField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <>
      <h1>DatePickerField</h1>
      <p>The component displays a regular {TextField.name} component and when the user click on it a datePicker is displayed on hover.</p>
      <p>Example:</p>
      <DatePickerField />
      <p>The {DatePickerField.name} acts like a regular {TextField.name} plus some specificities.</p>
    </>
  ))
