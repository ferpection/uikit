import { ThematicSection, Button, TextFieldList, HelpBlock, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Layout/ThematicSection',
  component: ThematicSection,
}

export const WithActionButtons = args => {
  return (
    <UiKitInitializer>
      <ThematicSection actions={<Button icon="comment-medical" isDisabled isRaw />} {...args} />
    </UiKitInitializer>
  )
}

WithActionButtons.args = { badgeIcon: 'config', title: 'Questions de qualification' }

export const WithFormComponents = args => {
  return (
    <UiKitInitializer>
      <ThematicSection {...args}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '50%',
            }}
          >
            <p>
              Consequat culpa qui enim laboris voluptate proident tempor cillum laboris est ex sint id. Anim tempor
              exercitation amet consequat et excepteur ex. In anim occaecat adipisicing velit Lorem. Est sunt excepteur
              ut laborum commodo qui sit veniam tempor nulla cillum adipisicing. Do ipsum culpa excepteur mollit.
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
    </UiKitInitializer>
  )
}

WithFormComponents.args = { title: 'Questions de qualification', badgeIcon: 'config' }
