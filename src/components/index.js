import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

iconLibrary.add(fas, fab, far)

export { Button } from './buttons/Button/Button.jsx'
export {
  PlaceholderButton,
} from './buttons/PlaceholderButton/PlaceholderButton.jsx'
export { ThemeProvider } from './contexts/ThemeContext.js'
export { ThematicSection } from './layout/ThematicSection/ThematicSection.jsx'
export { Header } from './layout/Header/Header.jsx'
export { HeaderLink } from './buttons/HeaderLink.jsx'
export { FerpectionLogo } from './iconography/FerpectionLogo.jsx'
export { TextField } from './forms/TextField/TextField.jsx'
export { TextFieldList } from './forms/TextFieldList/TextFieldList.jsx'
export { SelectField } from './forms/SelectField/SelectField.jsx'
export { FormErrors } from './forms/FormErrors/FormErrors.jsx'
export { HelpBlock } from './content/HelpBlock/HelpBlock.jsx'
