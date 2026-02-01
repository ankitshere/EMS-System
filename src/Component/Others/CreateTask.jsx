import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-8 '>
                <form className='bg-gray-100 flex rounded-[5px]  gap-30 justify-between  py-5 px-8 items-center '>
                    <div className=' w-1/3  h-1/2 '>
                        <div className='flex flex-col py-1 '>
                            <h1 className=' text-[16px] font-semibold'>Task Title </h1>
                            <input type="text" placeholder='Make a UI Design ' className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                        <div className='flex flex-col py-1  '>
                            <h1  className=' text-[16px] font-semibold'>Date </h1>
                            <input type="date" className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                        <div  className='flex flex-col py-1  '>
                            <h1 className=' text-[16px] font-semibold'>Asign To</h1>
                            <input type="text" placeholder='Employee name ' className='border w-full rounded-[5px] font-medium p-1'  />
                        </div>
                        <div  className='flex flex-col py-1  '>
                            <h1 className=' text-[16px] font-semibold'>Category </h1>
                            <input type="text" placeholder='Design, dev, etc. ' className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col gap-1 '>
                        <h1 className=' text-[18px] font-semibold'>Description</h1>
                        <textarea name="" id="" cols="10" rows="7" className=' flex items-center border w-full rounded-[5px] font-medium p-1 '></textarea>
                        <button className=' bg-blue-600 rounded-[5px] py-1 text-white font-semibold '>Create Task </button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask