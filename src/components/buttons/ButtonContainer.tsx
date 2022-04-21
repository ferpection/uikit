import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  to?: string
}

export function ButtonContainer(props: PropsWithChildren<ButtonContainerProps>) {
  const { to, ...args } = props

  if (typeof to !== 'string') {
    return <button {...args}>{props.children}</button>
  }

  if (to.includes('https://') || to.includes('http://') || to.includes('//')) {
    return (
      <a {...args} href={to}>
        {props.children}
      </a>
    )
  }

  return (
    <Link {...(args as any)} to={to}>
      {props.children}
    </Link>
  )
}
