import { storiesOf } from '@storybook/react'

import { FerpectionLogo, UiKitInitializer } from '../../src/components/index.ts'
import { PRIMARY_COLORSET } from '../../src/colors/index.ts'

storiesOf('Iconography/FerpectionLogo', module).add('normal state', () => (
  <UiKitInitializer>
    <FerpectionLogo color={PRIMARY_COLORSET.ROBINS_EGG_BLUE} />
  </UiKitInitializer>
))
