/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx } from '@emotion/react'

import { BadgeProps } from './badge-props'

interface GraphBadgeIconProps extends BadgeProps {}

export const GraphBadgeIcon: React.FC<GraphBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  ...otherProps
}) => {
  const styles = css`
    .cls-1 {
      fill: ${borderColor.toHex() || '#d5bbea'};
    }

    .cls-2 {
      fill: #fff;
    }

    .cls-3 {
      fill: #00becd;
    }

    .cls-4 {
      fill: #24d58d;
    }

    .cls-5 {
      fill: #d61d73;
    }

    .cls-6 {
      fill: #fec138;
    }

    .cls-7 {
      fill: #fc883a;
    }

    .cls-8 {
      fill: #ed4a4a;
    }
  `

  return (
    <svg xmlns="http://www.w3.org/2000/svg" css={styles} viewBox="0 0 75.17 69.21" {...otherProps}>
      <g id="Calque_1" data-name="Calque 1">
        <circle className="cls-1" cx="37.37" cy="34.47" r="32.5" />
        <circle className="cls-2" cx="37.37" cy="34.47" r="26.5" />
        <path className="cls-3" d="M51.2,20.13a19.53,19.53,0,0,0-13.83-5.72V34Z" />
        <path className="cls-4" d="M56.93,34A19.5,19.5,0,0,0,51.2,20.13L37.37,34Z" />
        <path className="cls-5" d="M37.37,14.41A19.56,19.56,0,0,0,17.81,34H37.37Z" />
        <path className="cls-6" d="M37.37,34,51.2,47.8A19.5,19.5,0,0,0,56.93,34Z" />
        <path className="cls-7" d="M37.37,53.52A19.49,19.49,0,0,0,51.2,47.8L37.37,34Z" />
        <path className="cls-8" d="M17.81,34A19.55,19.55,0,0,0,37.37,53.52V34Z" />
        <circle className="cls-2" cx="37.37" cy="33.97" r="12.22" />
      </g>
    </svg>
  )
}
