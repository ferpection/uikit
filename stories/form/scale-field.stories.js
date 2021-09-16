import { ScaleField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/ScaleField',
  component: ScaleField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '500px' }}>
        <ScaleField {...args} />
      </section>
    </UiKitInitializer>
  )
}

NormalState.args = {
  value: 3,
  range: [0, 10],
}

export const ErrorState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '500px' }}>
        <ScaleField {...args} />
      </section>
    </UiKitInitializer>
  )
}

ErrorState.args = {
  isRequired: true,
  value: null,
  range: [1, 5],
}

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScaleField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '500px' }}>
        <ScaleField {...args} />
      </section>
    </UiKitInitializer>
  )
}

DisabledState.args = {
  isDisabled: true,
  value: 10,
  range: [6, 12],
}
