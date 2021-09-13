import { ScaleField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/ScaleField',
  component: ScaleField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <ScaleField placeholder="This is an input" {...args} />
      <ScaleField rowCount={3} placeholder="This is a textarea" {...args} />
    </UiKitInitializer>
  )
}
