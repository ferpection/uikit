import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { ReorderableList } from '../src/components/index.ts'

storiesOf('Layout|ReorderableList', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <>
      <h1>{ReorderableList.name}</h1>
      <p>The components needs two properties:</p>
      <ul>
        <li><code>items</code>: A list of items containing a <code>uuid</code> and <code>order</code></li>
        <li><code>renderItem</code>: A render function that takes an item and returns a <code>ReactNode</code></li>
      </ul>
      <ReorderableList
        items={[
          { uuid: '0', order: 40 },
          { uuid: '1', order: 10 },
          { uuid: '2', order: 30 },
          { uuid: '3', order: 20 },
        ]}
        renderItem={(item) => (
          <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>
            div #{item.uuid}
          </div>
        )}
      />
    </>
  ))
