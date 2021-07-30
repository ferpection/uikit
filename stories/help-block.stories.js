import { HelpBlock, UiKitInitializer } from '../src/components/index.ts'

export default {
  title: 'Components/HelpBlock',
  component: HelpBlock,
}

export const NormalState = () => {
  return (
    <UiKitInitializer>
      <HelpBlock question="Pourquoi commencer par les objectifs ?">
        <p>Pour conduire une étude efficace, lorem ipsum</p>
        <p>Par exemple :</p>
        <ul>
          <li>choix un</li>
          <li>choix deux</li>
          <li>choix trois</li>
        </ul>
        <p>
          <a href="https://google.com">Ceci est un lien</a>
        </p>
      </HelpBlock>
    </UiKitInitializer>
  )
}
