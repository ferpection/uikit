/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface TestBadgeIconProps extends BadgeProps {}

export const TestBadgeIcon: React.FC<TestBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  ...otherProps
}) => {
  const styles = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#fecfb0'};
    }
    .cls-2,
    .cls-6 {
      fill: #fff;
    }
    .cls-3 {
      fill: #24d58d;
    }
    .cls-4,
    .cls-7,
    .cls-9 {
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .cls-4 {
      stroke: #b5b5b5;
      stroke-width: 1.53px;
    }
    .cls-5 {
      fill: #fec138;
    }
    .cls-6,
    .cls-8 {
      opacity: 0.82;
    }
    .cls-7 {
      stroke: #fec138;
    }
    .cls-7,
    .cls-9 {
      stroke-width: 0.51px;
    }
    .cls-9 {
      stroke: #24d58d;
    }
    .cls-10 {
      fill: #d4a87f;
    }
    .cls-11 {
      fill: #efcaa6;
    }
    .cls-12 {
      fill: #805126;
    }
    .cls-13 {
      fill: #d2948b;
    }
    .cls-14 {
      fill: #542700;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <g>
        <circle className="cls-1" cx="37.94" cy="34.03" r="32.5" />
        <circle className="cls-2" cx="37.94" cy="34.03" r="26.5" />
        <path
          className="cls-3"
          d="M30.92,33.5V26.29L26.7,22.08a.45.45,0,0,1-.09-.48.43.43,0,0,1,.4-.26h3.91v-.77a2,2,0,0,1,2-2H70a2,2,0,0,1,2,2V33.5a2,2,0,0,1-2,2H33A2,2,0,0,1,30.92,33.5Z"
        />
        <line className="cls-4" x1="47.05" x2="59.15" y1="24.63" y2="24.63" />
        <line className="cls-4" x1="47.05" x2="59.15" y1="27.38" y2="27.38" />
        <line className="cls-4" x1="47.05" x2="54.14" y1="30.13" y2="30.13" />
        <rect className="cls-2" x="61.36" y="23.25" width="6.95" height="8.26" />
        <path
          className="cls-5"
          d="M30.92,52.8V45.6L26.7,41.38a.43.43,0,0,1-.09-.47.44.44,0,0,1,.4-.27h3.91v-.76a2,2,0,0,1,2-2.05H70a2,2,0,0,1,2,2.05V52.8a2,2,0,0,1-2,2.05H33A2,2,0,0,1,30.92,52.8Z"
        />
        <rect className="cls-2" x="61.36" y="42.56" width="6.95" height="8.26" />
        <circle className="cls-6" cx="39.19" cy="46.34" r="5.65" />
        <path className="cls-7" d="M38,47.06H36.82a.52.52,0,0,1-.52-.53V45a.52.52,0,0,1,.52-.53h1" />
        <path className="cls-5" d="M37.09,45a.26.26,0,1,0,.26.26.27.27,0,0,0-.26-.26Z" />
        <path
          className="cls-7"
          d="M41.77,46.53a.78.78,0,0,0,.14-.42.66.66,0,0,0-.22-.49.54.54,0,0,0,.08-.28.63.63,0,0,0-.27-.52,1.64,1.64,0,0,0,0-.23c0-.48-.3-.68-.76-.68h-.52a4.23,4.23,0,0,0-1.41.3,3.51,3.51,0,0,1-.83.22h-.13v2.63H38c.33,0,.82.7,1,.94s.2.25.32.37c.4.42.26,1.05.52,1.31.56,0,.66-.31.66-.79s-.4-.83-.4-1.31h1.45a.54.54,0,0,0,.52-.52C42.07,46.91,42,46.54,41.77,46.53Z"
        />
        <g className="cls-8">
          <circle className="cls-2" cx="39.19" cy="27.03" r="5.66" />
        </g>
        <path className="cls-9" d="M38,26.31H36.82a.53.53,0,0,0-.53.53v1.59a.52.52,0,0,0,.53.52h1" />
        <path className="cls-3" d="M37.08,27.9a.27.27,0,0,0,0,.53.27.27,0,1,0,0-.53Z" />
        <path
          className="cls-9"
          d="M41.77,26.84a.71.71,0,0,1,.14.42.64.64,0,0,1-.21.49.59.59,0,0,1,.07.29.58.58,0,0,1-.27.51.93.93,0,0,1,0,.23c0,.48-.3.69-.76.69h-.52a4.23,4.23,0,0,1-1.41-.3,3.11,3.11,0,0,0-.83-.23h-.13V26.31H38c.33,0,.82-.7,1-.94s.2-.25.32-.37c.4-.42.26-1.05.52-1.31.57,0,.66.3.66.78s-.39.84-.39,1.32h1.44a.55.55,0,0,1,.53.52C42.08,26.47,42,26.84,41.77,26.84Z"
        />
        <line className="cls-4" x1="47.05" x2="59.15" y1="44.1" y2="44.1" />
        <line className="cls-4" x1="47.05" x2="59.15" y1="46.86" y2="46.86" />
        <line className="cls-4" x1="47.05" x2="54.14" y1="49.61" y2="49.61" />
        <circle className="cls-10" cx="4.99" cy="34.19" r="1.88" />
        <circle className="cls-10" cx="24.56" cy="34.19" r="1.88" />
        <path
          className="cls-11"
          d="m25.62 31.66c0-4.75-4.8-8.61-10.72-8.61s-10.72 3.86-10.72 8.61v0.2c0.03 7.92 4.82 14.35 10.72 14.35s10.61-6.36 10.72-14.21c-0.02-0.1 0-0.22 0-0.34z"
        />
        <path
          className="cls-12"
          d="M4.17,32.5,5.85,34V28.94l14-4,4.33,4.54V34l1.49-1.39s2.05-12.25-5.82-12.4L19,18.39s-6.26-3-12.55,2.76C3.9,23.5,4.17,27.34,4.17,32.5Z"
        />
        <path
          className="cls-13"
          d="M14.92,41.25a5,5,0,0,0,3.58-2,.51.51,0,0,0-.11-.7.5.5,0,0,0-.7.1,3.69,3.69,0,0,1-2.77,1.65,3.83,3.83,0,0,1-2.72-1.59.5.5,0,0,0-.71-.07.5.5,0,0,0-.07.7A5,5,0,0,0,14.92,41.25Z"
        />
        <ellipse className="cls-14" cx="19.34" cy="32.52" rx="1.1" ry=".98" />
        <ellipse className="cls-14" cx="10.37" cy="32.52" rx="1.1" ry=".98" />
      </g>
    </svg>
  )
}
