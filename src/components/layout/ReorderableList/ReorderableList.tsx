import React, { useState, useEffect, Fragment } from 'react'

import { DraggableItem } from '../dnd/DraggableItem/DraggableItem'
import Zone from './Zone/Zone'

export function ReorderableList<T extends ReorderableItem>(props: ReorderableListProps<T>) {
  const {
    renderItem = (arg: T) => (arg as unknown) as JSX.Element,
    items: data,
    onOrderChange = () => {},
    useExternalDragHandle = false,
  } = props
  const orderItems = (itemA: T, itemB: T) => (itemA.order || 0) - (itemB.order || 0)

  const [items, setItems] = useState([...data].sort(orderItems))
  const [draggedId, setDraggedId] = useState<string | null>(null)

  useEffect(() => setItems([...data].sort(orderItems)), [data])

  const handleDragStatusChange = (status: string, item: T) => {
    if (status === 'dragstart') {
      setDraggedId(item.uuid)
      return
    }

    if (status === 'dragend') {
      setDraggedId(null)
      return
    }
  }

  const handleDrop = (itemId: string | null, position: number) => {
    const removeUnchangedItems = (item: { oldOrder: number | null; newOrder: number }) =>
      item.oldOrder !== item.newOrder
    const getItemFormWorkingData = (workingData: { item: T }) => workingData.item
    const setTemporaryOrders = (item: T) => {
      if (item.uuid === itemId) {
        item.order = position
        return item
      }

      return item
    }
    const createWorkingData = (item: T, index: number) => {
      const order = (index + 1) * 10

      return {
        oldOrder: item.order,
        newOrder: order,
        item: {
          ...item,
          order,
        },
      }
    }

    const workingDataList = items.map(setTemporaryOrders).sort(orderItems).map(createWorkingData)
    const itemsForDataBase = workingDataList.filter(removeUnchangedItems).map(getItemFormWorkingData)
    const itemsForState = workingDataList.map(getItemFormWorkingData)

    setItems(itemsForState)
    onOrderChange(itemsForDataBase)
  }

  return (
    <>
      {items.map((item, index) => {
        const itemOrder = item.order || 0
        const firstDropZonePosition = itemOrder - 5

        return (
          <Fragment key={item.uuid}>
            <Zone onDrop={itemId => handleDrop(itemId, firstDropZonePosition)}>
              <DraggableItem
                itemId={item.uuid}
                useExternalDragHandle={useExternalDragHandle}
                onDragStatusChange={(status) => handleDragStatusChange(status, item)}
              >
                {renderItem(item)}
              </DraggableItem>
            </Zone>
          </Fragment>
        )
      })}
    </>
  )
}

export default ReorderableList

interface ReorderableItem {
  uuid: string
  order: number | null
}

export interface ReorderableListProps<T extends ReorderableItem> {
  items: T[]
  renderItem?: (item: T) => JSX.Element | null
  onOrderChange?: (updatedItems: T[]) => void
  useExternalDragHandle?: boolean
}
