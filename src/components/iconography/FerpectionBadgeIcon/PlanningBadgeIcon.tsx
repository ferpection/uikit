/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Color } from '../../../colors'

interface PlanningBadgeIconProps {
  borderColor: Color
}

export const PlanningBadgeIcon: React.FC<PlanningBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
}) => {
  const styles = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#99d1d4'};
    }
    .cls-2 {
      fill: #fff;
    }
    .cls-3 {
      fill: #b3b3b3;
    }
    .cls-4 {
      fill: #e2e2e2;
    }
    .cls-5 {
      fill: #ff5d5d;
    }
    .cls-6 {
      fill: #d34646;
    }
    .cls-7,
    .cls-8 {
      fill: none;
      stroke-linecap: round;
    }
    .cls-7 {
      stroke: #bbb;
      stroke-miterlimit: 22.93;
      stroke-width: 3.21px;
    }
    .cls-8 {
      stroke: #24ca82;
      stroke-miterlimit: 10;
      stroke-width: 2.31px;
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle className="cls-1" cx="37.58" cy="34.27" r="32.5" />
        <circle className="cls-2" cx="37.58" cy="34.27" r="26.5" />
        <path
          className="cls-3"
          d="M58,15.78H20.36A3.21,3.21,0,0,0,17.15,19V53a3.21,3.21,0,0,0,3.21,3.21H58A3.21,3.21,0,0,0,61.23,53V19A3.21,3.21,0,0,0,58,15.78Z"
        />
        <path
          className="cls-4"
          d="M15.55,26.29V51.16a3.21,3.21,0,0,0,3.21,3.21H56.41a3.21,3.21,0,0,0,3.21-3.21V26.29Z"
        />
        <path className="cls-5" d="M59.62,17.18A3.21,3.21,0,0,0,56.41,14H18.76a3.21,3.21,0,0,0-3.21,3.21v9.11H59.62Z" />
        <circle className="cls-6" cx="26.33" cy="20.22" r="2.61" />
        <circle className="cls-6" cx="48.84" cy="20.22" r="2.61" />
        <line className="cls-7" x1="26.33" x2="26.33" y1="20.22" y2="12.57" />
        <line className="cls-7" x1="48.84" x2="48.84" y1="20.22" y2="12.57" />
        <rect className="cls-2" x="18.48" y="29.52" width="5.73" height="5.73" />
        <rect className="cls-2" x="26.52" y="29.52" width="5.73" height="5.73" />
        <rect className="cls-2" x="34.67" y="29.52" width="5.73" height="5.73" />
        <rect className="cls-2" x="42.81" y="29.52" width="5.73" height="5.73" />
        <rect className="cls-2" x="50.96" y="29.52" width="5.73" height="5.73" />
        <rect className="cls-2" x="18.48" y="37.46" width="5.73" height="5.73" />
        <rect className="cls-2" x="26.52" y="37.46" width="5.73" height="5.73" />
        <rect className="cls-2" x="34.67" y="37.46" width="5.73" height="5.73" />
        <rect className="cls-2" x="42.81" y="37.46" width="5.73" height="5.73" />
        <rect className="cls-2" x="50.96" y="37.46" width="5.73" height="5.73" />
        <rect className="cls-2" x="18.48" y="45.4" width="5.73" height="5.73" />
        <rect className="cls-2" x="26.62" y="45.4" width="5.73" height="5.73" />
        <rect className="cls-2" x="34.67" y="45.4" width="5.73" height="5.73" />
        <rect className="cls-2" x="42.81" y="45.4" width="5.73" height="5.73" />
        <rect className="cls-2" x="50.96" y="45.4" width="5.73" height="5.73" />
        <line className="cls-8" x1="42.81" x2="48.54" y1="37.46" y2="43.19" />
        <line className="cls-8" x1="48.54" x2="42.81" y1="37.46" y2="43.19" />
      </g>
    </svg>
  )
}
