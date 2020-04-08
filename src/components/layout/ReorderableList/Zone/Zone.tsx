/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC } from 'react'

import { Dropzone, DropzoneProps } from '../../dnd/Dropzone/Dropzone'

import { dropzone, dropzoneOver } from './styles'

export const Zone: FC<ZoneProps> = props => {
  const { onDrop = () => {} } = props

  return (
    <Dropzone onDrop={onDrop}>
      {({ elementIsOver }) => (
        <div css={[dropzone, elementIsOver ? dropzoneOver : null]} >
          {props.children}
        </div>
      )}
    </Dropzone>
  )
}

export default Zone

interface ZoneProps {
  onDrop?: DropzoneProps['onDrop']
}
