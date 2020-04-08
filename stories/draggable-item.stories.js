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
        <li>
          <code>children</code>: The body of a draggable item
        </li>
      </ul>
      <DraggableItem itemId={10}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{10}</div>
      </DraggableItem>
      <DraggableItem itemId={40}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{40}</div>
      </DraggableItem>
      <DraggableItem itemId={20}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{20}</div>
      </DraggableItem>
      <DraggableItem itemId={30}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{30}</div>
      </DraggableItem>
      <DraggableItem itemId={200}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{200}</div>
      </DraggableItem>
    </>
  ))
