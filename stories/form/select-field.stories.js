import { SelectField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/SelectField',
  component: SelectField,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args}>
        <option value="1">first choice</option>
        <option value="2">second choice</option>
      </SelectField>
    </UiKitInitializer>
  )
}

NormalState.args = {
  placeholder: 'This is a select',
}

export const HighlightedState = args => {
  return (
    <UiKitInitializer>
      <SelectField {...args} />
    </UiKitInitializer>
  )
}

HighlightedState.args = {
  placeholder: 'This is a select',
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
  placeholder: 'This is a select',
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
  placeholder: 'This is a select',
  isDisabled: true,
}
