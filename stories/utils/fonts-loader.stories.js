import { FontsLoader, ThematicSection, HelpBlock, UiKitInitializer } from '../../src/components'
import { SANSSERIF_FONTSET, OPENSANS_FONT } from '../../src/fonts'

export default {
  title: 'Utils/FontsLoader',
  component: FontsLoader,

  parameters: {
    docs: {
      description: {
        component: `The _FontsLoader_ component load the default fonts of the ferpection branding using the webfontloader package.

  By default it set _${SANSSERIF_FONTSET.join(', ')}_ as the fonts of the body and html tags.

  The goal of using this component is to not block the loading of the page when loading for the fonts. Better user experience.`,
      },
    },
  },
}

export const Documentation = args => {
  return (
    <UiKitInitializer>
      <FontsLoader {...args} />
      <ThematicSection title="Example section" badgeIcon="config">
        <HelpBlock question="What's the text to show">
          <p>Text of the help</p>
          <ul>
            <li>an item</li>
            <li>another item</li>
          </ul>
        </HelpBlock>
      </ThematicSection>
    </UiKitInitializer>
  )
}

Documentation.args = {
  onlyLoadFonts: false,
  fontNames: [OPENSANS_FONT],
}
