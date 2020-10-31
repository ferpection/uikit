import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { FerpectionLogo, UiKitInitializer } from '../src/components/index.ts'
import { PRIMARY_COLORSET } from '../src/colors/index.ts'

storiesOf('Iconography/FerpectionLogo', module)
  .addDecorator(withA11y)
  .add('normal state', () => (
    <UiKitInitializer>
      <FerpectionLogo color={PRIMARY_COLORSET.ROBINS_EGG_BLUE} />
    </UiKitInitializer>
  ))
