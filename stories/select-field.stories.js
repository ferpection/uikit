import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import { SelectField, UiKitInitializer } from '../src/components/index.ts'

storiesOf('Components/Forms/SelectField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <UiKitInitializer>
      <SelectField placeholder="This is an select" />
    </UiKitInitializer>
  ))
  .add('highlighted state', () => (
    <UiKitInitializer>
      <SelectField placeholder="This is a highlighted select" isHighlighted />
    </UiKitInitializer>
  ))
  .add('error state', () => (
    <UiKitInitializer>
      <SelectField placeholder="This is a error select" isRequired>
        <option value="test1">First element</option>
        <option value="test2">Second element</option>
      </SelectField>
    </UiKitInitializer>
  ))
  .add('disabled state', () => (
    <UiKitInitializer>
      <SelectField placeholder="This is a disabled select" isDisabled />
    </UiKitInitializer>
  ))
  .add('full example', () => (
    <UiKitInitializer>
      <SelectField
        placeholder={text('placeholder', 'Fill the field')}
        dataType={select('data type', ['text', 'email'])}
        isHighlighted={boolean('highlighted', false)}
        isDisabled={boolean('disabled', false)}
        isSmall={boolean('is small', false)}
      />
    </UiKitInitializer>
  ))
