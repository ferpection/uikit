import { FormErrorMessages, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/FormErrorMessages',
  component: FormErrorMessages,
}

export const SingleError = args => {
  return (
    <UiKitInitializer>
      <FormErrorMessages {...args} />
    </UiKitInitializer>
  )
}

SingleError.args = {
  errors: { required: {} },
}

export const MultipleError = args => {
  return (
    <UiKitInitializer>
      <FormErrorMessages {...args} />
    </UiKitInitializer>
  )
}

MultipleError.args = {
  errors: {
    required: {},
    notAnEmail: { value: 'this is not an email' },
  },
}
