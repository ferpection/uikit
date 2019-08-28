import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { OrderedFieldList } from '../src/components/index.js'

storiesOf('Components|Forms/OrderedFieldList', module)
  .addDecorator(withA11y)
  .add('normal state', () => <OrderedFieldList initalFieldCount={3} />)
  .add('editable state', () => <OrderedFieldList isEditable />)
  .add('disabled state', () => <OrderedFieldList initalFieldCount={3} isDisabled isEditable />)
