import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

iconLibrary.add(fas, fab)

export { Button } from './buttons/Button/Button.jsx'
export { ThemeProvider } from './contexts/ThemeContext.js'
export { RadioButton } from './forms/Radio/RadioButtons.jsx'
