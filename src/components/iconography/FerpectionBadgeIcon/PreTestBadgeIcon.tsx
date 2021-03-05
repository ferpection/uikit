/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface PreTestBadgeIconProps extends BadgeProps {}

export const PreTestBadgeIcon: React.FC<PreTestBadgeIconProps> = ({
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
      fill: #9654cb;
    }
    .cls-4 {
      fill: #d4a87f;
    }
    .cls-5 {
      fill: #efcaa6;
    }
    .cls-6 {
      fill: #805126;
    }
    .cls-7 {
      fill: #d2948b;
    }
    .cls-8 {
      fill: #542700;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <g>
        <circle className="cls-1" cx="37.58" cy="34.03" r="32.5" />
        <circle className="cls-2" cx="37.58" cy="34.03" r="26.5" />
        <path
          className="cls-3"
          d="M29.08,42.55V16.43a4.64,4.64,0,0,1,4.64-4.64H55.57a4.64,4.64,0,0,1,4.64,4.64V42.55a4.65,4.65,0,0,1-4.64,4.64H53.83v8.87a1,1,0,0,1-1.69.7l-9.57-9.57H33.72A4.65,4.65,0,0,1,29.08,42.55Z"
        />
        <path
          className="cls-2"
          d="M44.65,34.76A1.81,1.81,0,0,1,42.84,33v-2a1.81,1.81,0,0,1,.53-1.28c2.09-2.07,4-4.75,4-5.61v-.29a2.56,2.56,0,0,0-2.56-2.56h-.28a2.57,2.57,0,0,0-2.57,2.56,1.81,1.81,0,1,1-3.61,0,6.18,6.18,0,0,1,6.18-6.17h.28A6.18,6.18,0,0,1,51,23.74V24c0,2.58-3,6-4.51,7.62V33A1.81,1.81,0,0,1,44.65,34.76Z"
        />
        <path className="cls-2" d="M46.52,39.88A1.88,1.88,0,1,1,44.65,38,1.87,1.87,0,0,1,46.52,39.88Z" />
        <circle className="cls-4" cx="16.64" cy="39.19" r="1.88" />
        <circle className="cls-4" cx="36.2" cy="39.19" r="1.88" />
        <path
          className="cls-5"
          d="m37.27 36.66c0-4.75-4.8-8.61-10.72-8.61s-10.72 3.86-10.72 8.61v0.2c0 7.93 4.83 14.36 10.72 14.36s10.61-6.37 10.72-14.22c-0.02-0.1 0-0.22 0-0.34z"
        />
        <path
          className="cls-6"
          d="M15.82,37.5,17.5,39V33.94l14-4,4.33,4.54V39l1.49-1.39s2-12.25-5.82-12.4l-.77-1.85s-6.26-2.95-12.55,2.76C15.54,28.5,15.82,32.34,15.82,37.5Z"
        />
        <path
          className="cls-7"
          d="M26.57,46.25a5,5,0,0,0,3.58-2,.51.51,0,0,0-.11-.7.5.5,0,0,0-.7.1,3.69,3.69,0,0,1-2.77,1.65,3.83,3.83,0,0,1-2.72-1.59.5.5,0,0,0-.71-.07.5.5,0,0,0-.07.7A5,5,0,0,0,26.57,46.25Z"
        />
        <ellipse className="cls-8" cx="30.99" cy="37.52" rx="1.1" ry=".98" />
        <ellipse className="cls-8" cx="22.02" cy="37.52" rx="1.1" ry=".98" />
      </g>
    </svg>
  )
}
