import { withA11y } from '@storybook/addon-a11y'

import { DraggableItem, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/Drag and Drop/DraggableItem',
  component: DraggableItem,
  decorators: [withA11y],
}

export const SimpleCase = args => {
  return (
    <UiKitInitializer>
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
      <DraggableItem itemId={10} {...args}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{10}</div>
      </DraggableItem>
      <DraggableItem itemId={40} {...args}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{40}</div>
      </DraggableItem>
      <DraggableItem itemId={20} {...args}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{20}</div>
      </DraggableItem>
      <DraggableItem itemId={30} {...args}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{30}</div>
      </DraggableItem>
      <DraggableItem itemId={200} {...args}>
        <div style={{ backgroundColor: '#aaa', margin: '10px', padding: '10px' }}>div #{200}</div>
      </DraggableItem>
    </UiKitInitializer>
  )
}
