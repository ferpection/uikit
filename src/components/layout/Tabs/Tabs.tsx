/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'

import { defaultTabSyles } from './styles'

export const Tabs: FC<TabsProps> = props => {
  return (
    <div css={[defaultTabSyles]}>
      {props.children}
    </div>
  )
}

export interface TabsProps {

}
