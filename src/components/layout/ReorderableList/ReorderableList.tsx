import React, { useState, useEffect, Fragment } from 'react'

import DraggableItem from './DraggableItem/DraggableItem'
import DropZone from './DropZone/DropZone'

export function ReorderableList<T extends ReorderableItem>(props: ReorderableListProps<T>) {
  const { renderItem = (arg: T) => arg as unknown as JSX.Element, items: data, onOrderChange = () => {} } = props
  const orderItems = (itemA: T, itemB: T) => (itemA.order || 0) - (itemB.order || 0)

  const [items, setItems] = useState([...data].sort(orderItems))
  const [draggedId, setDraggedId] = useState<string | null>(null)

  const uselessDropZones = [
    (items.find(item => item.uuid === draggedId)?.order || 0) - 5,
    (items.find(item => item.uuid === draggedId)?.order || 0) + 5,
  ]

  useEffect(() => setItems([...data].sort(orderItems)), [data])

  const handleDragStart = (dataTransfer: DataTransfer, item: T) => {
    dataTransfer.effectAllowed = 'move'
    dataTransfer.setData('application/uuid', item.uuid)

    setDraggedId(item.uuid)
  }

  const handleDrop = (dataTransfer: DataTransfer, position: number) => {
    const uuid = dataTransfer.getData('application/uuid')

    const removeUnchangedItems = (item: { oldOrder: number | null; newOrder: number }) =>
      item.oldOrder !== item.newOrder
    const getItemFormWorkingData = (workingData: { item: T }) => workingData.item
    const setTemporaryOrders = (item: T) => {
      if (item.uuid === uuid) {
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

    const workingDataList = items
      .map(setTemporaryOrders)
      .sort(orderItems)
      .map(createWorkingData)
    const itemsForDataBase = workingDataList
      .filter(removeUnchangedItems)
      .map(getItemFormWorkingData)
    const itemsForState = workingDataList.map(getItemFormWorkingData)

    setItems(itemsForState)
    onOrderChange(itemsForDataBase)
  }

  const handleDragEnd = () => setDraggedId(null)

  return (
    <>
      {items.map((item, index) => {
        const itemOrder = item.order || 0
        const firstDropZonePosition = itemOrder - 5
        const lastDropZonePosition = itemOrder + 5

        const hasDropZoneBefore =
          draggedId != null && !uselessDropZones.includes(firstDropZonePosition)
        const hasDropZoneAfter =
          draggedId != null &&
          index === items.length - 1 &&
          !uselessDropZones.includes(lastDropZonePosition)

        return (
          <Fragment key={item.uuid}>
            {hasDropZoneBefore && <DropZone onDrop={dt => handleDrop(dt, firstDropZonePosition)} />}
            <DraggableItem
              onDragStart={dt => handleDragStart(dt, item)}
              onDragEnd={() => handleDragEnd()}
            >
              {renderItem(item)}
            </DraggableItem>
            {hasDropZoneAfter && <DropZone onDrop={dt => handleDrop(dt, lastDropZonePosition)} />}
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
}
