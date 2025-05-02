import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="">
    <h1 className='text-3xl text-amber-300'>Dashboard - -</h1>
    <div>{children}</div>
    </div>
  )
}

export default layout