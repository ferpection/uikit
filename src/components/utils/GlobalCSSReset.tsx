import { Global, css } from '@emotion/react'

export function GlobalCSSReset() {
  return (
    <Global
      styles={css`
        * {
        }
      `}
    />
  )
}
