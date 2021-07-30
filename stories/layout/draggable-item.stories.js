import { DraggableItem, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/Drag and Drop/DraggableItem',
  component: DraggableItem,

  parameters: {
    docs: {
      description: {
        component:
          'Wrapping any component with `DraggableItem` makes it draggable. Could be combined with `DragHandle` to specify which part of the component will trigger the drag event.',
      },
    },
  },
}

export const SimpleCase = args => {
  return (
    <UiKitInitializer>
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
