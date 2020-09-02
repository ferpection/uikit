/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { Tabs, TabLink } from '../src/components/index.ts'
import { N75_COLOR } from '../src/colors/index.ts'

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

storiesOf('Layout/Tabs', module)
  .addDecorator(withA11y)
  .add('with only TabLinks as children', () => (
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
  ))
  .add('with TabLinks and other children', () => (
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
  ))
  .add('with no TabLink but other children', () => (
    <BrowserRouter>
      <Tabs>
        <div />
        <div />
      </Tabs>
    </BrowserRouter>
  ))
  .add('with no child', () => (
    <BrowserRouter>
      <Tabs />
    </BrowserRouter>
  ))
