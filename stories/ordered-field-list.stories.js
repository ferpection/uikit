import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

import { OrderedFieldList } from '../src/components/index.js'

storiesOf('Components|Forms/OrderedFieldList', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => <OrderedFieldList initalFieldCount={number('initial field count', 3)} />)
  .add('editable state', () => <OrderedFieldList isEditable />)
  .add('disabled state', () => <OrderedFieldList initalFieldCount={number('initial field count', 3)} isDisabled isEditable={boolean('editable', false)} />)
