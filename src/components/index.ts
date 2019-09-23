import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

iconLibrary.add(fas, fab, far)

export { Button } from './buttons/Button/Button'
export {
  PlaceholderButton,
} from './buttons/PlaceholderButton/PlaceholderButton'
export { ThemeProvider } from './contexts/ThemeContext'
export { ThematicSection } from './layout/ThematicSection/ThematicSection'
export { Header } from './layout/Header/Header'
export { HeaderLink } from './buttons/HeaderLink'
export { FerpectionLogo } from './iconography/FerpectionLogo'
export { FerpectionBadgeIcon } from './iconography/FerpectionBadgeIcon'
export { TextField } from './forms/TextField/TextField'
export { TextFieldList } from './forms/TextFieldList/TextFieldList'
export { SelectField } from './forms/SelectField/SelectField'
export { FormErrors } from './forms/FormErrors/FormErrors'
export { HelpBlock } from './content/HelpBlock/HelpBlock'
