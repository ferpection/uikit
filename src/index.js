import { library as iconLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

iconLibrary.add(fas, fab)

export { Button } from './button/Button'
export { IconButton } from './button/IconButton'
