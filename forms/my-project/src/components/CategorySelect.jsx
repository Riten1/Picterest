import React, { forwardRef } from 'react'
import { useId } from 'react'

const CategorySelect = ({ label, options, className='', ...props},ref) => {
  const id = useId()

  return (
    <div>
      {label && (
        <label className={className} htmlFor={id} {...props}>{label}</label>
      )}
      <select
      ref={ref}
      {...props}
      className={className}
      id={id}
      >
        {options.map((option) => (
          <option key={option} value={option} >{option}</option>
        ))
        }
      </select>
    </div>
  )
}

export default forwardRef(CategorySelect) 