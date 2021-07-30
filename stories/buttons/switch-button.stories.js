import { UiKitInitializer, SwitchButton } from '../../src/components'

export default {
  title: 'Components/Button/SwitchButton',
  component: SwitchButton,
}

export const BasicExample = args => {
  return (
    <UiKitInitializer>
      <SwitchButton {...args} onValueChange={event => console.log(event.target.value, event.target.checked)}>
        Test
      </SwitchButton>
    </UiKitInitializer>
  )
}
