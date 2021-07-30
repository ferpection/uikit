import { Header, Button, HeaderLink, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/Header',
  component: Header,
}

export const WithClassicButtons = args => {
  return (
    <UiKitInitializer>
      <Header {...args}>
        <Button>Home</Button>
        <Button>Blog</Button>
      </Header>
    </UiKitInitializer>
  )
}

export const WithHeaderLinks = args => {
  return (
    <UiKitInitializer>
      <Header {...args}>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>Blog</HeaderLink>
      </Header>
    </UiKitInitializer>
  )
}

export const WithMixedButtons = args => {
  return (
    <UiKitInitializer>
      <Header {...args}>
        <HeaderLink icon="home">Home</HeaderLink>
        <HeaderLink>Stats</HeaderLink>
        <Button>Blog</Button>
      </Header>
    </UiKitInitializer>
  )
}

WithMixedButtons.args = {
  isLightVersion: true,
}
