/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { storiesOf } from '@storybook/react'

import {
  Color,
  FULL_COLORSET,
  C500_COLOR,
  C400_COLOR,
  C300_COLOR,
  C200_COLOR,
  C100_COLOR,
  C75_COLOR,
  C50_COLOR,
  C25_COLOR,
  C15_COLOR,
  R500_COLOR,
  R400_COLOR,
  R300_COLOR,
  R200_COLOR,
  R100_COLOR,
} from '../../src/colors'

const cyans = {
  C500_COLOR: C500_COLOR,
  C400_COLOR: C400_COLOR,
  C300_COLOR: C300_COLOR,
  C200_COLOR: C200_COLOR,
  C100_COLOR: C100_COLOR,
  C75_COLOR: C75_COLOR,
  C50_COLOR: C50_COLOR,
  C25_COLOR: C25_COLOR,
  C15_COLOR: C15_COLOR,
}

const reds = {
  R500_COLOR: R500_COLOR,
  R400_COLOR: R400_COLOR,
  R300_COLOR: R300_COLOR,
  R200_COLOR: R200_COLOR,
  R100_COLOR: R100_COLOR,
}

storiesOf('Utils/Colors', module)
  .add('documentation', () => (
    <div>
      <h1>{Color.name}</h1>
      <p>
        The <em>{Color.name}</em> object is an helper that is used by the UiKit components to not care about HEX or RGB
        format, etc.
      </p>
      <p>All the Ferpection Design System's colors are already created and available in UiKit. See the list below:</p>
      <ul>
        {Object.keys(FULL_COLORSET).map(name => (
          <li
            css={{
              margin: 5,
              listStyle: 'none',
            }}
          >
            <code>{name}: </code>
            <code
              css={{
                color: FULL_COLORSET[name].toString(),
              }}
            >
              {FULL_COLORSET[name].toHex()} / {FULL_COLORSET[name].toRGB()}
            </code>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add('cyan nuances', () => (
    <div>
      <h1>Cyans</h1>
      <ul>
        {Object.keys(cyans).map(name => (
          <li>
            <code css={{ color: cyans[name].toString() }}>{name}</code>
            <code>
              : {cyans[name].toHex()} / {cyans[name].toRGB()} / {cyans[name].toRGBA()}
            </code>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add('red nuances', () => (
    <div>
      <h1>Reds</h1>
      <ul>
        {Object.keys(reds).map(name => (
          <li>
            <code css={{ color: reds[name].toString() }}>{name}</code>
            <code>
              : {reds[name].toHex()} / {reds[name].toRGB()} / {reds[name].toRGBA()}
            </code>
          </li>
        ))}
      </ul>
    </div>
  ))
