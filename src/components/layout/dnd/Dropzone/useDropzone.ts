import { useState, DragEventHandler } from 'react'

export function useDropzone({ onDrop: onDropCallback, onDragOver: onDragOverCallback }: UseDropzoneOptions): [DropzoneProps, boolean] {
  const [draggableIsOver, setOverState] = useState(false)

  const handleDragOver: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (['move', 'copyMove', 'all', 'linkMove'].includes(event.dataTransfer.effectAllowed)) {
      event.dataTransfer.dropEffect = 'move'
    }

    if (draggableIsOver === false) {
      setOverState(true)
    }

    onDragOverCallback(event.dataTransfer)
  }

  const handleDragEnter: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (draggableIsOver === false) {
      setOverState(true)
    }
  }

  const handleDragLeave: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    event.dataTransfer.dropEffect = 'none'

    if (draggableIsOver === true) {
      setOverState(false)
    }
  }

  const handleDrop: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (draggableIsOver === true) {
      setOverState(false)
    }

    let uuid = null
    if (event.dataTransfer.types.includes('application/uuid')) {
      uuid = event.dataTransfer.getData('application/uuid')
    }

    onDropCallback(uuid, event.dataTransfer)
  }

  return [
    {
      onDragOver: handleDragOver,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
    draggableIsOver,
  ]
}

export interface UseDropzoneOptions {
  onDrop(itemId: string | null, dataTranfertObject: DataTransfer): void
  onDragOver(dataTranfertObject: DataTransfer): void
}

export interface DropzoneProps {
  onDragEnter: DragEventHandler
  onDragOver: DragEventHandler
  onDragLeave: DragEventHandler
  onDrop: DragEventHandler
}
