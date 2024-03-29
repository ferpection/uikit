import { FC } from 'react'
import { css } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface IncentiveBadgeIconProps extends BadgeProps {}

export const IncentiveBadgeIcon: FC<IncentiveBadgeIconProps> = ({
  className,
  borderColor = {
    toHex: () => {},
  },
}) => {
  const svg = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#a7eed1'};
    }
    .cls-2 {
      fill: #fff;
    }
    .cls-3 {
      fill: #fec138;
    }
    .cls-4 {
      fill: #f9a819;
    }
    .cls-5 {
      fill: none;
      stroke: #fff;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.41px;
    }
  `
  return (
    <svg className={className} css={svg} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle className="cls-1" cx="37.58" cy="34.6" r="32.5" />
        <circle className="cls-2" cx="37.58" cy="34.6" r="26.5" />
        <path className="cls-3" d="M46.27,19.57a17.17,17.17,0,1,1-21,12.24,17.18,17.18,0,0,1,21-12.24Z" />
        <path
          className="cls-4"
          d="M41.9,19.16v2.66a14.35,14.35,0,0,1,13.88,18,14.35,14.35,0,1,1-13.89-18V19.16m0,0a17,17,0,1,0,4.34.56,17,17,0,0,0-4.34-.56Z"
        />
        <line className="cls-5" x1="33.98" x2="44.99" y1="32.01" y2="34.9" />
        <line className="cls-5" x1="32.28" x2="43.29" y1="35.3" y2="38.2" />
        <path
          className="cls-5"
          d="M45.58,42.94a6.66,6.66,0,0,1-2.42,1.12,5.45,5.45,0,0,1-2.6,0,5.37,5.37,0,0,1-2.27-1.24,6.52,6.52,0,0,1-1.56-2.17,8.36,8.36,0,0,1-.7-2.79,9.56,9.56,0,0,1,.3-3.11,9.11,9.11,0,0,1,1.27-2.85,8.43,8.43,0,0,1,2-2.09A6.66,6.66,0,0,1,42,28.65a5.41,5.41,0,0,1,2.59,0,5.3,5.3,0,0,1,2.28,1.24,6.59,6.59,0,0,1,1.56,2.16"
        />
        <path className="cls-3" d="M29.44,17a17.17,17.17,0,1,1-13.18,20.4A17.18,17.18,0,0,1,29.44,17Z" />
        <path
          className="cls-4"
          d="M33.06,19.46h0a14.43,14.43,0,0,1,14,11.34,14.35,14.35,0,0,1-11,17,14.12,14.12,0,0,1-3,.32A14.4,14.4,0,0,1,19,36.83a14.36,14.36,0,0,1,11-17,14.78,14.78,0,0,1,3-.32m0-2.66A17,17,0,1,0,49.68,30.24,17.05,17.05,0,0,0,33.06,16.8Z"
        />
        <line className="cls-5" x1="24.1" x2="35.23" y1="33.67" y2="31.28" />
        <line className="cls-5" x1="24.07" x2="35.2" y1="37.38" y2="34.99" />
        <path
          className="cls-5"
          d="M39.38,38.19a6.74,6.74,0,0,1-1.66,2.09,5.39,5.39,0,0,1-4.92,1.06,6.52,6.52,0,0,1-2.36-1.23,8.17,8.17,0,0,1-1.89-2.18A9.36,9.36,0,0,1,27.41,35a9.45,9.45,0,0,1-.15-3.12,8.28,8.28,0,0,1,.82-2.76,6.68,6.68,0,0,1,1.65-2.09A5.36,5.36,0,0,1,34.66,26,6.65,6.65,0,0,1,37,27.22"
        />
      </g>
    </svg>
  )
}
