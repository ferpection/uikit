import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { Dropzone, DraggableItem } from '../src/components/index.ts'

storiesOf('Layout/Drag and Drop/Dropzone', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('simple case', () => (
    <>
      <h1>{Dropzone.name}</h1>
      <p>The components needs two properties:</p>
      <ul>
        <li>
          <code>children</code>: The body of the dropzone
        </li>
      </ul>
      <DraggableItem
        itemId={10}
      >
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{10}</div>
      </DraggableItem>
      <Dropzone>
        {({ elementIsOver }) => (<div style={{ backgroundColor: elementIsOver ? '#CCC' : '#aaa', margin: '10px', padding: '10px' }}>dropzone (over: {`${elementIsOver}`})</div>)}
      </Dropzone>
      <DraggableItem
        itemId={20}
      >
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{20}</div>
      </DraggableItem>
    </>
  ))
