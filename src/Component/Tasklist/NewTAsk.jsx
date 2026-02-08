import React from 'react'

const NewTAsk = (elem) => {
  console.log(elem)

  return (
   <div className='bg-red-200 shrink-0 w-64 rounded-2xl  h-full py-4 px-4      '>
            <div className='flex  flex-row justify-between item-center  '>
                <button className='bg-red-300  font-bold  text-red-950  rounded-[15px] px-4 py-1 backdrop-blur-md 
               border border-white/20 '>{elem.data.category}</button>
            <h2 className='text-sm font-semibold  '>{elem.data.date}  </h2>
            </div>
           <div className='flex flex-col item-center gap-4'>
             <h3 className='text-2xl font-semibold  mt-5'> {elem.data.title}</h3>
            <p className='text-sm   -mt-2 text-red-950 '>{elem.data.description}  </p>
              
           </div>
           <div className='flex flex-row justify-between gap-1.5 mt-10'>
              <button className=' text-red-950 px-2 py-1 text-[15px] rounded-2xl bg-blue-300 backdrop-blur-md 
               border border-white/20 
                shadow-lg  '>Accept </button>
                  <button className=' text-red-950 px-2 py-1 text-[15px] rounded-2xl bg-red-400    backdrop-blur-md 
               border border-white/20 
                shadow-lg  '>Reject</button>
           </div>
            </div>
  )
}

export default NewTAsk