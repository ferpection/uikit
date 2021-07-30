import { action } from '@storybook/addon-actions'

import { Button, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Button/Button',
  component: Button,
}

export const WithText = args => {
  return (
    <UiKitInitializer>
      <Button {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

WithText.args = {
  children: 'Action',
}

export const WithTextAndIcon = args => {
  return (
    <UiKitInitializer>
      <Button {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

WithTextAndIcon.args = {
  icon: 'arrow-left',
  iconStore: 'fas',
  isDisabled: false,
  isFilled: false,
  children: 'Action',
}

export const WithIconOnly = args => {
  return (
    <UiKitInitializer>
      <Button {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

WithIconOnly.args = {
  icon: 'instagram',
  iconStore: 'fab',
  isDisabled: false,
  isFilled: false,
}

export const AsRawLink = args => {
  return (
    <UiKitInitializer>
      <Button {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

AsRawLink.args = {
  icon: 'twitter',
  iconStore: 'fab',
  isDisabled: false,
  isFilled: false,
  isRaw: true,
  children: 'Tweet it!',
}
