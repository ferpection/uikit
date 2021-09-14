import { ScaleField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/ScaleField',
  component: ScaleField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <ScaleField value={3} {...args} />
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScaleField value={3} {...args} />
      </section>
    </UiKitInitializer>
  )
}
