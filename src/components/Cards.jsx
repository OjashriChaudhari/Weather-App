import React from 'react'

export const Cards = ({children, className=''}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({children, className=''}){
  return(
    <div className={`p-5 pt-14 pb-14 ${className}`}>
      {children}
    </div>
  );
  
}


