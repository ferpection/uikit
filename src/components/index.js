import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

iconLibrary.add(fas, fab)

export { Button } from './buttons/Button/Button.jsx'
export { ThemeProvider } from './contexts/ThemeContext.js'
export { HeaderLink } from './buttons/HeaderLink.jsx'
export { Header } from './layout/Header/Header.jsx'
export { FerpectionLogo } from './logos/FerpectionLogo.jsx'
