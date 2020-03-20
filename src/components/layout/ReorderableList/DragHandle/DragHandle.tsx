/** @jsx jsx */
import { FC, useContext } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

import { defaultHandle } from './styles'

export const DragHandle: FC = () => {
  const { enableDragEvent, disableDragEvent } = useContext(DragContext)

  return (
    <span css={[defaultHandle]} draggable={false} onMouseDown={() => enableDragEvent()} onMouseLeave={() => disableDragEvent()} >
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </span>
  )
}

export default DragHandle
