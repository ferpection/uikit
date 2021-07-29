/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface GoalsBadgeIconProps extends BadgeProps {}

export const GoalsBadgeIcon: React.FC<GoalsBadgeIconProps> = ({
  className,
  borderColor = {
    toHex: () => {},
  },
}) => {
  const svg = css`
    .cls-1 {
      fill: none;
    }
    .cls-2 {
      isolation: isolate;
    }
    .cls-3 {
      fill: ${borderColor.toHex() || '#99d1d4'};
    }
    .cls-4 {
      fill: #fff;
    }
    .cls-5 {
      fill: #b35730;
    }
    .cls-11,
    .cls-6 {
      fill: #e6e6e6;
    }
    .cls-13,
    .cls-14,
    .cls-7 {
      fill: #f2f2f2;
    }
    .cls-11,
    .cls-14,
    .cls-8 {
      mix-blend-mode: multiply;
    }
    .cls-9 {
      clip-path: url(#a);
    }
    .cls-10 {
      fill: #24c780;
    }
    .cls-12 {
      fill: #ffd3ba;
    }
    .cls-13 {
      opacity: 0.15;
      mix-blend-mode: difference;
    }
    .cls-15 {
      fill: #fddbbb;
    }
    .cls-16 {
      fill: #424242;
    }
    .cls-17 {
      fill: #555;
    }
    .cls-18 {
      fill: #33607f;
    }
  `

  return (
    <svg className={className} css={svg} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="a">
          <circle className="cls-1" cx="37.37" cy="34.77" r="27" />
        </clipPath>
      </defs>
      <g className="cls-2">
        <g>
          <circle className="cls-3" cx="37.87" cy="34.27" r="32.5" />
          <circle className="cls-4" cx="37.87" cy="34.27" r="26.5" />
          <path
            className="cls-5"
            d="M29.26,24.61H28.7c-.18,0-.33.22-.33.5v4.76c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5V25.11C29.59,24.83,29.44,24.61,29.26,24.61Z"
          />
          <rect className="cls-6" x="29.59" y="25.14" width="9.42" height="4.69" />
          <path
            className="cls-7"
            d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
          />
          <path
            className="cls-4"
            d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
          />
          <rect className="cls-5" x="71.77" y="18.69" width="2.74" height="17.6" rx=".41" />
          <path
            className="cls-5"
            d="M29.26,24.61H28.7c-.18,0-.33.22-.33.5v4.76c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5V25.11C29.59,24.83,29.44,24.61,29.26,24.61Z"
          />
          <rect className="cls-6" x="29.59" y="25.14" width="9.42" height="4.69" />
          <path
            className="cls-7"
            d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
          />
          <path
            className="cls-4"
            d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
          />
          <rect className="cls-5" x="71.77" y="18.69" width="2.74" height="17.6" rx=".41" />
          <path
            className="cls-5"
            d="M29.26,24.61H28.7c-.18,0-.33.22-.33.5v4.76c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5V25.11C29.59,24.83,29.44,24.61,29.26,24.61Z"
          />
          <rect className="cls-6" x="29.59" y="25.14" width="9.42" height="4.69" />
          <path
            className="cls-7"
            d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
          />
          <path
            className="cls-4"
            d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
          />
          <rect className="cls-5" x="71.77" y="18.69" width="2.74" height="17.6" rx=".41" />
          <g className="cls-8">
            <path
              className="cls-7"
              d="M28.37,27.49v2.38c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5v0H39v2.83c0,.28.15.5.33.5H51.05v1.34c0,.27.14.5.33.5H71.77v.78c0,.28.15.5.33.5h2.09c.18,0,.33-.22.33-.5v-8.3Z"
            />
          </g>
          <g className="cls-9">
            <polyline className="cls-10" points="63.97 130.77 62.63 43.1 26.28 39.84 7.57 42.19 -27.17 60.45" />
            <polygon
              className="cls-10"
              points="63.15 77.56 96.48 95.12 126.92 28.61 123.53 26.18 94.85 70.65 62.63 43.1"
            />
            <path className="cls-11" d="m58.87 31.67c-0.92-0.39-2.22 0.62-3 2.26h3.83c0.1-1.1-0.18-1.99-0.83-2.26z" />
            <path
              className="cls-12"
              d="m58.56 35.24c-0.76 1.82-2.17 3-3.14 2.55s-1.14-2.22-0.37-4 2.17-2.95 3.14-2.55 1.14 2.19 0.37 4z"
            />
            <polygon
              className="cls-10"
              points="-22.16 82.46 32.04 115.25 58.79 35.34 54.89 33.53 26.28 90.44 0.35 64.72"
            />
            <polygon className="cls-13" points="0.35 64.72 26.28 90.44 54.89 33.53 56.54 34.3 26.68 97.34" />
            <polygon className="cls-14" points="-22.16 82.46 32.04 115.25 56.38 42.54 58.2 42.7 33.73 120.25" />
            <polygon className="cls-15" points="6.98 23.57 7.57 42.19 26.28 39.84 22.05 21.47" />
            <path
              className="cls-16"
              d="M9.66,25.66l.18,5.64s-1.7-.87-1.91.48c-.29,1.89,1.9,1.14,1.9,1.14a26.53,26.53,0,0,1-2.26,9.27S.68,23.7,6.89,23.37c.73-10.38,17.38.48,19.61-7.6C28.43,22.44,24.53,25.9,9.66,25.66Z"
            />
            <polygon className="cls-4" points="7.57 42.19 19.1 59.38 26.28 39.84" />
            <polygon
              className="cls-17"
              points="18.13 42.32 15.67 42.63 14.92 44.37 16.52 46.34 15.19 53.55 19.1 59.38 21.47 52.92 18.28 46.06 19.42 43.67"
            />
            <polygon className="cls-18" points="19.1 59.38 27.47 49.36 25.62 46.46 28.45 43.71 26.28 39.84" />
            <polygon className="cls-18" points="19.1 59.38 8.51 51.74 9.58 48.47 6.17 46.5 7.57 42.19" />
            <polygon className="cls-14" points="96.48 95.12 63.07 68.22 63.15 77.56" />
          </g>
        </g>
      </g>
    </svg>
  )
}
