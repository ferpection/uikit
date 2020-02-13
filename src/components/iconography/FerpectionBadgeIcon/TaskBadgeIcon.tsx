/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Color } from '../../../colors'

export const TaskBadgeIcon: React.FC<TaskBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
}) => {
  const styles = css`
    .cls-1 {
      fill: none;
    }
    .cls-2 {
      fill: ${borderColor.toHex() || '#99d1d4'};
    }
    .cls-13,
    .cls-3 {
      fill: #fff;
    }
    .cls-4 {
      fill: #decbb1;
    }
    .cls-5 {
      fill: #f7cda1;
    }
    .cls-6 {
      fill: #c19578;
    }
    .cls-7 {
      clip-path: url(#d);
    }
    .cls-8 {
      fill: #231f20;
    }
    .cls-13,
    .cls-8 {
      opacity: 0.1;
    }
    .cls-9 {
      clip-path: url(#c);
    }
    .cls-10 {
      fill: #008d94;
    }
    .cls-11 {
      clip-path: url(#b);
    }
    .cls-12 {
      fill: #006a6f;
    }
    .cls-14 {
      clip-path: url(#a);
    }
  `

  return (
    <svg css={styles} viewBox="0 0 75.17 69.21" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="d">
          <path
            className="cls-1"
            d="M49.58,26.71c-.89.13-8.07,0-8.3.25s-3.51,5.19-3.51,5.19S26.29,42.65,24.72,44.43c-.95,1.07.59,4.14,2.52,2.47s4.75-4.25,5.25-4.75,1,0,.53.36a70.07,70.07,0,0,0-5.36,4.85c-1.28,1.46,1.35,4.12,2.69,2.87s5.74-5.35,6-5.55.72.12.42.39-4.4,3.8-5.38,5,1.2,3.46,2.92,2c1.16-1,4.74-4.68,5-4.94s.73.15.33.49S36.92,50.24,36,51.31s.73,3.16,2.37,1.74S54.11,39.64,55,36.61c.22-.77,1.52-1.52,1.52-1.52l-4.85-9.48A5.84,5.84,0,0,1,49.58,26.71Z"
          />
        </clipPath>
        <clipPath id="c">
          <path
            className="cls-1"
            d="M23.17,25.93l2.19,1.32A33.41,33.41,0,0,1,36,26c4.44.3,5.26,1,5.26,1A12.32,12.32,0,0,1,44.9,30.5c.38.67.15,2.39.78,3.84,1,2.23,1,3.81-.38,4.42-1.95.85-4.84-1.95-4.52-5.16a5.92,5.92,0,0,1-3-1.45C34.49,35.27,26.4,42.74,26.4,42.74a36.2,36.2,0,0,1-6.72-7l-1.52-1Z"
          />
        </clipPath>
        <clipPath id="b">
          <polygon className="cls-1" points="25.55 25.61 19.23 36.66 16.83 35.27 22.85 24.36" />
        </clipPath>
        <clipPath id="a">
          <polygon className="cls-1" points="49.98 25.31 56.29 36.37 59.06 34.64 53 23.78" />
        </clipPath>
      </defs>
      <g>
        <circle className="cls-2" cx="37.31" cy="34.27" r="32.5" />
        <circle className="cls-3" cx="37.31" cy="34.27" r="26.5" />
        <path className="cls-4" d="M26.86,42.78s10.8,8.08,12.92,6.83a8,8,0,0,0,3-4.06l-15.25-6Z" />
        <path
          className="cls-5"
          d="M49.58,26.71c-.89.13-8.07,0-8.3.25s-3.51,5.19-3.51,5.19S26.29,42.65,24.72,44.43c-.95,1.07.59,4.14,2.52,2.47s4.75-4.25,5.25-4.75,1,0,.53.36a70.07,70.07,0,0,0-5.36,4.85c-1.28,1.46,1.35,4.12,2.69,2.87s5.74-5.35,6-5.55.72.12.42.39-4.4,3.8-5.38,5,1.2,3.46,2.92,2c1.16-1,4.74-4.68,5-4.94s.73.15.33.49S36.92,50.24,36,51.31s.73,3.16,2.37,1.74S54.11,39.64,55,36.61c.22-.77,1.52-1.52,1.52-1.52l-4.85-9.48A5.84,5.84,0,0,1,49.58,26.71Z"
        />
        <path
          className="cls-4"
          d="M51.06,40c-1.82-.72-3,1.58-2.49,2.57a3.74,3.74,0,0,0,2.25,1.8c1,.28,2.48-1.53,2.13-2.58A3.32,3.32,0,0,0,51.06,40Z"
        />
        <path
          className="cls-6"
          d="M44.49,46.11c-1.82-.71-3,1.58-2.49,2.57a5.19,5.19,0,0,0,2.67,2.15c1,.28,2.49-1.53,2.13-2.58A4.76,4.76,0,0,0,44.49,46.11Z"
        />
        <path
          className="cls-4"
          d="M41.42,49.21c-1.5-.59-2.48,1.31-2.05,2.12a4.24,4.24,0,0,0,2.2,1.77c.86.23,2-1.26,1.75-2.13A4,4,0,0,0,41.42,49.21Z"
        />
        <path
          className="cls-4"
          d="M47.74,42.92c-1.81-.72-3,1.58-2.48,2.57a5.7,5.7,0,0,0,2.79,2.3c1,.28,2.48-1.54,2.12-2.59A5.31,5.31,0,0,0,47.74,42.92Z"
        />
        <path
          className="cls-6"
          d="M23.17,25.93l2.19,1.32A33.41,33.41,0,0,1,36,26c4.44.3,5.26,1,5.26,1A12.32,12.32,0,0,1,44.9,30.5c.38.67.15,2.39.78,3.84,1,2.23,1,3.81-.38,4.42-1.95.85-4.84-1.95-4.52-5.16a5.92,5.92,0,0,1-3-1.45C34.49,35.27,26.4,42.74,26.4,42.74a36.2,36.2,0,0,1-6.72-7l-1.52-1Z"
        />
        <path
          className="cls-1"
          d="M49.58,26.71c-.89.13-8.07,0-8.3.25s-3.51,5.19-3.51,5.19S26.29,42.65,24.72,44.43c-.95,1.07.59,4.14,2.52,2.47s4.75-4.25,5.25-4.75,1,0,.53.36a70.07,70.07,0,0,0-5.36,4.85c-1.28,1.46,1.35,4.12,2.69,2.87s5.74-5.35,6-5.55.72.12.42.39-4.4,3.8-5.38,5,1.2,3.46,2.92,2c1.16-1,4.74-4.68,5-4.94s.73.15.33.49S36.92,50.24,36,51.31s.73,3.16,2.37,1.74S54.11,39.64,55,36.61c.22-.77,1.52-1.52,1.52-1.52l-4.85-9.48A5.84,5.84,0,0,1,49.58,26.71Z"
        />
        <path
          className="cls-6"
          d="M51.06,40c-1.82-.72-3,1.58-2.49,2.57a3.74,3.74,0,0,0,2.25,1.8c1,.28,2.48-1.53,2.13-2.58A3.32,3.32,0,0,0,51.06,40Z"
        />
        <path
          className="cls-6"
          d="M41.42,49.21c-1.5-.59-2.48,1.31-2.05,2.12a4.24,4.24,0,0,0,2.2,1.77c.86.23,2-1.26,1.75-2.13A4,4,0,0,0,41.42,49.21Z"
        />
        <path
          className="cls-6"
          d="M47.74,42.92c-1.81-.72-3,1.58-2.48,2.57a5.7,5.7,0,0,0,2.79,2.3c1,.28,2.48-1.54,2.12-2.59A5.31,5.31,0,0,0,47.74,42.92Z"
        />
        <path
          className="cls-1"
          d="M23.17,25.93l2.19,1.32A33.41,33.41,0,0,1,36,26c4.44.3,5.26,1,5.26,1A12.32,12.32,0,0,1,44.9,30.5c.38.67.15,2.39.78,3.84,1,2.23,1,3.81-.38,4.42-1.95.85-4.84-1.95-4.52-5.16a5.92,5.92,0,0,1-3-1.45C34.49,35.27,26.4,42.74,26.4,42.74a36.2,36.2,0,0,1-6.72-7l-1.52-1Z"
        />
        <g className="cls-7">
          <polygon className="cls-8" points="49.48 25.5 56.11 36.37 58.47 34.91 52.15 24.17" />
        </g>
        <g className="cls-9">
          <polygon className="cls-8" points="25.93 25.85 19.61 36.91 17.21 35.51 23.23 24.61" />
        </g>
        <polygon className="cls-3" points="25.55 25.61 19.23 36.66 16.83 35.27 22.85 24.36" />
        <polygon className="cls-10" points="16.83 36.07 2.36 29.75 7.89 14.02 23.2 23.74" />
        <g className="cls-11">
          <polygon className="cls-8" points="17.32 36.21 -6.24 25.74 -6.24 8.13 23.69 23.88" />
        </g>
        <circle className="cls-12" cx="14.83" cy="32.15" r="1.27" />
        <circle className="cls-12" cx="11.1" cy="30.41" r="1.27" />
        <polygon className="cls-3" points="50.08 25.23 56.7 36.1 59.06 34.64 52.74 23.91" />
        <polygon className="cls-10" points="59.09 35.44 72.81 29.69 68.78 13.18 52.37 23.29" />
        <path className="cls-13" d="M59.71,31.5a1.27,1.27,0,1,0,1.23-1.31A1.26,1.26,0,0,0,59.71,31.5Z" />
        <path className="cls-13" d="M63.39,29.65a1.27,1.27,0,0,0,2.54-.07,1.27,1.27,0,1,0-2.54.07Z" />
        <polygon className="cls-12" points="72.81 29.69 59.09 35.44 56 29.85 71.13 22.81" />
        <g className="cls-14">
          <polygon className="cls-8" points="58.54 35.74 81.9 25.37 81.9 7.76 51.97 23.5" />
        </g>
      </g>
    </svg>
  )
}

interface TaskBadgeIconProps {
  borderColor: Color
}
