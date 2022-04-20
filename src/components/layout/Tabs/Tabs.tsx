import { Children, isValidElement, ReactElement, PropsWithChildren } from 'react'

import { TabLink } from '../../buttons/TabLink/TabLink'
import { useTheme } from '../../../hooks/useTheme'

import { defaultTabSyles } from './styles'

export interface TabsProps {
  className?: string
}

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const theme = useTheme()
  const children = Children.toArray(props.children)
    .filter(child => child != null)
    .filter(child => isValidElement(child))
    .filter(child => !Array.isArray(child))
    .filter(child => typeof child !== 'string' || typeof child !== 'boolean' || typeof child !== 'number')
    .filter((child: ReactElement) => child.type === TabLink)

  if (children.length < Children.count(props.children)) {
    console.warn('Tabs component accepts only TabLink components as children.')
  }

  if (children.length < 1) {
    console.error('Tabs component needs at least one TabLink child to display something.')
    return null
  }

  return (
    <div className={props.className} css={[defaultTabSyles(theme)]}>
      {children}
    </div>
  )
}
