import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black h-10 opacity-75 flex items-center '>
        <div className='max-w-5xl px-4 mx-auto w-full justify-between flex items-center'>
        <p className='text-xs flex items-center gap-1'>Made With <span className='text-sm text-red-500'>&hearts;</span> by Hrikdipta kundu</p>
        <p className='text-xs'> &copy; Hrikdipta Kundu 2024</p>
        </div>
    </div>
  )
}

export default Footer
