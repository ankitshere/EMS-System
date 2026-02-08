import React from 'react'

const CompleteTAsk = (elem) => {
  
  return (
<div className='bg-blue-300 shrink-0 w-3/14 rounded-2xl  h-full py-4 px-4  relative    '>
            <div className='flex  flex-row justify-between item-center  '> 
                <button className='bg-blue-400  font-bold  text-blue-900 rounded-[15px] px-4 py-1 backdrop-blur-md 
               border border-white/20 '>{elem.data.category}</button>
            <h2 className='text-sm font-semibold  '>{elem.data.date}</h2>
            </div>
           <div className='flex flex-col item-center gap-4'>
             <h3 className='text-2xl font-semibold  mt-5'> {elem.data.title}</h3>
            <p className='text-sm   -mt-2  '>{elem.data.description}</p>
               
           </div>
           <div className='absolute bottom-2  w-full flex  item-center'   >
             <h1 className=' text-blue-950 px-15 py-1 rounded-2xl bg-white/10 backdrop-blur-md 
               border border-white/20 
                shadow-lg  '>Complited</h1>
           </div>
            </div>
  )
}

export default CompleteTAsk