import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { Header, Button, HeaderLink, UiKitInitializer } from '../../src/components/index.ts'

storiesOf('Components/Layout/Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with classic buttons', () => (
    <UiKitInitializer>
      <Header isLightVersion={boolean('light version', false)}>
        <Button>Home</Button>
        <Button>Blog</Button>
      </Header>
    </UiKitInitializer>
  ))
  .add('with header links', () => (
    <UiKitInitializer>
      <Header isLightVersion={boolean('light version', false)}>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>Blog</HeaderLink>
      </Header>
    </UiKitInitializer>
  ))
  .add('with mixed buttons', () => (
    <UiKitInitializer>
      <Header isLightVersion={boolean('light version', true)}>
        <HeaderLink icon="home">Home</HeaderLink>
        <HeaderLink>Stats</HeaderLink>
        <Button>Blog</Button>
      </Header>
    </UiKitInitializer>
  ))
