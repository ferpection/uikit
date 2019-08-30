import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  containerStyles,
  questionStyles,
  logoStyles,
  headerStyles,
  questionTextStyles,
  logoOuterStyles,
} from './styles'

export const HelpBlock = props => {
  return (
    <aside css={[containerStyles]}>
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

HelpBlock.propTypes = {
  question: propTypes.string.isRequired,
}
