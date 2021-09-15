import { ScaleField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/ScaleField',
  component: ScaleField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScaleField value={3} {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScaleField value={3} {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '500px' }}>
        <ScaleField value={3} {...args} />
      </section>
    </UiKitInitializer>
  )
}
