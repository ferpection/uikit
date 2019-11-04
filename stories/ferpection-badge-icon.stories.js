import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, select } from '@storybook/addon-knobs'

import { FerpectionBadgeIcon } from '../src/components/index.ts'
import { FULL_COLORSET } from '../src/colors/index.ts'

storiesOf('Iconography|FerpectionBadgeIcon', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('w/ default border color', () => (
    <FerpectionBadgeIcon
      icon={select(
        'icon',
        [
          'config',
          'goals',
          'incentive',
          'objectives',
          'planning',
          'post-test',
          'pre-test',
          'screening',
          'target',
          'test',
          'tasks',
        ],
        'config',
      )}
    />
  ))
  .add('w/ forced border color', () => (
    <FerpectionBadgeIcon
      icon={select(
        'icon',
        [
          'config',
          'goals',
          'incentive',
          'objectives',
          'planning',
          'post-test',
          'pre-test',
          'screening',
          'target',
          'test',
          'tasks',
        ],
        'config',
      )}
      borderColor={FULL_COLORSET.CINNABAR}
    />
  ))
