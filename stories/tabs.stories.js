/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { Tabs, TabLink } from '../src/components/index.ts'
import { N75_COLOR } from '../src/colors/index.ts'

storiesOf('Layout|Tabs', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with classic buttons', () => (
    <BrowserRouter>
      <Tabs>
        <TabLink to="/" exactMatch>Home</TabLink>
        <TabLink to="/about">Blog</TabLink>
      </Tabs>
      <Switch>
        <pre
          css={{
            backgroundColor: N75_COLOR.toString(),
            padding: 40,
            marginTop: 40,
          }}
        >
          <Route exact path="/">
            Home page loaded
          </Route>
          <Route path="/about">
            About page loaded
          </Route>
        </pre>
      </Switch>
    </BrowserRouter>
  ))
