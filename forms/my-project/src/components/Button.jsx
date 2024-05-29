import React from 'react'

const Button = ({name,type, className='', ...props}) => {
  return (
    <button type={type} className={`border-black solid${className}`} {...props}>{name}</button>
  )
}

export default Button