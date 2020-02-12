/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Color } from '../../../colors'

export const TargetBadgeIcon: React.FC<TargetBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  }
}) => {
  const styles = css`
    .cls-1,
    .cls-13 {
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
    .cls-5,
    .cls-6 {
      fill: #f2f2f2;
    }
    .cls-5 {
      opacity: 0.15;
      mix-blend-mode: difference;
    }
    .cls-6 {
      mix-blend-mode: multiply;
    }
    .cls-7 {
      fill: ${borderColor.toHex() || '#d5bbea'};
    }
    .cls-8 {
      fill: #fff;
    }
    .cls-9 {
      fill: #00becd;
    }
    .cls-10 {
      fill: #ff5d5d;
    }
    .cls-11 {
      fill: #ffce00;
    }
    .cls-12 {
      fill: #e24a4a;
    }
    .cls-13 {
      stroke: #3c3c3b;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 2.62px;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="a">
          <circle className="cls-1" cx="37.37" cy="-52.3" r="27" />
        </clipPath>
      </defs>
      <g className="cls-2">
        <g>
          <g className="cls-3">
            <polyline className="cls-4" points="63.97 43.7 62.63 -43.96 26.28 -47.23 7.57 -44.88 -27.17 -26.62" />
            <polygon
              className="cls-4"
              points="63.15 -9.51 96.48 8.05 126.92 -58.46 123.53 -60.89 94.85 -16.42 62.63 -43.96"
            />
            <polygon
              className="cls-4"
              points="-22.16 -4.61 32.04 28.18 58.79 -51.73 54.89 -53.54 26.28 3.37 0.35 -22.35"
            />
            <polygon className="cls-5" points="0.35 -22.35 26.28 3.37 54.89 -53.54 56.54 -52.77 26.68 10.27" />
            <polygon className="cls-6" points="-22.16 -4.61 32.04 28.18 56.38 -44.52 58.2 -44.37 33.73 33.18" />
            <polygon className="cls-6" points="96.48 8.05 63.07 -18.85 63.15 -9.51" />
          </g>
          <circle className="cls-7" cx="37.37" cy="34.47" r="32.5" />
          <circle className="cls-8" cx="37.37" cy="34.47" r="26.5" />
          <path
            className="cls-9"
            d="M21.26,34A16.45,16.45,0,0,1,49.34,22.34l3.88-3.87a21.93,21.93,0,1,0-31,31l3.87-3.88A16.43,16.43,0,0,1,21.26,34Z"
          />
          <path
            className="cls-9"
            d="M49.34,22.34A16.45,16.45,0,1,1,26.07,45.61L22.2,49.49a21.93,21.93,0,0,0,31-31Z"
          />
          <path
            className="cls-10"
            d="M48.68,34A11,11,0,0,1,30,41.73l-3.88,3.88A16.45,16.45,0,1,0,49.34,22.34l-3.88,3.88A10.94,10.94,0,0,1,48.68,34Z"
          />
          <path
            className="cls-10"
            d="M21.26,34a16.43,16.43,0,0,0,4.81,11.63L30,41.73A11,11,0,0,1,45.46,26.22l3.88-3.88A16.45,16.45,0,0,0,21.26,34Z"
          />
          <path
            className="cls-11"
            d="M32.22,34a5.49,5.49,0,0,1,9.37-3.88l3.87-3.88A11,11,0,0,0,30,41.73l3.88-3.88A5.47,5.47,0,0,1,32.22,34Z"
          />
          <path
            className="cls-11"
            d="M48.68,34a10.94,10.94,0,0,0-3.22-7.76L41.59,30.1a5.48,5.48,0,1,1-7.76,7.75L30,41.73A11,11,0,0,0,48.68,34Z"
          />
          <path
            className="cls-8"
            d="m37.71 39.46a5.49 5.49 0 0 0 3.88 -9.36l-7.76 7.75a5.43 5.43 0 0 0 3.88 1.61z"
          />
          <path className="cls-8" d="M32.22,34a5.47,5.47,0,0,0,1.61,3.87l7.76-7.75A5.49,5.49,0,0,0,32.22,34Z" />
          <polygon className="cls-10" points="53.15 16.74 52.1 13.59 57.72 7.97 58.77 11.12" />
          <polygon className="cls-12" points="54.97 18.55 58.12 19.6 63.74 13.98 60.59 12.93" />
          <line className="cls-13" x1="39.05" x2="61.17" y1="32.63" y2="10.52" />
        </g>
      </g>
    </svg>
  )
}

interface TargetBadgeIconProps {
  borderColor: Color
}
