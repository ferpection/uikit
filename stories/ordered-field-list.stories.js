import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { OrderedFieldList } from '../src/components/index.js'

storiesOf('Components|Forms/OrderedFieldList', module)
  .addDecorator(withA11y)
  .add('normal state', () => <OrderedFieldList />)
  .add('editable state', () => <OrderedFieldList />)
  .add('disabled state', () => <OrderedFieldList isDisabled />)
