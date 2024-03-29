import { FerpectionBadgeIcon, UiKitInitializer } from '../../src/components/index.ts'
import { FULL_COLORSET } from '../../src/colors/index.ts'

export default {
  title: 'Iconography/FerpectionBadgeIcon',
  component: FerpectionBadgeIcon,
}

export const WithDefaultBorderColor = args => {
  return (
    <UiKitInitializer>
      <FerpectionBadgeIcon {...args} />
    </UiKitInitializer>
  )
}

WithDefaultBorderColor.args = { icon: 'config' }

export const WithForcedBorderColor = args => {
  return (
    <UiKitInitializer>
      <FerpectionBadgeIcon {...args} />
    </UiKitInitializer>
  )
}

WithForcedBorderColor.args = { icon: 'config', borderColor: FULL_COLORSET.CINNABAR }
