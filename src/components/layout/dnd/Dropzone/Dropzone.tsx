import { PropsWithChildren, ReactChild } from 'react'

import { useDropzone } from './useDropzone'
import { container } from './styles'

export interface RenderFunctionOptions {
  elementIsOver: boolean
}

export interface DropzoneProps {
  onDrop?: (itemId: string | null, dataTransferObject: DataTransfer) => void
  onDragOver?: (dataTransferObject: DataTransfer) => void
  children: (options: RenderFunctionOptions) => ReactChild
}

export function Dropzone(props: DropzoneProps) {
  const { children, onDragOver = () => {}, onDrop = () => {} } = props
  const [events, isOver] = useDropzone({ onDragOver, onDrop })

  return (
    <div css={[container]} {...events}>
      {children({
        elementIsOver: isOver,
      })}
    </div>
  )
}
