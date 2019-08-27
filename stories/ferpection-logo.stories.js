import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { FerpectionLogo } from '../src/components/index.js'
import { PRIMARY_COLORSET } from '../src/colors/index.js'

storiesOf('Components|FerpectionLogo', module)
  .addDecorator(withA11y)
  .add('with mixed buttons', () => (
    <FerpectionLogo color={PRIMARY_COLORSET.ROBINS_EGG_BLUE} />
  ))
