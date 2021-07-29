import React from 'react'
import { css, jsx } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface PostTestBadgeIconProps extends BadgeProps {}

export const PostTestBadgeIcon: React.FC<PostTestBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  ...otherProps
}) => {
  const styles = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#fecfb0'};
    }
    .cls-2 {
      fill: #fff;
    }
    .cls-3 {
      fill: #fec138;
    }
    .cls-4 {
      fill: #fc883a;
    }
    .cls-5 {
      fill: #24d58d;
    }
    .cls-6 {
      fill: none;
      stroke: #fff;
      stroke-miterlimit: 10;
      stroke-width: 2.14px;
    }
    .cls-7 {
      fill: #706f6f;
    }
    .cls-8 {
      fill: #d4a87f;
    }
    .cls-9 {
      fill: #efcaa6;
    }
    .cls-10 {
      fill: #805126;
    }
    .cls-11 {
      fill: #d2948b;
    }
    .cls-12 {
      fill: #542700;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <g>
        <circle className="cls-1" cx="38.2" cy="35.4" r="32.5" />
        <circle className="cls-2" cx="38.2" cy="35.4" r="26.5" />
        <path className="cls-3" d="M54.89,5.91a34,34,0,0,0-33.34,0L38.2,34.77Z" />
        <path className="cls-4" d="M20.93,6.25A33.89,33.89,0,0,0,4.25,35.11H37.58Z" />
        <path className="cls-5" d="M72.15,35.14A33.92,33.92,0,0,0,55.5,6.27L38.82,35.13Z" />
        <path className="cls-2" d="M45.46,22.62A14.45,14.45,0,0,0,23.77,35.13h28.9A14.45,14.45,0,0,0,45.46,22.62Z" />
        <circle className="cls-2" transform="translate(-11.89 18.94) rotate(-45)" cx="16.92" cy="23.82" r="6.53" />
        <path
          className="cls-4"
          d="M18.76,26.45a.17.17,0,0,0,.16-.28,2.7,2.7,0,0,0-4,0,.17.17,0,0,0,.16.28,11.7,11.7,0,0,1,1.85-.14A11.57,11.57,0,0,1,18.76,26.45Z"
        />
        <path className="cls-4" d="M20.59,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,20.59,22.85Z" />
        <path className="cls-4" d="M14.44,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,14.44,22.85Z" />
        <circle className="cls-2" transform="translate(18.08 46.11) rotate(-76.66)" cx="38.2" cy="11.62" r="6.53" />
        <path className="cls-3" d="M41.87,10.65a.59.59,0,0,1-.59.6.6.6,0,1,1,0-1.19A.59.59,0,0,1,41.87,10.65Z" />
        <path className="cls-3" d="M35.72,10.65a.59.59,0,0,1-.59.6.6.6,0,1,1,0-1.19A.59.59,0,0,1,35.72,10.65Z" />
        <path className="cls-3" d="M40.56,13.7H36A.33.33,0,0,1,36,13h4.6a.33.33,0,0,1,0,.66Z" />
        <circle className="cls-2" transform="translate(23.41 76.65) rotate(-77.8)" cx="59.2" cy="23.82" r="6.53" />
        <path
          className="cls-5"
          d="M56.84,25.18c-.16-.05-.31.12-.26.31a2.75,2.75,0,0,0,5.24,0,.23.23,0,0,0-.27-.31,7.28,7.28,0,0,1-2.35.37A7.39,7.39,0,0,1,56.84,25.18Z"
        />
        <path className="cls-5" d="M62.87,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,62.87,22.85Z" />
        <path className="cls-5" d="M56.72,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,56.72,22.85Z" />
        <rect className="cls-2" x="23.77" y="34.77" width="28.89" height="1.05" />
        <line className="cls-6" x1="20.92" x2="38.2" y1="5.62" y2="35.3" />
        <line className="cls-6" x1="55.35" x2="38.07" y1="5.87" y2="35.54" />
        <path
          className="cls-7"
          d="M39.28,37.38a2.35,2.35,0,0,1-2.79-3.79c.76-.56,11.06-6.15,15-8.09a.45.45,0,0,1,.5.73C48.86,29.26,40,36.82,39.28,37.38Z"
        />
        <path className="cls-2" d="M39.17,35.46a1.11,1.11,0,0,1-2.21,0,1.11,1.11,0,1,1,2.21,0Z" />
        <circle className="cls-8" cx="28.42" cy="44.56" r="1.88" />
        <circle className="cls-8" cx="47.98" cy="44.56" r="1.88" />
        <path
          className="cls-9"
          d="m49.05 42c0-4.75-4.8-8.6-10.72-8.6s-10.73 3.88-10.73 8.6a1.23 1.23 0 0 0 0 0.2c0 7.93 4.83 14.36 10.72 14.36s10.62-6.36 10.73-14.2c-0.05-0.08 0-0.2 0-0.36z"
        />
        <path
          className="cls-10"
          d="m27.6 42.88l1.68 1.53v-5.09l13.95-4 4.33 4.55v4.59l1.49-1.46s2.05-12.25-5.82-12.41l-0.77-1.84s-6.26-2.95-12.55 2.76c-2.59 2.36-2.31 6.21-2.31 11.37z"
        />
        <path
          className="cls-11"
          d="M38.35,51.63a4.92,4.92,0,0,0,3.57-2.06.5.5,0,0,0-.1-.7.52.52,0,0,0-.71.11,3.7,3.7,0,0,1-2.76,1.65A3.8,3.8,0,0,1,35.63,49a.5.5,0,0,0-.78.64A5,5,0,0,0,38.35,51.63Z"
        />
        <ellipse className="cls-12" cx="42.77" cy="42.89" rx="1.1" ry=".98" />
        <ellipse className="cls-12" cx="33.8" cy="42.89" rx="1.1" ry=".98" />
      </g>
    </svg>
  )
}
