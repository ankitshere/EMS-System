import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Head = () => {
  return (
    <div className='flex item-center justify-between  item-center   '>
        <h1 className='text-2xl font-bold'>Hello <br />   <span className='text-4xl font-bold'> Ankit 👋</span> </h1>
     <button className='bg-blue-500 px-4 h-8 rounded-xl border-none font-sm cursor-pointer in-active:*:scale-95  mt-4'> <i className="ri-logout-box-r-line"></i>Log Out </button>
    </div>
  )
}

export default Head