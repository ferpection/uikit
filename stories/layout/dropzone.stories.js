import { withA11y } from '@storybook/addon-a11y'

import { Dropzone, DraggableItem, DragHandle, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/Drag and Drop/Dropzone',
  component: Dropzone,
  decorators: [withA11y],
}

export const SimpleCase = args => {
  return (
    <UiKitInitializer>
      <h1>{Dropzone.name}</h1>
      <p>The components needs two properties:</p>
      <ul>
        <li>
          <code>children</code>: The body of the dropzone
        </li>
      </ul>
      <DraggableItem itemId={20} useExternalDragHandle>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>
          <DragHandle>
            <span>div #{20}</span>
          </DragHandle>
          lezjklz
        </div>
      </DraggableItem>
      <DraggableItem itemId={40} useExternalDragHandle>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>
          <DragHandle>div #{40}</DragHandle>lezjklz
        </div>
      </DraggableItem>
      <DraggableItem itemId={10}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{10}</div>
      </DraggableItem>
      <DraggableItem itemId={30}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{30}</div>
      </DraggableItem>
      <Dropzone {...args}>
        {({ elementIsOver }) => (
          <div style={{ backgroundColor: elementIsOver ? '#CCC' : '#aaa', margin: '10px', padding: '20px' }}>
            dropzone (over: {`${elementIsOver}`})
          </div>
        )}
      </Dropzone>
    </UiKitInitializer>
  )
}
