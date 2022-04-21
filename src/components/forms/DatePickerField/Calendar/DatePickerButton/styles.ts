import { css } from '@emotion/react'

const buttonWidth = 40

export const cicleButton = css`
  border-radius: 50%;
  height: ${buttonWidth}px;
  width: ${buttonWidth}px;

  @media (max-width: 400px) {
    height: ${buttonWidth / 1.3}px;
    width: ${buttonWidth / 1.3}px;
  }
`
