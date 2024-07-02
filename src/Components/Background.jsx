import React from 'react'
import Navbar from './Navbar'

const Background = () => {
  return (
    <>
    <div className='z-2 fixed w-screen h-screen'>
    </div>
          <Navbar />
          <h1 className=' leading-none tracking-tighter text-[13vw] text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>Docs</h1>
    </>
  )
}

export default Background
