import React, { FC, ReactChild } from 'react'
import { useDropzone } from './useDropzone'

export const Dropzone: FC<DropzoneProps> = (props) => {
  const { onDrop = () => {}, children } = props
  const [events, isOver] = useDropzone(onDrop)

  return (
    <div {...events}>
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
