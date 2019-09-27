/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Color } from '../../colors'

export const FerpectionBadgeIcon: React.FC<FerpectionBadgeIconProps> = ({
  borderColor = {
    toHex: () => {},
  },
  icon: iconName,
}) => {
  switch (iconName) {
    case 'config': {
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
          fill: ${borderColor.toHex() || '#d5bbea'};
        }
        .cls-7 {
          fill: #fff;
        }
        .cls-8 {
          fill: #006875;
        }
        .cls-9 {
          fill: #fec138;
        }
        .cls-10 {
          fill: #24d58d;
        }
      `

      return (
        <svg
          css={svg}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="a">
              <circle className="cls-1" cx="-53.88" cy="-52.3" r="27" />
            </clipPath>
          </defs>
          <g className="cls-2">
            <g>
              <g className="cls-3">
                <polygon
                  className="cls-4"
                  points="-28.11 -9.51 5.23 8.05 35.66 -58.46 32.27 -60.89 3.6 -16.42 -28.63 -43.96"
                />
                <polygon
                  className="cls-5"
                  points="5.23 8.05 -28.18 -18.85 -28.11 -9.51"
                />
              </g>
              <circle className="cls-6" cx="37.58" cy="34.47" r="32.5" />
              <circle className="cls-7" cx="37.58" cy="34.47" r="26.5" />
              <path
                className="cls-8"
                d="M17.42,34.91a9.88,9.88,0,0,0,.51,2l-.05,0-1.81,1.27,1.38,2.4,2.09-.79.05,0a11.12,11.12,0,0,0,1.5,1.49l0,.05-.91,2,2.45,1.42L24,43.05l0,0a11.82,11.82,0,0,0,2.08.58v.05l.24,2.14,2.86.06.34-2.13v-.05a11.36,11.36,0,0,0,2.11-.49l0,.05L33,44.94l2.51-1.32-.82-2,0-.05a10.73,10.73,0,0,0,1.57-1.44l0,0,2.05.87,1.49-2.34-1.76-1.33,0,0a9.75,9.75,0,0,0,.61-2h.06l2.23-.23L41,32.39l-2.23-.32H38.7a9.88,9.88,0,0,0-.51-2l.05,0,1.82-1.27-1.38-2.4-2.09.79-.05,0A10.64,10.64,0,0,0,35,25.68l0-.05.92-2-2.45-1.42-1.4,1.67,0,0A11.82,11.82,0,0,0,30,23.39v-.05l-.23-2.14-2.87-.06-.33,2.12v.06a11.26,11.26,0,0,0-2.1.49l0,0L23.12,22,20.6,23.35l.82,2,0,.05a10.66,10.66,0,0,0-1.56,1.44l-.06,0-2-.87-1.49,2.34,1.76,1.33.05,0a10.42,10.42,0,0,0-.61,2h0l-2.24.23-.06,2.73,2.22.33Zm4.73-1.55a5.92,5.92,0,1,1,5.78,5.77A5.8,5.8,0,0,1,22.15,33.36Z"
              />
              <path
                className="cls-9"
                d="m41.09 43a7.16 7.16 0 0 0 0.39 1.53l-1.38 1 1 1.83 1.59-0.6a7.68 7.68 0 0 0 1.14 1.14l-0.69 1.49 1.86 1.07 1.07-1.28a9.33 9.33 0 0 0 1.59 0.44l0.18 1.63h2.18l0.26-1.61a8.47 8.47 0 0 0 1.6 -0.37l1 1.32 1.91-1-0.62-1.52a8.87 8.87 0 0 0 1.25 -1.07l1.56 0.66 1.14-1.78-1.34-1a7.85 7.85 0 0 0 0.46 -1.52l1.7-0.17v-2.08l-1.7-0.25a7.8 7.8 0 0 0 -0.39 -1.53l1.39-1-1-1.83-1.59 0.6a7.75 7.75 0 0 0 -1.15 -1.1l0.69-1.49-1.86-1.08-1.07 1.27a7.8 7.8 0 0 0 -1.59 -0.44l-0.18-1.63h-2.18l-0.26 1.62a8.48 8.48 0 0 0 -1.6 0.38l-1-1.32-1.92 1 0.63 1.52a8.8 8.8 0 0 0 -1.16 1l-1.56-0.66-1.14 1.78 1.34 1a7.13 7.13 0 0 0 -0.46 1.51l-1.7 0.18v2.08l1.52 0.28zm3.6-1.18a4.51 4.51 0 1 1 4.41 4.38 4.42 4.42 0 0 1 -4.41 -4.39z"
              />
              <path
                className="cls-10"
                d="m40.73 26.13a6.17 6.17 0 0 0 0.33 1.28l-1.16 0.8 0.88 1.53 1.33-0.5a6.1 6.1 0 0 0 1 1l-0.58 1.25 1.56 0.9 0.89-1.06a7.23 7.23 0 0 0 1.33 0.36l0.1 1.31h1.82l0.21-1.34a7.46 7.46 0 0 0 1.34 -0.31l0.84 1.1 1.6-0.84-0.53-1.27a6.56 6.56 0 0 0 1 -0.91l1.31 0.57 1-1.45-1.11-0.85a6.2 6.2 0 0 0 0.38 -1.27l1.42-0.14v-1.74l-1.41-0.2a6.87 6.87 0 0 0 -0.33 -1.28l1.16-0.8-0.88-1.53-1.33 0.5a6.1 6.1 0 0 0 -1 -0.95l0.63-1.29-1.53-0.91-0.89 1.06a8.14 8.14 0 0 0 -1.33 -0.37l-0.16-1.36h-1.82l-0.21 1.35a7.46 7.46 0 0 0 -1.34 0.31l-0.9-1.08-1.6 0.83 0.53 1.28a6.56 6.56 0 0 0 -1 0.91l-1.28-0.59-1 1.48 1.11 0.85a6 6 0 0 0 -0.38 1.27l-1.42 0.15v1.74l1.41 0.2zm3-1a3.76 3.76 0 1 1 3.67 3.67 3.68 3.68 0 0 1 -3.66 -3.65z"
              />
            </g>
          </g>
        </svg>
      )
    }
    case 'goals': {
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
        <svg
          css={svg}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
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
              <rect
                className="cls-6"
                x="29.59"
                y="25.14"
                width="9.42"
                height="4.69"
              />
              <path
                className="cls-7"
                d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
              />
              <path
                className="cls-4"
                d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
              />
              <rect
                className="cls-5"
                x="71.77"
                y="18.69"
                width="2.74"
                height="17.6"
                rx=".41"
              />
              <path
                className="cls-5"
                d="M29.26,24.61H28.7c-.18,0-.33.22-.33.5v4.76c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5V25.11C29.59,24.83,29.44,24.61,29.26,24.61Z"
              />
              <rect
                className="cls-6"
                x="29.59"
                y="25.14"
                width="9.42"
                height="4.69"
              />
              <path
                className="cls-7"
                d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
              />
              <path
                className="cls-4"
                d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
              />
              <rect
                className="cls-5"
                x="71.77"
                y="18.69"
                width="2.74"
                height="17.6"
                rx=".41"
              />
              <path
                className="cls-5"
                d="M29.26,24.61H28.7c-.18,0-.33.22-.33.5v4.76c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5V25.11C29.59,24.83,29.44,24.61,29.26,24.61Z"
              />
              <rect
                className="cls-6"
                x="29.59"
                y="25.14"
                width="9.42"
                height="4.69"
              />
              <path
                className="cls-7"
                d="m39.42 21.81h11.58v11.36h-11.58a0.41 0.41 0 0 1 -0.41 -0.41v-10.55a0.41 0.41 0 0 1 0.41 -0.4z"
              />
              <path
                className="cls-4"
                d="m51.45 20h20.32v15h-20.32a0.41 0.41 0 0 1 -0.45 -0.4v-14.22a0.41 0.41 0 0 1 0.45 -0.38z"
              />
              <rect
                className="cls-5"
                x="71.77"
                y="18.69"
                width="2.74"
                height="17.6"
                rx=".41"
              />
              <g className="cls-8">
                <path
                  className="cls-7"
                  d="M28.37,27.49v2.38c0,.28.15.5.33.5h.56c.18,0,.33-.22.33-.5v0H39v2.83c0,.28.15.5.33.5H51.05v1.34c0,.27.14.5.33.5H71.77v.78c0,.28.15.5.33.5h2.09c.18,0,.33-.22.33-.5v-8.3Z"
                />
              </g>
              <g className="cls-9">
                <polyline
                  className="cls-10"
                  points="63.97 130.77 62.63 43.1 26.28 39.84 7.57 42.19 -27.17 60.45"
                />
                <polygon
                  className="cls-10"
                  points="63.15 77.56 96.48 95.12 126.92 28.61 123.53 26.18 94.85 70.65 62.63 43.1"
                />
                <path
                  className="cls-11"
                  d="m58.87 31.67c-0.92-0.39-2.22 0.62-3 2.26h3.83c0.1-1.1-0.18-1.99-0.83-2.26z"
                />
                <path
                  className="cls-12"
                  d="m58.56 35.24c-0.76 1.82-2.17 3-3.14 2.55s-1.14-2.22-0.37-4 2.17-2.95 3.14-2.55 1.14 2.19 0.37 4z"
                />
                <polygon
                  className="cls-10"
                  points="-22.16 82.46 32.04 115.25 58.79 35.34 54.89 33.53 26.28 90.44 0.35 64.72"
                />
                <polygon
                  className="cls-13"
                  points="0.35 64.72 26.28 90.44 54.89 33.53 56.54 34.3 26.68 97.34"
                />
                <polygon
                  className="cls-14"
                  points="-22.16 82.46 32.04 115.25 56.38 42.54 58.2 42.7 33.73 120.25"
                />
                <polygon
                  className="cls-15"
                  points="6.98 23.57 7.57 42.19 26.28 39.84 22.05 21.47"
                />
                <path
                  className="cls-16"
                  d="M9.66,25.66l.18,5.64s-1.7-.87-1.91.48c-.29,1.89,1.9,1.14,1.9,1.14a26.53,26.53,0,0,1-2.26,9.27S.68,23.7,6.89,23.37c.73-10.38,17.38.48,19.61-7.6C28.43,22.44,24.53,25.9,9.66,25.66Z"
                />
                <polygon
                  className="cls-4"
                  points="7.57 42.19 19.1 59.38 26.28 39.84"
                />
                <polygon
                  className="cls-17"
                  points="18.13 42.32 15.67 42.63 14.92 44.37 16.52 46.34 15.19 53.55 19.1 59.38 21.47 52.92 18.28 46.06 19.42 43.67"
                />
                <polygon
                  className="cls-18"
                  points="19.1 59.38 27.47 49.36 25.62 46.46 28.45 43.71 26.28 39.84"
                />
                <polygon
                  className="cls-18"
                  points="19.1 59.38 8.51 51.74 9.58 48.47 6.17 46.5 7.57 42.19"
                />
                <polygon
                  className="cls-14"
                  points="96.48 95.12 63.07 68.22 63.15 77.56"
                />
              </g>
            </g>
          </g>
        </svg>
      )
    }
    case 'incentive': {
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
        <svg
          css={svg}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle className="cls-1" cx="37.58" cy="34.6" r="32.5" />
            <circle className="cls-2" cx="37.58" cy="34.6" r="26.5" />
            <path
              className="cls-3"
              d="M46.27,19.57a17.17,17.17,0,1,1-21,12.24,17.18,17.18,0,0,1,21-12.24Z"
            />
            <path
              className="cls-4"
              d="M41.9,19.16v2.66a14.35,14.35,0,0,1,13.88,18,14.35,14.35,0,1,1-13.89-18V19.16m0,0a17,17,0,1,0,4.34.56,17,17,0,0,0-4.34-.56Z"
            />
            <line
              className="cls-5"
              x1="33.98"
              x2="44.99"
              y1="32.01"
              y2="34.9"
            />
            <line className="cls-5" x1="32.28" x2="43.29" y1="35.3" y2="38.2" />
            <path
              className="cls-5"
              d="M45.58,42.94a6.66,6.66,0,0,1-2.42,1.12,5.45,5.45,0,0,1-2.6,0,5.37,5.37,0,0,1-2.27-1.24,6.52,6.52,0,0,1-1.56-2.17,8.36,8.36,0,0,1-.7-2.79,9.56,9.56,0,0,1,.3-3.11,9.11,9.11,0,0,1,1.27-2.85,8.43,8.43,0,0,1,2-2.09A6.66,6.66,0,0,1,42,28.65a5.41,5.41,0,0,1,2.59,0,5.3,5.3,0,0,1,2.28,1.24,6.59,6.59,0,0,1,1.56,2.16"
            />
            <path
              className="cls-3"
              d="M29.44,17a17.17,17.17,0,1,1-13.18,20.4A17.18,17.18,0,0,1,29.44,17Z"
            />
            <path
              className="cls-4"
              d="M33.06,19.46h0a14.43,14.43,0,0,1,14,11.34,14.35,14.35,0,0,1-11,17,14.12,14.12,0,0,1-3,.32A14.4,14.4,0,0,1,19,36.83a14.36,14.36,0,0,1,11-17,14.78,14.78,0,0,1,3-.32m0-2.66A17,17,0,1,0,49.68,30.24,17.05,17.05,0,0,0,33.06,16.8Z"
            />
            <line
              className="cls-5"
              x1="24.1"
              x2="35.23"
              y1="33.67"
              y2="31.28"
            />
            <line
              className="cls-5"
              x1="24.07"
              x2="35.2"
              y1="37.38"
              y2="34.99"
            />
            <path
              className="cls-5"
              d="M39.38,38.19a6.74,6.74,0,0,1-1.66,2.09,5.39,5.39,0,0,1-4.92,1.06,6.52,6.52,0,0,1-2.36-1.23,8.17,8.17,0,0,1-1.89-2.18A9.36,9.36,0,0,1,27.41,35a9.45,9.45,0,0,1-.15-3.12,8.28,8.28,0,0,1,.82-2.76,6.68,6.68,0,0,1,1.65-2.09A5.36,5.36,0,0,1,34.66,26,6.65,6.65,0,0,1,37,27.22"
            />
          </g>
        </svg>
      )
    }
    case 'objectives': {
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
        <svg
          css={svg}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
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
                <polygon
                  className="cls-5"
                  points="5.23 95.12 -28.18 68.22 -28.11 77.56"
                />
                <polygon
                  className="cls-5"
                  points="25.47 36.73 22.56 41.24 29.73 41.57 31.95 36.73"
                />
              </g>
              <circle className="cls-6" cx="37.25" cy="34.27" r="32.5" />
              <circle className="cls-7" cx="37.25" cy="34.27" r="26.5" />
              <path
                className="cls-7"
                d="M37.1,16.38A17.89,17.89,0,0,0,24.55,47l25.3-25.29A17.84,17.84,0,0,0,37.1,16.38Z"
              />
              <path
                className="cls-8"
                d="M24.55,47a17.89,17.89,0,0,0,25.3-25.29Z"
              />
              <path
                className="cls-9"
                d="M37.1,55.76a.65.65,0,0,1-.65-.64V37.26a.65.65,0,1,1,1.29,0V55.12A.64.64,0,0,1,37.1,55.76Z"
              />
              <path
                className="cls-10"
                d="M37.1,31.93a.65.65,0,0,1-.65-.65V13.42a.65.65,0,0,1,1.29,0V31.28A.65.65,0,0,1,37.1,31.93Z"
              />
              <path
                className="cls-10"
                d="M34.11,34.92H16.25a.65.65,0,0,1,0-1.3H34.11a.65.65,0,0,1,0,1.3Z"
              />
              <path
                className="cls-9"
                d="M57.94,34.92H40.08a.65.65,0,0,1,0-1.3H57.94a.65.65,0,1,1,0,1.3Z"
              />
              <path
                className="cls-1"
                d="M31.77,34.27A5.31,5.31,0,0,0,33.33,38l7.53-7.54a5.32,5.32,0,0,0-9.09,3.77Z"
              />
              <path
                className="cls-1"
                d="M43.72,34.27A6.62,6.62,0,0,1,32.42,39L29.1,42.27a11.31,11.31,0,1,0,16-16l-3.32,3.32A6.62,6.62,0,0,1,43.72,34.27Z"
              />
              <path
                className="cls-1"
                d="M49.7,34.27a12.6,12.6,0,0,1-21.52,8.91l-3.29,3.29A17.26,17.26,0,1,0,49.3,22.07L46,25.36A12.56,12.56,0,0,1,49.7,34.27Z"
              />
              <path
                className="cls-1"
                d="M37.1,39.6a5.33,5.33,0,0,0,3.76-9.1L33.33,38A5.33,5.33,0,0,0,37.1,39.6Z"
              />
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
    case 'planning': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
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
            <path
              className="cls-5"
              d="M59.62,17.18A3.21,3.21,0,0,0,56.41,14H18.76a3.21,3.21,0,0,0-3.21,3.21v9.11H59.62Z"
            />
            <circle className="cls-6" cx="26.33" cy="20.22" r="2.61" />
            <circle className="cls-6" cx="48.84" cy="20.22" r="2.61" />
            <line
              className="cls-7"
              x1="26.33"
              x2="26.33"
              y1="20.22"
              y2="12.57"
            />
            <line
              className="cls-7"
              x1="48.84"
              x2="48.84"
              y1="20.22"
              y2="12.57"
            />
            <rect
              className="cls-2"
              x="18.48"
              y="29.52"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="26.52"
              y="29.52"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="34.67"
              y="29.52"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="42.81"
              y="29.52"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="50.96"
              y="29.52"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="18.48"
              y="37.46"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="26.52"
              y="37.46"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="34.67"
              y="37.46"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="42.81"
              y="37.46"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="50.96"
              y="37.46"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="18.48"
              y="45.4"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="26.62"
              y="45.4"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="34.67"
              y="45.4"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="42.81"
              y="45.4"
              width="5.73"
              height="5.73"
            />
            <rect
              className="cls-2"
              x="50.96"
              y="45.4"
              width="5.73"
              height="5.73"
            />
            <line
              className="cls-8"
              x1="42.81"
              x2="48.54"
              y1="37.46"
              y2="43.19"
            />
            <line
              className="cls-8"
              x1="48.54"
              x2="42.81"
              y1="37.46"
              y2="43.19"
            />
          </g>
        </svg>
      )
    }
    case 'post-test': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle className="cls-1" cx="38.2" cy="35.4" r="32.5" />
            <circle className="cls-2" cx="38.2" cy="35.4" r="26.5" />
            <path
              className="cls-3"
              d="M54.89,5.91a34,34,0,0,0-33.34,0L38.2,34.77Z"
            />
            <path
              className="cls-4"
              d="M20.93,6.25A33.89,33.89,0,0,0,4.25,35.11H37.58Z"
            />
            <path
              className="cls-5"
              d="M72.15,35.14A33.92,33.92,0,0,0,55.5,6.27L38.82,35.13Z"
            />
            <path
              className="cls-2"
              d="M45.46,22.62A14.45,14.45,0,0,0,23.77,35.13h28.9A14.45,14.45,0,0,0,45.46,22.62Z"
            />
            <circle
              className="cls-2"
              transform="translate(-11.89 18.94) rotate(-45)"
              cx="16.92"
              cy="23.82"
              r="6.53"
            />
            <path
              className="cls-4"
              d="M18.76,26.45a.17.17,0,0,0,.16-.28,2.7,2.7,0,0,0-4,0,.17.17,0,0,0,.16.28,11.7,11.7,0,0,1,1.85-.14A11.57,11.57,0,0,1,18.76,26.45Z"
            />
            <path
              className="cls-4"
              d="M20.59,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,20.59,22.85Z"
            />
            <path
              className="cls-4"
              d="M14.44,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,14.44,22.85Z"
            />
            <circle
              className="cls-2"
              transform="translate(18.08 46.11) rotate(-76.66)"
              cx="38.2"
              cy="11.62"
              r="6.53"
            />
            <path
              className="cls-3"
              d="M41.87,10.65a.59.59,0,0,1-.59.6.6.6,0,1,1,0-1.19A.59.59,0,0,1,41.87,10.65Z"
            />
            <path
              className="cls-3"
              d="M35.72,10.65a.59.59,0,0,1-.59.6.6.6,0,1,1,0-1.19A.59.59,0,0,1,35.72,10.65Z"
            />
            <path
              className="cls-3"
              d="M40.56,13.7H36A.33.33,0,0,1,36,13h4.6a.33.33,0,0,1,0,.66Z"
            />
            <circle
              className="cls-2"
              transform="translate(23.41 76.65) rotate(-77.8)"
              cx="59.2"
              cy="23.82"
              r="6.53"
            />
            <path
              className="cls-5"
              d="M56.84,25.18c-.16-.05-.31.12-.26.31a2.75,2.75,0,0,0,5.24,0,.23.23,0,0,0-.27-.31,7.28,7.28,0,0,1-2.35.37A7.39,7.39,0,0,1,56.84,25.18Z"
            />
            <path
              className="cls-5"
              d="M62.87,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,62.87,22.85Z"
            />
            <path
              className="cls-5"
              d="M56.72,22.85a.6.6,0,0,1-.6.6.6.6,0,0,1,0-1.2A.6.6,0,0,1,56.72,22.85Z"
            />
            <rect
              className="cls-2"
              x="23.77"
              y="34.77"
              width="28.89"
              height="1.05"
            />
            <line className="cls-6" x1="20.92" x2="38.2" y1="5.62" y2="35.3" />
            <line
              className="cls-6"
              x1="55.35"
              x2="38.07"
              y1="5.87"
              y2="35.54"
            />
            <path
              className="cls-7"
              d="M39.28,37.38a2.35,2.35,0,0,1-2.79-3.79c.76-.56,11.06-6.15,15-8.09a.45.45,0,0,1,.5.73C48.86,29.26,40,36.82,39.28,37.38Z"
            />
            <path
              className="cls-2"
              d="M39.17,35.46a1.11,1.11,0,0,1-2.21,0,1.11,1.11,0,1,1,2.21,0Z"
            />
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
            <ellipse
              className="cls-12"
              cx="42.77"
              cy="42.89"
              rx="1.1"
              ry=".98"
            />
            <ellipse
              className="cls-12"
              cx="33.8"
              cy="42.89"
              rx="1.1"
              ry=".98"
            />
          </g>
        </svg>
      )
    }
    case 'pre-test': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
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
            <path
              className="cls-2"
              d="M46.52,39.88A1.88,1.88,0,1,1,44.65,38,1.87,1.87,0,0,1,46.52,39.88Z"
            />
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
            <ellipse
              className="cls-8"
              cx="30.99"
              cy="37.52"
              rx="1.1"
              ry=".98"
            />
            <ellipse
              className="cls-8"
              cx="22.02"
              cy="37.52"
              rx="1.1"
              ry=".98"
            />
          </g>
        </svg>
      )
    }
    case 'screening': {
      const styles = css`
        .cls-1 {
          fill: ${borderColor.toHex() || '#d5bbea'};
        }
        .cls-2,
        .cls-8 {
          fill: #fff;
        }
        .cls-3 {
          fill: #9654cb;
        }
        .cls-4 {
          fill: #ab76d5;
        }
        .cls-5 {
          fill: #fec138;
        }
        .cls-6 {
          fill: none;
          stroke: #fff;
          stroke-linecap: round;
          stroke-miterlimit: 10;
          stroke-width: 1.41px;
        }
        .cls-7 {
          fill: #24d58d;
        }
        .cls-8 {
          fill-rule: evenodd;
        }
      `

      return (
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle className="cls-1" cx="38.2" cy="34.47" r="32.5" />
            <circle className="cls-2" cx="38.2" cy="34.47" r="26.5" />
            <path
              className="cls-3"
              d="M44.76,22.87a7.81,7.81,0,0,0,3.89,7l-.14,1.72c-6.55.52-10.91,3.28-10.91,7v3.06a.65.65,0,0,0,.65.66H51.19V16C47.64,16,44.76,18.65,44.76,22.87Z"
            />
            <path
              className="cls-4"
              d="M54,31.63l-.23-1.74a7.81,7.81,0,0,0,3.86-7c0-4.22-2.88-6.9-6.42-6.9V42.32H63.85a.65.65,0,0,0,.65-.66V38.6C64.5,34.88,60.29,32.12,54,31.63Z"
            />
            <circle className="cls-5" cx="50.75" cy="44.42" r="7.55" />
            <line
              className="cls-6"
              x1="47.44"
              x2="54.04"
              y1="41.12"
              y2="47.72"
            />
            <line
              className="cls-6"
              x1="47.44"
              x2="54.04"
              y1="47.72"
              y2="41.12"
            />
            <path
              className="cls-3"
              d="M20,22.87a7.82,7.82,0,0,0,3.88,7l-.13,1.72c-6.55.52-10.91,3.28-10.91,7v3.06a.65.65,0,0,0,.65.66H26.46V16C22.92,16,20,18.65,20,22.87Z"
            />
            <path
              className="cls-4"
              d="m29.25 31.63-0.25-1.74a7.81 7.81 0 0 0 3.86 -7c0-4.22-2.88-6.9-6.43-6.9v26.33h12.7a0.65 0.65 0 0 0 0.65 -0.66v-3.06c0-3.72-4.21-6.48-10.53-6.97z"
            />
            <circle className="cls-7" cx="26.56" cy="44.21" r="7.55" />
            <path
              className="cls-8"
              d="M30.05,41.54,26,47.7a.79.79,0,0,1-.64.36h0a.82.82,0,0,1-.64-.3l-2.06-2.6a.74.74,0,0,1,.15-1.07.84.84,0,0,1,1.13.15L25.28,46l3.41-5.22a.83.83,0,0,1,1.11-.25A.75.75,0,0,1,30.05,41.54Z"
            />
          </g>
        </svg>
      )
    }
    case 'target': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="a">
              <circle className="cls-1" cx="37.37" cy="-52.3" r="27" />
            </clipPath>
          </defs>
          <g className="cls-2">
            <g>
              <g className="cls-3">
                <polyline
                  className="cls-4"
                  points="63.97 43.7 62.63 -43.96 26.28 -47.23 7.57 -44.88 -27.17 -26.62"
                />
                <polygon
                  className="cls-4"
                  points="63.15 -9.51 96.48 8.05 126.92 -58.46 123.53 -60.89 94.85 -16.42 62.63 -43.96"
                />
                <polygon
                  className="cls-4"
                  points="-22.16 -4.61 32.04 28.18 58.79 -51.73 54.89 -53.54 26.28 3.37 0.35 -22.35"
                />
                <polygon
                  className="cls-5"
                  points="0.35 -22.35 26.28 3.37 54.89 -53.54 56.54 -52.77 26.68 10.27"
                />
                <polygon
                  className="cls-6"
                  points="-22.16 -4.61 32.04 28.18 56.38 -44.52 58.2 -44.37 33.73 33.18"
                />
                <polygon
                  className="cls-6"
                  points="96.48 8.05 63.07 -18.85 63.15 -9.51"
                />
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
              <path
                className="cls-8"
                d="M32.22,34a5.47,5.47,0,0,0,1.61,3.87l7.76-7.75A5.49,5.49,0,0,0,32.22,34Z"
              />
              <polygon
                className="cls-10"
                points="53.15 16.74 52.1 13.59 57.72 7.97 58.77 11.12"
              />
              <polygon
                className="cls-12"
                points="54.97 18.55 58.12 19.6 63.74 13.98 60.59 12.93"
              />
              <line
                className="cls-13"
                x1="39.05"
                x2="61.17"
                y1="32.63"
                y2="10.52"
              />
            </g>
          </g>
        </svg>
      )
    }
    case 'test': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle className="cls-1" cx="37.94" cy="34.03" r="32.5" />
            <circle className="cls-2" cx="37.94" cy="34.03" r="26.5" />
            <path
              className="cls-3"
              d="M30.92,33.5V26.29L26.7,22.08a.45.45,0,0,1-.09-.48.43.43,0,0,1,.4-.26h3.91v-.77a2,2,0,0,1,2-2H70a2,2,0,0,1,2,2V33.5a2,2,0,0,1-2,2H33A2,2,0,0,1,30.92,33.5Z"
            />
            <line
              className="cls-4"
              x1="47.05"
              x2="59.15"
              y1="24.63"
              y2="24.63"
            />
            <line
              className="cls-4"
              x1="47.05"
              x2="59.15"
              y1="27.38"
              y2="27.38"
            />
            <line
              className="cls-4"
              x1="47.05"
              x2="54.14"
              y1="30.13"
              y2="30.13"
            />
            <rect
              className="cls-2"
              x="61.36"
              y="23.25"
              width="6.95"
              height="8.26"
            />
            <path
              className="cls-5"
              d="M30.92,52.8V45.6L26.7,41.38a.43.43,0,0,1-.09-.47.44.44,0,0,1,.4-.27h3.91v-.76a2,2,0,0,1,2-2.05H70a2,2,0,0,1,2,2.05V52.8a2,2,0,0,1-2,2.05H33A2,2,0,0,1,30.92,52.8Z"
            />
            <rect
              className="cls-2"
              x="61.36"
              y="42.56"
              width="6.95"
              height="8.26"
            />
            <circle className="cls-6" cx="39.19" cy="46.34" r="5.65" />
            <path
              className="cls-7"
              d="M38,47.06H36.82a.52.52,0,0,1-.52-.53V45a.52.52,0,0,1,.52-.53h1"
            />
            <path
              className="cls-5"
              d="M37.09,45a.26.26,0,1,0,.26.26.27.27,0,0,0-.26-.26Z"
            />
            <path
              className="cls-7"
              d="M41.77,46.53a.78.78,0,0,0,.14-.42.66.66,0,0,0-.22-.49.54.54,0,0,0,.08-.28.63.63,0,0,0-.27-.52,1.64,1.64,0,0,0,0-.23c0-.48-.3-.68-.76-.68h-.52a4.23,4.23,0,0,0-1.41.3,3.51,3.51,0,0,1-.83.22h-.13v2.63H38c.33,0,.82.7,1,.94s.2.25.32.37c.4.42.26,1.05.52,1.31.56,0,.66-.31.66-.79s-.4-.83-.4-1.31h1.45a.54.54,0,0,0,.52-.52C42.07,46.91,42,46.54,41.77,46.53Z"
            />
            <g className="cls-8">
              <circle className="cls-2" cx="39.19" cy="27.03" r="5.66" />
            </g>
            <path
              className="cls-9"
              d="M38,26.31H36.82a.53.53,0,0,0-.53.53v1.59a.52.52,0,0,0,.53.52h1"
            />
            <path
              className="cls-3"
              d="M37.08,27.9a.27.27,0,0,0,0,.53.27.27,0,1,0,0-.53Z"
            />
            <path
              className="cls-9"
              d="M41.77,26.84a.71.71,0,0,1,.14.42.64.64,0,0,1-.21.49.59.59,0,0,1,.07.29.58.58,0,0,1-.27.51.93.93,0,0,1,0,.23c0,.48-.3.69-.76.69h-.52a4.23,4.23,0,0,1-1.41-.3,3.11,3.11,0,0,0-.83-.23h-.13V26.31H38c.33,0,.82-.7,1-.94s.2-.25.32-.37c.4-.42.26-1.05.52-1.31.57,0,.66.3.66.78s-.39.84-.39,1.32h1.44a.55.55,0,0,1,.53.52C42.08,26.47,42,26.84,41.77,26.84Z"
            />
            <line className="cls-4" x1="47.05" x2="59.15" y1="44.1" y2="44.1" />
            <line
              className="cls-4"
              x1="47.05"
              x2="59.15"
              y1="46.86"
              y2="46.86"
            />
            <line
              className="cls-4"
              x1="47.05"
              x2="54.14"
              y1="49.61"
              y2="49.61"
            />
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
            <ellipse
              className="cls-14"
              cx="19.34"
              cy="32.52"
              rx="1.1"
              ry=".98"
            />
            <ellipse
              className="cls-14"
              cx="10.37"
              cy="32.52"
              rx="1.1"
              ry=".98"
            />
          </g>
        </svg>
      )
    }
    case 'tasks': {
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
        <svg
          css={styles}
          viewBox="0 0 75.17 69.21"
          xmlns="http://www.w3.org/2000/svg"
        >
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
              <polygon
                className="cls-1"
                points="25.55 25.61 19.23 36.66 16.83 35.27 22.85 24.36"
              />
            </clipPath>
            <clipPath id="a">
              <polygon
                className="cls-1"
                points="49.98 25.31 56.29 36.37 59.06 34.64 53 23.78"
              />
            </clipPath>
          </defs>
          <g>
            <circle className="cls-2" cx="37.31" cy="34.27" r="32.5" />
            <circle className="cls-3" cx="37.31" cy="34.27" r="26.5" />
            <path
              className="cls-4"
              d="M26.86,42.78s10.8,8.08,12.92,6.83a8,8,0,0,0,3-4.06l-15.25-6Z"
            />
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
              <polygon
                className="cls-8"
                points="49.48 25.5 56.11 36.37 58.47 34.91 52.15 24.17"
              />
            </g>
            <g className="cls-9">
              <polygon
                className="cls-8"
                points="25.93 25.85 19.61 36.91 17.21 35.51 23.23 24.61"
              />
            </g>
            <polygon
              className="cls-3"
              points="25.55 25.61 19.23 36.66 16.83 35.27 22.85 24.36"
            />
            <polygon
              className="cls-10"
              points="16.83 36.07 2.36 29.75 7.89 14.02 23.2 23.74"
            />
            <g className="cls-11">
              <polygon
                className="cls-8"
                points="17.32 36.21 -6.24 25.74 -6.24 8.13 23.69 23.88"
              />
            </g>
            <circle className="cls-12" cx="14.83" cy="32.15" r="1.27" />
            <circle className="cls-12" cx="11.1" cy="30.41" r="1.27" />
            <polygon
              className="cls-3"
              points="50.08 25.23 56.7 36.1 59.06 34.64 52.74 23.91"
            />
            <polygon
              className="cls-10"
              points="59.09 35.44 72.81 29.69 68.78 13.18 52.37 23.29"
            />
            <path
              className="cls-13"
              d="M59.71,31.5a1.27,1.27,0,1,0,1.23-1.31A1.26,1.26,0,0,0,59.71,31.5Z"
            />
            <path
              className="cls-13"
              d="M63.39,29.65a1.27,1.27,0,0,0,2.54-.07,1.27,1.27,0,1,0-2.54.07Z"
            />
            <polygon
              className="cls-12"
              points="72.81 29.69 59.09 35.44 56 29.85 71.13 22.81"
            />
            <g className="cls-14">
              <polygon
                className="cls-8"
                points="58.54 35.74 81.9 25.37 81.9 7.76 51.97 23.5"
              />
            </g>
          </g>
        </svg>
      )
    }
    default:
      return null
  }
}

export interface FerpectionBadgeIconProps {
  borderColor: Color
  icon:
    | 'tasks'
    | 'test'
    | 'target'
    | 'screening'
    | 'post-test'
    | 'pre-test'
    | 'planning'
    | 'objectives'
    | 'incentive'
    | 'goals'
    | 'config'
}
