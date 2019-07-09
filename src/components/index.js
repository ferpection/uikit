import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

iconLibrary.add(fas, fab)

export { Button } from './buttons/Button/Button.jsx'
export { PositiveButton } from './buttons/PositiveButton.jsx'
export { NegativeButton } from './buttons/NegativeButton.jsx'
