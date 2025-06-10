import React from 'react'

const Input = ({className='' ,...props}) => {

  return (
    <input type="text" 
    className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-100 text-white font-semibold ${className}`}
    
    {...props}
    
    />
  )
}

export default Input
