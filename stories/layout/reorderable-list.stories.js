import { ReorderableList, DragHandle, TextField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/ReorderableList',
  component: ReorderableList,

  parameters: {
    docs: {
      description: {
        component:
          'Render a list of components based on user data. Supports reordering of the list items. Use `DraggableItem` and `Dropzone` behind the scene.',
      },
    },
  },
}

export const SimpleCase = args => {
  return (
    <UiKitInitializer>
      <ReorderableList
        renderItem={item => <div style={{ backgroundColor: '#aaa', padding: '10px' }}>div #{item.uuid}</div>}
        {...args}
      />
    </UiKitInitializer>
  )
}

SimpleCase.args = {
  items: [
    { uuid: '0', order: 40 },
    { uuid: '1', order: 10 },
    { uuid: '2', order: 30 },
    { uuid: '3', order: 20 },
  ],
}

export const WithDragHandle = args => {
  return (
    <UiKitInitializer>
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
        renderItem={item => (
          <div style={{ backgroundColor: '#aaa', padding: '10px' }}>
            <DragHandle />
            <TextField isSmall /> (div #{item.uuid})
          </div>
        )}
        {...args}
      />
      <p>
        Users can customize the <code>DragHandle</code> using the <code>children</code> prop.
      </p>
      <ReorderableList
        renderItem={(item, dragStarted) => (
          <div style={{ backgroundColor: dragStarted ? '#F97F51' : '#aaa', padding: '10px' }}>
            <DragHandle>
              <span>div #{item.uuid} :</span>
            </DragHandle>
            <TextField isSmall />
          </div>
        )}
        {...args}
      />
    </UiKitInitializer>
  )
}

WithDragHandle.args = {
  items: [
    { uuid: '0', order: 40 },
    { uuid: '1', order: 10 },
    { uuid: '2', order: 30 },
    { uuid: '3', order: 20 },
  ],
  useExternalDragHandle: true,
}
