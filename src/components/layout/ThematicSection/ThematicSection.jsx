import React from 'react'
import { css } from '@emotion/core'

const headerStyles = css`
  border-bottom: 1px solid #333;
`

export const ThematicSection = (props) => (
  <div>
    <header css={[headerStyles]}>
      <h2>{props.title}</h2>
    </header>
    <section>
      {props.children}
    </section>
  </div>
)
