import React, { forwardRef } from 'react'
import { useId } from 'react'

const Input = ({label, type, className='', placeholder, ...props}, ref) => {
  const id = useId();

  return (
    <div>
      {label && (<label>{label}</label>)}
      <input type={type} placeholder={placeholder} ref={ref} className={`${className}`} id={id} {...props}></input>
    </div>

  )
}

export default forwardRef(Input)