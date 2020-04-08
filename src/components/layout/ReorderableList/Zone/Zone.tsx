/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC } from 'react'

import { Dropzone, DropzoneProps } from '../../dnd/Dropzone/Dropzone'

import { dropzone, dropzoneOver, defaultStyle } from './styles'

export const Zone: FC<ZoneProps> = props => {
  const { droppable, ...dropzoneProps } = props

  return (
    <Dropzone {...dropzoneProps}>
      {({ elementIsOver }) => (
        <div css={[defaultStyle, droppable ? dropzone : null, elementIsOver ? dropzoneOver : null]}>
          {props.children}
        </div>
      )}
    </Dropzone>
  )
}

export default Zone

interface ZoneProps {
  droppable: boolean
  onDrop?: DropzoneProps['onDrop']
  onDragOver?: DropzoneProps['onDragOver']
}
