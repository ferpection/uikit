import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { ReorderableList, DragHandle, TextField } from '../src/components/index.ts'

storiesOf('Layout|ReorderableList', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('simple case', () => (
    <>
      <h1>{ReorderableList.name}</h1>
      <p>The components needs two properties:</p>
      <ul>
        <li>
          <code>items</code>: A list of items containing a <code>uuid</code> and <code>order</code>
        </li>
        <li>
          <code>renderItem</code>: A render function that takes an item and returns a <code>ReactNode</code>
        </li>
      </ul>
      <ReorderableList
        items={[
          { uuid: '0', order: 40 },
          { uuid: '1', order: 10 },
          { uuid: '2', order: 30 },
          { uuid: '3', order: 20 },
        ]}
        renderItem={item => (
          <div style={{ backgroundColor: '#aaa', padding: '10px' }}>div #{item.uuid}</div>
        )}
      />
    </>
  ))
  .add('with drag handle', () => (
    <>
      <h1>{ReorderableList.name}</h1>
      <p>The components can let you chose how to handle the drag.</p>
      <p>
        A <code>DragHandle</code> component can be placed anywhere you want to change where the user can start the drag.
      </p>
      <p>
        To do so, the user has to add the <code>useExternalDragHandle</code> to the <code>ReorderableList</code>{' '}
        component.
      </p>
      <ReorderableList
        items={[
          { uuid: '0', order: 40 },
          { uuid: '1', order: 10 },
          { uuid: '2', order: 30 },
          { uuid: '3', order: 20 },
        ]}
        useExternalDragHandle
        renderItem={item => (
          <div style={{ backgroundColor: '#aaa', padding: '10px' }}>
            <DragHandle />
            <TextField isSmall /> (div #{item.uuid})
          </div>
        )}
      />
      <p>
        Users can customize the <code>DragHandle</code> using the <code>children</code> prop.
      </p>
      <ReorderableList
        items={[
          { uuid: '0', order: 40 },
          { uuid: '1', order: 10 },
          { uuid: '2', order: 30 },
          { uuid: '3', order: 20 },
        ]}
        useExternalDragHandle
        renderItem={item => (
          <div style={{ backgroundColor: '#aaa',padding: '10px' }}>
            <DragHandle>
              <span>div #{item.uuid} :</span>
            </DragHandle>
            <TextField isSmall />
          </div>
        )}
      />
    </>
  ))
