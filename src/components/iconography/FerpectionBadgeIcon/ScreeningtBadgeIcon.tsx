/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { BadgeProps } from './badge-props'

interface ScreeningBadgeIconProps extends BadgeProps {}

export const ScreeningBadgeIcon: React.FC<ScreeningBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  ...otherProps
}) => {
  const styles = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#d5bbea'};
    }
    .cls-2,
    .cls-8 {
      fill: #fff;
    }
    .cls-3 {
      fill: #9654cb;
    }
    .cls-4 {
      fill: #ab76d5;
    }
    .cls-5 {
      fill: #fec138;
    }
    .cls-6 {
      fill: none;
      stroke: #fff;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 1.41px;
    }
    .cls-7 {
      fill: #24d58d;
    }
    .cls-8 {
      fill-rule: evenodd;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <g>
        <circle className="cls-1" cx="38.2" cy="34.47" r="32.5" />
        <circle className="cls-2" cx="38.2" cy="34.47" r="26.5" />
        <path
          className="cls-3"
          d="M44.76,22.87a7.81,7.81,0,0,0,3.89,7l-.14,1.72c-6.55.52-10.91,3.28-10.91,7v3.06a.65.65,0,0,0,.65.66H51.19V16C47.64,16,44.76,18.65,44.76,22.87Z"
        />
        <path
          className="cls-4"
          d="M54,31.63l-.23-1.74a7.81,7.81,0,0,0,3.86-7c0-4.22-2.88-6.9-6.42-6.9V42.32H63.85a.65.65,0,0,0,.65-.66V38.6C64.5,34.88,60.29,32.12,54,31.63Z"
        />
        <circle className="cls-5" cx="50.75" cy="44.42" r="7.55" />
        <line className="cls-6" x1="47.44" x2="54.04" y1="41.12" y2="47.72" />
        <line className="cls-6" x1="47.44" x2="54.04" y1="47.72" y2="41.12" />
        <path
          className="cls-3"
          d="M20,22.87a7.82,7.82,0,0,0,3.88,7l-.13,1.72c-6.55.52-10.91,3.28-10.91,7v3.06a.65.65,0,0,0,.65.66H26.46V16C22.92,16,20,18.65,20,22.87Z"
        />
        <path
          className="cls-4"
          d="m29.25 31.63-0.25-1.74a7.81 7.81 0 0 0 3.86 -7c0-4.22-2.88-6.9-6.43-6.9v26.33h12.7a0.65 0.65 0 0 0 0.65 -0.66v-3.06c0-3.72-4.21-6.48-10.53-6.97z"
        />
        <circle className="cls-7" cx="26.56" cy="44.21" r="7.55" />
        <path
          className="cls-8"
          d="M30.05,41.54,26,47.7a.79.79,0,0,1-.64.36h0a.82.82,0,0,1-.64-.3l-2.06-2.6a.74.74,0,0,1,.15-1.07.84.84,0,0,1,1.13.15L25.28,46l3.41-5.22a.83.83,0,0,1,1.11-.25A.75.75,0,0,1,30.05,41.54Z"
        />
      </g>
    </svg>
  )
}
