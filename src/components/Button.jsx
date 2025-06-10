import React from 'react'

const Button = ({children , className = '', disabled=false, ...props}) => {
  return (
    <button
     className={`bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50  disabled:cursor-not-allowed ${className}`}
     disabled={disabled}
     
     {...props}
    >
      {/* {children} */}

     {disabled && (
    <svg
      className="w-5 h-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  )}
  {disabled ? 'Loading...' : children}      
    </button>
  )
}

export default Button
