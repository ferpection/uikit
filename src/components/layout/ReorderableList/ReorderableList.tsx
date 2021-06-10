/* global JSX */

import React, { useState, useEffect, Fragment } from 'react'

import { DraggableItem } from '../dnd/DraggableItem/DraggableItem'
import Zone from './Zone/Zone'

let positionA = 0

interface ReorderableItem {
  uuid: string
  order: number | null
}

export interface ReorderableListProps<T extends ReorderableItem> {
  items: T[]
  renderItem?: (item: T, dragStarted: boolean) => JSX.Element | null
  onOrderChange?: (updatedItems: T[]) => void
  useExternalDragHandle?: boolean
}

export function ReorderableList<T extends ReorderableItem>(props: ReorderableListProps<T>) {
  const {
    renderItem = (arg: T) => (arg as unknown) as JSX.Element,
    items: data,
    onOrderChange = () => {},
    useExternalDragHandle = false,
  } = props
  const orderItems = (itemA: T, itemB: T) => (itemA.order || 0) - (itemB.order || 0)

  const [safeItems, setSafeItems] = useState([...data].sort(orderItems))
  const [items, setItems] = useState([...data].sort(orderItems))
  const [draggedId, setDraggedId] = useState<string | null>(null)

  useEffect(() => {
    setItems([...data].sort(orderItems))
    setSafeItems([...data].sort(orderItems))
  }, [data])

  const reorderItems = (droppedItemId: string | null, dropzonePosition: number) => {
    const removeUnchangedItems = (item: { oldOrder: number | null; newOrder: number }) =>
      item.oldOrder !== item.newOrder
    const getItemFormWorkingData = (workingData: { item: T }) => workingData.item
    const setTemporaryOrders = (item: T) => {
      if (item.uuid === droppedItemId) {
        item.order = item.order > dropzonePosition ? dropzonePosition - 5 : dropzonePosition + 5
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

    const workingDataList = safeItems.map(setTemporaryOrders).sort(orderItems).map(createWorkingData)
    const itemsForDataBase = workingDataList.filter(removeUnchangedItems).map(getItemFormWorkingData)
    const itemsForState = workingDataList.map(getItemFormWorkingData)

    return {
      itemsForDataBase,
      itemsForState,
    }
  }

  const handleDragStatusChange = (status: string, item: T) => {
    if (status === 'dragstart') {
      setDraggedId(item.uuid)
      return
    }

    if (status === 'dragend') {
      setDraggedId(null)
      return
    }

    if (status === 'canceled') {
      setDraggedId(null)
      setItems(safeItems)
    }
  }

  const handleDragOver = (position: number) => {
    if (position === positionA) {
      return
    }

    positionA = position
    const { itemsForState } = reorderItems(draggedId, position)

    setItems(itemsForState)
  }

  const handleDrop = () => {
    setSafeItems(items)
    onOrderChange(items)
  }

  return (
    <>
      {items.map(item => {
        const itemOrder = item.order || 0

        return (
          <Fragment key={item.uuid}>
            <Zone
              droppable={draggedId != null}
              onDrop={() => handleDrop()}
              onDragOver={() => handleDragOver(itemOrder)}
            >
              <DraggableItem
                itemId={item.uuid}
                useExternalDragHandle={useExternalDragHandle}
                onDragStatusChange={status => handleDragStatusChange(status, item)}
              >
                {renderItem(item, draggedId != null)}
              </DraggableItem>
            </Zone>
          </Fragment>
        )
      })}
    </>
  )
}

export default ReorderableList
