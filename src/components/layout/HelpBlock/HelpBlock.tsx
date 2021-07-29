import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  containerStyles,
  questionStyles,
  logoStyles,
  headerStyles,
  questionTextStyles,
  logoOuterStyles,
} from './styles'

export interface HelpBlockProps {
  question: string
  className?: string
}

export const HelpBlock: React.FC<HelpBlockProps> = props => {
  return (
    <aside className={props.className} css={[containerStyles]}>
      <header css={headerStyles}>
        <div css={logoOuterStyles}>
          <div css={logoStyles}>
            <FontAwesomeIcon icon={['far', 'lightbulb']} size="lg" />
          </div>
        </div>
        <h2 css={questionStyles}>{props.question}</h2>
      </header>
      <section css={questionTextStyles}>{props.children}</section>
    </aside>
  )
}
