import { SelectField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/SelectField',
  component: SelectField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args} />
    </UiKitInitializer>
  )
}

NormalState.args = {
  placeholder: 'This is an select',
}

export const HighlightedState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args} />
    </UiKitInitializer>
  )
}

HighlightedState.args = {
  placeholder: 'This is an select',
  isHighlighted: true,
}

export const ErrorState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args} />
    </UiKitInitializer>
  )
}

ErrorState.args = {
  placeholder: 'This is an select',
  isRequired: true,
}

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args} />
    </UiKitInitializer>
  )
}

DisabledState.args = {
  placeholder: 'This is an select',
  isDisabled: true,
}
