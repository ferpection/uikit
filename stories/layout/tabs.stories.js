import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Tabs, TabLink, UiKitInitializer } from '../../src/components/index.ts'
import { N75_COLOR } from '../../src/colors/index.ts'

const Preview = props => (
  <pre
    style={{
      backgroundColor: N75_COLOR.toString(),
      padding: 40,
      marginTop: 40,
    }}
  >
    {props.children}
  </pre>
)

export default {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Display a simple blue tab bar',
      },
    },
  },
}

export const OnlyTabLinks = args => (
  <UiKitInitializer>
    <BrowserRouter>
      <Tabs {...args}>
        <TabLink to="/" exactMatch>
          Home
        </TabLink>
        <TabLink to="/about">About</TabLink>
      </Tabs>
      <Routes>
        <Route exact path="/" element={<Preview>Home page loaded</Preview>} />
        <Route path="/about" element={<Preview>About page loaded</Preview>} />
      </Routes>
    </BrowserRouter>
  </UiKitInitializer>
)

export const TabLinksWithOthers = args => (
  <UiKitInitializer>
    <BrowserRouter>
      <Tabs {...args}>
        <div />
        <TabLink to="/" exactMatch>
          Home
        </TabLink>
        <TabLink to="/about">About</TabLink>
        <div />
      </Tabs>
      <Routes>
        <Route exact path="/" element={<Preview>Home page loaded</Preview>} />
        <Route path="/about" element={<Preview>About page loaded</Preview>} />
      </Routes>
    </BrowserRouter>
  </UiKitInitializer>
)

export const OnlyOthers = args => (
  <UiKitInitializer>
    <BrowserRouter>
      <Tabs {...args}>
        <div />
        <div />
      </Tabs>
    </BrowserRouter>
  </UiKitInitializer>
)

export const Empty = args => (
  <UiKitInitializer>
    <BrowserRouter>
      <Tabs {...args} />
    </BrowserRouter>
  </UiKitInitializer>
)
