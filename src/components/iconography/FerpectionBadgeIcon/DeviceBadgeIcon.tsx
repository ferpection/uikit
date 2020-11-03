/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { BadgeProps } from './badge-props'

interface DeviceBadgeIconProps extends BadgeProps {}

export const DeviceBadgeIcon: React.FC<DeviceBadgeIconProps> = ({
  className,
  borderColor = {
    toHex: () => {},
  },
}) => {
  const svg = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#99d1d4'};
    }

    .cls-2 {
      fill: #fff;
    }

    .cls-3 {
      fill: #929291;
    }

    .cls-4 {
      fill: #706f6f;
    }

    .cls-5 {
      fill: #00becd;
    }

    .cls-6 {
      fill: #ebebeb;
    }

    .cls-7,
    .cls-9 {
      fill: none;
      stroke-linecap: round;
    }

    .cls-7 {
      stroke: #ebebeb;
      stroke-miterlimit: 10;
      stroke-width: 1.81px;
    }

    .cls-8 {
      fill: #a7a7a7;
    }

    .cls-9 {
      stroke: #706f6f;
      stroke-linejoin: round;
      stroke-width: 0.55px;
    }
  `

  return (
    <svg className={className} css={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.17 69.21">
      <g>
        <circle className="cls-1" cx="37.37" cy="34.47" r="32.5" />
        <circle className="cls-2" cx="37.37" cy="34.47" r="26.5" />
        <path
          className="cls-3"
          d="M47.42,52.1c-3.21-.5-1.78-9.54-1.78-9.54H35.76s1.06,8.46-1.55,9.56a11.37,11.37,0,0,1-3.2-.21v2.16H50.4V51.91a12.05,12.05,0,0,1-3,.19"
        />
        <path
          className="cls-4"
          d="M50.32,51.76c-3,.23-6.27.36-9.62.36-3.12,0-6.13-.11-9-.32a18.32,18.32,0,0,1-3.49-.28v2.63h25V51.52a18.35,18.35,0,0,1-2.86.24"
        />
        <path
          className="cls-4"
          d="M15.75,11.67a1.27,1.27,0,0,0-1.3,1.3V47a1.28,1.28,0,0,0,1.3,1.31h49.9A1.28,1.28,0,0,0,67,47V13a1.28,1.28,0,0,0-1.31-1.3Z"
        />
        <rect className="cls-2" x="16.26" y="13.61" width="48.88" height="32.45" />
        <path
          className="cls-5"
          d="M45.61,26.18A4.81,4.81,0,0,0,48,30.49l-.08,1.05c-4,.32-6.68,2-6.68,4.26v1.88a.4.4,0,0,0,.4.4h7.92V22A4,4,0,0,0,45.61,26.18Z"
        />
        <path
          className="cls-1"
          d="M51.25,31.54l-.14-1.06a4.79,4.79,0,0,0,2.37-4.3A4,4,0,0,0,49.55,22V38.08h7.74a.4.4,0,0,0,.4-.4V35.8C57.69,33.53,55.12,31.84,51.25,31.54Z"
        />
        <rect className="cls-6" x="16.26" y="36.86" width="48.88" height="9.2" />
        <rect className="cls-5" x="16.26" y="13.54" width="48.88" height="4.64" />
        <line className="cls-7" x1="24.18" y1="23.34" x2="35.86" y2="23.33" />
        <line className="cls-7" x1="24.19" y1="26.2" x2="35.86" y2="26.19" />
        <rect className="cls-5" x="36.3" y="39.76" width="9.86" height="2.8" rx="1.24" />
        <rect className="cls-4" x="8.21" y="32" width="16.1" height="29.67" rx="1.99" />
        <rect className="cls-2" x="9.17" y="34.56" width="14.17" height="24.42" />
        <circle className="cls-8" cx="16.26" cy="60.25" r="0.92" />
        <path
          className="cls-5"
          d="M16.51,47.28a2.48,2.48,0,0,0,1.22,2.21l0,.54c-2.06.16-3.43,1-3.43,2.18v1a.21.21,0,0,0,.21.2h4.06V45.11A2,2,0,0,0,16.51,47.28Z"
        />
        <path
          className="cls-1"
          d="M19.41,50l-.08-.55a2.44,2.44,0,0,0,1.22-2.2,2,2,0,0,0-2-2.17v8.27h4a.2.2,0,0,0,.2-.2v-1C22.71,51.05,21.39,50.18,19.41,50Z"
        />
        <rect className="cls-6" x="9.17" y="52.57" width="14.17" height="6.41" />
        <rect className="cls-5" x="9.17" y="34.56" width="14.17" height="3.16" />
        <line className="cls-9" x1="12.3" y1="40.46" x2="20.22" y2="40.45" />
        <line className="cls-9" x1="12.3" y1="42.4" x2="20.22" y2="42.39" />
        <rect className="cls-5" x="11.61" y="54.45" width="9.29" height="2.64" rx="1.17" />
      </g>
    </svg>
  )
}
