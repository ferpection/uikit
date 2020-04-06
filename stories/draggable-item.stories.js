import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { DraggableItem } from '../src/components/index.ts'

storiesOf('Layout/Drag and Drop/DraggableItem', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('simple case', () => (
    <>
      <h1>{DraggableItem.name}</h1>
      <p>The components needs two properties:</p>
      <ul>
        <li>
          <code>itemId</code>: A string representing an <code>ID</code>
        </li>
      </ul>
      <DraggableItem
        itemId={10}
      >
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{10}</div>
      </DraggableItem>
    </>
  ))

