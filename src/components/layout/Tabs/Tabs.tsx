/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'

import { defaultTabSyles } from './styles'

export const Tabs: FC<TabsProps> = () => {
  return (
    <div css={[defaultTabSyles]}>
      <a href="https://google.com">Tab 1</a>
      <a href="https://google.com">Tab 2</a>
      <a href="https://google.com">Tab 3</a>
    </div>
  )
}

export interface TabsProps {

}
