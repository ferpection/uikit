import React from 'react'
import { css } from '@emotion/core'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import { ThematicSection, Button, TextFieldList, HelpBlock } from '../src/components/index.ts'

storiesOf('Layout|ThematicSection', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with actions buttons', () => (
    <ThematicSection
      title={text('title', 'Questions de qualification')}
      actions={<Button icon="comment-medical" isDisabled isRaw />}
      badgeIcon={select(
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
        'config'
      )}
    />
  ))
  .add('with form components', () => (
    <ThematicSection
      title={text('title', 'Questions de qualification')}
      badgeIcon={select(
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
        'config'
      )}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 50%;
          `}
        >
          <p>
            Consequat culpa qui enim laboris voluptate proident tempor cillum laboris est ex sint id. Anim tempor
            exercitation amet consequat et excepteur ex. In anim occaecat adipisicing velit Lorem. Est sunt excepteur ut
            laborum commodo qui sit veniam tempor nulla cillum adipisicing. Do ipsum culpa excepteur mollit.
          </p>
          <TextFieldList placeholder="Choix.." isEditable />
        </div>
        <HelpBlock question="Pourquoi commencer par les objectifs ?">
          <p>Pour conduire une étude efficace, lorem ipsum</p>
          <p>Par exemple :</p>
          <ul>
            <li>choix un</li>
            <li>choix deux</li>
            <li>choix trois</li>
          </ul>
        </HelpBlock>
      </div>
    </ThematicSection>
  ))
