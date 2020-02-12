/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Color } from '../../../colors'

export const ObjectivesBadgeIcon: React.FC<ObjectivesBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  }
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
      fill: ${borderColor.toHex() || '#99d1d4'};
    }
    .cls-7 {
      fill: #fff;
    }
    .cls-8 {
      fill: #efefef;
    }
    .cls-9 {
      fill: #706f6f;
    }
    .cls-10 {
      fill: #7b7b7b;
    }
    .cls-11 {
      fill: #00a9ad;
    }
    .cls-12 {
      fill: #00becd;
    }
    .cls-13 {
      fill: #f7ab03;
    }
    .cls-14 {
      fill: #ffce00;
    }
    .cls-15 {
      fill: #e24a4a;
    }
    .cls-16 {
      fill: #ff5d5d;
    }
  `

  return (
    <svg css={svg} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="a">
          <circle className="cls-1" cx="-53.88" cy="34.77" r="27" />
        </clipPath>
      </defs>
      <g className="cls-2">
        <g>
          <g className="cls-3">
            <polygon
              className="cls-4"
              points="-28.11 77.56 5.23 95.12 35.66 28.61 32.27 26.18 3.6 70.65 -28.63 43.1"
            />
            <polygon className="cls-5" points="5.23 95.12 -28.18 68.22 -28.11 77.56" />
            <polygon className="cls-5" points="25.47 36.73 22.56 41.24 29.73 41.57 31.95 36.73" />
          </g>
          <circle className="cls-6" cx="37.25" cy="34.27" r="32.5" />
          <circle className="cls-7" cx="37.25" cy="34.27" r="26.5" />
          <path
            className="cls-7"
            d="M37.1,16.38A17.89,17.89,0,0,0,24.55,47l25.3-25.29A17.84,17.84,0,0,0,37.1,16.38Z"
          />
          <path className="cls-8" d="M24.55,47a17.89,17.89,0,0,0,25.3-25.29Z" />
          <path
            className="cls-9"
            d="M37.1,55.76a.65.65,0,0,1-.65-.64V37.26a.65.65,0,1,1,1.29,0V55.12A.64.64,0,0,1,37.1,55.76Z"
          />
          <path
            className="cls-10"
            d="M37.1,31.93a.65.65,0,0,1-.65-.65V13.42a.65.65,0,0,1,1.29,0V31.28A.65.65,0,0,1,37.1,31.93Z"
          />
          <path className="cls-10" d="M34.11,34.92H16.25a.65.65,0,0,1,0-1.3H34.11a.65.65,0,0,1,0,1.3Z" />
          <path className="cls-9" d="M57.94,34.92H40.08a.65.65,0,0,1,0-1.3H57.94a.65.65,0,1,1,0,1.3Z" />
          <path className="cls-1" d="M31.77,34.27A5.31,5.31,0,0,0,33.33,38l7.53-7.54a5.32,5.32,0,0,0-9.09,3.77Z" />
          <path
            className="cls-1"
            d="M43.72,34.27A6.62,6.62,0,0,1,32.42,39L29.1,42.27a11.31,11.31,0,1,0,16-16l-3.32,3.32A6.62,6.62,0,0,1,43.72,34.27Z"
          />
          <path
            className="cls-1"
            d="M49.7,34.27a12.6,12.6,0,0,1-21.52,8.91l-3.29,3.29A17.26,17.26,0,1,0,49.3,22.07L46,25.36A12.56,12.56,0,0,1,49.7,34.27Z"
          />
          <path className="cls-1" d="M37.1,39.6a5.33,5.33,0,0,0,3.76-9.1L33.33,38A5.33,5.33,0,0,0,37.1,39.6Z" />
          <path
            className="cls-1"
            d="M37.1,17A17.26,17.26,0,0,0,24.89,46.47l3.29-3.29A12.6,12.6,0,1,1,46,25.36l3.29-3.29A17.2,17.2,0,0,0,37.1,17Z"
          />
          <path
            className="cls-1"
            d="M25.78,34.27a11.28,11.28,0,0,0,3.32,8L32.42,39a6.61,6.61,0,1,1,9.35-9.36l3.32-3.32a11.31,11.31,0,0,0-19.31,8Z"
          />
          <path
            className="cls-11"
            d="M50.21,21.15l-.91.92a17.26,17.26,0,1,1-24.41,24.4l-.91.92A18.55,18.55,0,1,0,50.21,21.15Z"
          />
          <path
            className="cls-12"
            d="M19.83,34.27A17.25,17.25,0,0,1,49.3,22.07l.91-.92A18.55,18.55,0,1,0,24,47.39l.91-.92A17.22,17.22,0,0,1,19.83,34.27Z"
          />
          <path
            className="cls-13"
            d="M37.1,46.88A12.61,12.61,0,0,0,46,25.36l-.92.91a11.31,11.31,0,1,1-16,16l-.92.91A12.57,12.57,0,0,0,37.1,46.88Z"
          />
          <path
            className="cls-14"
            d="M25.78,34.27a11.31,11.31,0,0,1,19.31-8l.92-.91A12.6,12.6,0,1,0,28.18,43.18l.92-.91A11.28,11.28,0,0,1,25.78,34.27Z"
          />
          <path
            className="cls-15"
            d="M37.1,40.89a6.61,6.61,0,0,0,4.67-11.3l-.91.91A5.33,5.33,0,1,1,33.33,38l-.91.91A6.57,6.57,0,0,0,37.1,40.89Z"
          />
          <path
            className="cls-16"
            d="M31.77,34.27a5.32,5.32,0,0,1,9.09-3.77l.91-.91A6.62,6.62,0,1,0,32.42,39l.91-.91A5.31,5.31,0,0,1,31.77,34.27Z"
          />
        </g>
      </g>
    </svg>
  )
}

interface ObjectivesBadgeIconProps {
  borderColor: Color
}
