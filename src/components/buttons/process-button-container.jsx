import React from 'react'
import { Link } from 'react-router-dom'

export const processButtonContainer = to => props => {
  if (typeof to !== 'string') {
    return <button {...props}>{props.children}</button>
  }

  if (to.includes('https://') || to.includes('http://') || to.includes('//')) {
    return (
      <a {...props} href={to}>
        {props.children}
      </a>
    )
  }

  return (
    <Link {...props} to={to}>
      {props.children}
    </Link>
  )
}
