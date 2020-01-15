import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, array } from '@storybook/addon-knobs'

import { FontsLoader, ThematicSection, HelpBlock } from '../src/components'
import { SANSSERIF_FONTSET, OPENSANS_FONT } from '../src/fonts'

storiesOf('Utils|FontsLoader', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('documentation', () => (
    <>
      <FontsLoader onlyLoadFonts={boolean('onlyLoadFonts', false)} fontNames={array('fontNames', [OPENSANS_FONT])} />
      <h1>FontsLoader</h1>
      <p>
        The <em>FontsLoader</em> component load the default fonts of the ferpection branding using the webfontloader package.
      </p>
      <p>
        By default it set <em>{SANSSERIF_FONTSET.join(', ')}</em> as the fonts of the body and html tags.
      </p>
      <p>
        The goal of using this component is to not block the loading of the page when loading for the fonts. Better user experience.
      </p>
      <p>
        Two attributes are available:
      </p>
      <ul>
        <li><strong>fontNames</strong>: allow to override the default fonts loaded. Defaults to {OPENSANS_FONT}.</li>
        <li><strong>onlyLoadFonts</strong>: allow to prevent the alteration of the body tag's styles. Defaults to false.</li>
      </ul>
      <br />
      <br />
      <br />
      <p>
        Example:
      </p>
      <ThematicSection title="Example section" badgeIcon="config">
        <HelpBlock question="What's the text to show">
          <p>Text of the help</p>
          <ul>
            <li>an item</li>
            <li>another item</li>
          </ul>
        </HelpBlock>
      </ThematicSection>
    </>
  ))
