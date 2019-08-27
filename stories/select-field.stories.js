import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import {
  withKnobs,
  text,
  number,
  boolean,
  select,
} from '@storybook/addon-knobs'

import { SelectField } from '../src/components/index.js'

storiesOf('Components|Forms/SelectField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => <SelectField placeholder="This is an select" />)
  .add('highlighted state', () => (
    <SelectField placeholder="This is a highlighted select" isHighlighted />
  ))
  .add('error state', () => (
    <SelectField placeholder="This is a error select" isRequired />
  ))
  .add('disabled state', () => (
    <SelectField placeholder="This is a disabled select" isDisabled />
  ))
  .add('full example', () => (
    <SelectField
      placeholder={text('placeholder', 'Fill the field')}
      dataType={select('data type', ['text', 'email'])}
      rowCount={number('row count', 1)}
      isHighlighted={boolean('highlighted', false)}
      isDisabled={boolean('disabled', false)}
    />
  ))
