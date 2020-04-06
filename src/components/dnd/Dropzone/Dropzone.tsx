import React, { FC, DragEventHandler, useState, ReactChild } from 'react'

export const Dropzone: FC<DropzoneProps> = (props) => {
  const { onDrop = () => {}, children } = props
  const [isOver, setOver] = useState(false)

  const handleDragOver: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (['move', 'copyMove', 'all', 'linkMove'].includes(event.dataTransfer.effectAllowed)) {
      event.dataTransfer.dropEffect = 'move'
    }

    if (isOver === false) {
      setOver(true)
    }
  }

  const handleragEnter: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (isOver === false) {
      setOver(true)
    }
  }

  const handleDragLeave: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    event.dataTransfer.dropEffect = 'none'

    if (isOver === true) {
      setOver(false)
    }
  }

  const handleDrop: DragEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (isOver === true) {
      setOver(false)
    }
    onDrop(event.dataTransfer)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children({
        elementIsOver: isOver,
      })}
    </div>
  )
}

export interface DropzoneProps {
  onDrop?: (DataTransfer: DataTransfer) => void,
  children: (options: RenderFunctionOptions) => ReactChild,
}

export interface RenderFunctionOptions {
  elementIsOver: boolean,
}
