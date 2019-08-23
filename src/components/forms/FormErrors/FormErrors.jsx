import React from 'react'

export const FormErrors = (props) => {
  const { errors } = props
  return (
    <>
      {Object.keys(errors).map(errorName => (
        <p key={errorName}>{errorName}</p>
      ))}
    </>
  )
}
