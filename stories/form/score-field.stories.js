import { ScoreField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/ScoreField',
  component: ScoreField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '800px' }}>
        <ScoreField {...args} />
      </section>
    </UiKitInitializer>
  )
}

NormalState.args = {
  value: 3,
  range: [1, 5],
}

export const ErrorState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '800px' }}>
        <ScoreField {...args} />
      </section>
    </UiKitInitializer>
  )
}

ErrorState.args = {
  isRequired: true,
  value: null,
  range: [3, 6],
}

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <section style={{ padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <ScoreField {...args} />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0', maxWidth: '800px' }}>
        <ScoreField {...args} />
      </section>
    </UiKitInitializer>
  )
}

DisabledState.args = {
  isDisabled: true,
  value: 10,
  range: [6, 12],
}
