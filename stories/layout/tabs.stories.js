import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { Tabs, TabLink, UiKitInitializer } from '../../src/components/index.ts'
import { N75_COLOR } from '../../src/colors/index.ts'

const Preview = props => (
  <pre
    css={{
      backgroundColor: N75_COLOR.toString(),
      padding: 40,
      marginTop: 40,
    }}
  >
    {props.children}
  </pre>
)

storiesOf('Components/Layout/Tabs', module)
  .addDecorator(withA11y)
  .add('with only TabLinks as children', () => (
    <UiKitInitializer>
      <BrowserRouter>
        <Tabs>
          <TabLink to="/" exactMatch>
            Home
          </TabLink>
          <TabLink to="/about">About</TabLink>
        </Tabs>
        <Switch>
          <Route exact path="/">
            <Preview>Home page loaded</Preview>
          </Route>
          <Route path="/about">
            <Preview>About page loaded</Preview>
          </Route>
        </Switch>
      </BrowserRouter>
    </UiKitInitializer>
  ))
  .add('with TabLinks and other children', () => (
    <UiKitInitializer>
      <BrowserRouter>
        <Tabs>
          <div />
          <TabLink to="/" exactMatch>
            Home
          </TabLink>
          <TabLink to="/about">About</TabLink>
          <div />
        </Tabs>
        <Switch>
          <Route exact path="/">
            <Preview>Home page loaded</Preview>
          </Route>
          <Route path="/about">
            <Preview>About page loaded</Preview>
          </Route>
        </Switch>
      </BrowserRouter>
    </UiKitInitializer>
  ))
  .add('with no TabLink but other children', () => (
    <UiKitInitializer>
      <BrowserRouter>
        <Tabs>
          <div />
          <div />
        </Tabs>
      </BrowserRouter>
    </UiKitInitializer>
  ))
  .add('with no child', () => (
    <UiKitInitializer>
      <BrowserRouter>
        <Tabs />
      </BrowserRouter>
    </UiKitInitializer>
  ))
