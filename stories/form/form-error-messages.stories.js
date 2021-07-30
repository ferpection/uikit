import { withA11y } from '@storybook/addon-a11y'

import { FormErrorMessages, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/FormErrorMessages',
  component: FormErrorMessages,
  decorators: [withA11y],
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
