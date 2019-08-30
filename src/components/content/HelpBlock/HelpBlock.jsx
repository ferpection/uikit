import React from 'react'
import propTypes from 'prop-types'

import { containerStyles, questionStyles } from './styles';

export const HelpBlock = (props) => {
  return (
    <aside css={[containerStyles]}>
      <header>
        <h2 css={questionStyles}>{props.question}</h2>
      </header>
      <section>
        {props.children}
      </section>
    </aside>
  )
}

HelpBlock.propTypes = {
  question: propTypes.string.isRequired
}
