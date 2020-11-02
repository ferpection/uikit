/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { BadgeProps } from './badge-props'

interface ConfigBadgeIconProps extends BadgeProps {}

export const ConfigBadgeIcon: React.FC<ConfigBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  ...otherProps
}) => {
  const svg = css`
    .cls-1 {
      fill: none;
    }
    .cls-2 {
      isolation: isolate;
    }
    .cls-3 {
      clip-path: url(#a);
    }
    .cls-4 {
      fill: #24c780;
    }
    .cls-5 {
      fill: #f2f2f2;
      mix-blend-mode: multiply;
    }
    .cls-6 {
      fill: ${borderColor.toHex() || '#d5bbea'};
    }
    .cls-7 {
      fill: #fff;
    }
    .cls-8 {
      fill: #006875;
    }
    .cls-9 {
      fill: #fec138;
    }
    .cls-10 {
      fill: #24d58d;
    }
  `

  return (
    <svg css={svg} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <defs>
        <clipPath id="a">
          <circle className="cls-1" cx="-53.88" cy="-52.3" r="27" />
        </clipPath>
      </defs>
      <g className="cls-2">
        <g>
          <g className="cls-3">
            <polygon
              className="cls-4"
              points="-28.11 -9.51 5.23 8.05 35.66 -58.46 32.27 -60.89 3.6 -16.42 -28.63 -43.96"
            />
            <polygon className="cls-5" points="5.23 8.05 -28.18 -18.85 -28.11 -9.51" />
          </g>
          <circle className="cls-6" cx="37.58" cy="34.47" r="32.5" />
          <circle className="cls-7" cx="37.58" cy="34.47" r="26.5" />
          <path
            className="cls-8"
            d="M17.42,34.91a9.88,9.88,0,0,0,.51,2l-.05,0-1.81,1.27,1.38,2.4,2.09-.79.05,0a11.12,11.12,0,0,0,1.5,1.49l0,.05-.91,2,2.45,1.42L24,43.05l0,0a11.82,11.82,0,0,0,2.08.58v.05l.24,2.14,2.86.06.34-2.13v-.05a11.36,11.36,0,0,0,2.11-.49l0,.05L33,44.94l2.51-1.32-.82-2,0-.05a10.73,10.73,0,0,0,1.57-1.44l0,0,2.05.87,1.49-2.34-1.76-1.33,0,0a9.75,9.75,0,0,0,.61-2h.06l2.23-.23L41,32.39l-2.23-.32H38.7a9.88,9.88,0,0,0-.51-2l.05,0,1.82-1.27-1.38-2.4-2.09.79-.05,0A10.64,10.64,0,0,0,35,25.68l0-.05.92-2-2.45-1.42-1.4,1.67,0,0A11.82,11.82,0,0,0,30,23.39v-.05l-.23-2.14-2.87-.06-.33,2.12v.06a11.26,11.26,0,0,0-2.1.49l0,0L23.12,22,20.6,23.35l.82,2,0,.05a10.66,10.66,0,0,0-1.56,1.44l-.06,0-2-.87-1.49,2.34,1.76,1.33.05,0a10.42,10.42,0,0,0-.61,2h0l-2.24.23-.06,2.73,2.22.33Zm4.73-1.55a5.92,5.92,0,1,1,5.78,5.77A5.8,5.8,0,0,1,22.15,33.36Z"
          />
          <path
            className="cls-9"
            d="m41.09 43a7.16 7.16 0 0 0 0.39 1.53l-1.38 1 1 1.83 1.59-0.6a7.68 7.68 0 0 0 1.14 1.14l-0.69 1.49 1.86 1.07 1.07-1.28a9.33 9.33 0 0 0 1.59 0.44l0.18 1.63h2.18l0.26-1.61a8.47 8.47 0 0 0 1.6 -0.37l1 1.32 1.91-1-0.62-1.52a8.87 8.87 0 0 0 1.25 -1.07l1.56 0.66 1.14-1.78-1.34-1a7.85 7.85 0 0 0 0.46 -1.52l1.7-0.17v-2.08l-1.7-0.25a7.8 7.8 0 0 0 -0.39 -1.53l1.39-1-1-1.83-1.59 0.6a7.75 7.75 0 0 0 -1.15 -1.1l0.69-1.49-1.86-1.08-1.07 1.27a7.8 7.8 0 0 0 -1.59 -0.44l-0.18-1.63h-2.18l-0.26 1.62a8.48 8.48 0 0 0 -1.6 0.38l-1-1.32-1.92 1 0.63 1.52a8.8 8.8 0 0 0 -1.16 1l-1.56-0.66-1.14 1.78 1.34 1a7.13 7.13 0 0 0 -0.46 1.51l-1.7 0.18v2.08l1.52 0.28zm3.6-1.18a4.51 4.51 0 1 1 4.41 4.38 4.42 4.42 0 0 1 -4.41 -4.39z"
          />
          <path
            className="cls-10"
            d="m40.73 26.13a6.17 6.17 0 0 0 0.33 1.28l-1.16 0.8 0.88 1.53 1.33-0.5a6.1 6.1 0 0 0 1 1l-0.58 1.25 1.56 0.9 0.89-1.06a7.23 7.23 0 0 0 1.33 0.36l0.1 1.31h1.82l0.21-1.34a7.46 7.46 0 0 0 1.34 -0.31l0.84 1.1 1.6-0.84-0.53-1.27a6.56 6.56 0 0 0 1 -0.91l1.31 0.57 1-1.45-1.11-0.85a6.2 6.2 0 0 0 0.38 -1.27l1.42-0.14v-1.74l-1.41-0.2a6.87 6.87 0 0 0 -0.33 -1.28l1.16-0.8-0.88-1.53-1.33 0.5a6.1 6.1 0 0 0 -1 -0.95l0.63-1.29-1.53-0.91-0.89 1.06a8.14 8.14 0 0 0 -1.33 -0.37l-0.16-1.36h-1.82l-0.21 1.35a7.46 7.46 0 0 0 -1.34 0.31l-0.9-1.08-1.6 0.83 0.53 1.28a6.56 6.56 0 0 0 -1 0.91l-1.28-0.59-1 1.48 1.11 0.85a6 6 0 0 0 -0.38 1.27l-1.42 0.15v1.74l1.41 0.2zm3-1a3.76 3.76 0 1 1 3.67 3.67 3.68 3.68 0 0 1 -3.66 -3.65z"
          />
        </g>
      </g>
    </svg>
  )
}
