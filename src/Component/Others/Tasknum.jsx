import React from 'react'

const Tasknum = (props) => {
    return (
        <>
        <div className=' w-full   flex  flex-row gap-5  justify-between      py-10'>
            <div className=' bg-red-200  w-1/5 rounded-2xl  p-3  '>
                <h1 className='   flex flex-col  item-start text-4xl font-bold px-3'>{props.data.taskNumber.newTask}
                    <span className=' text-xl  font-semibold '>New Task </span>
                </h1> 
            </div>
            <div className=' bg-blue-200  w-1/5 rounded-2xl  p-3  '>
                <h1 className='   flex flex-col  item-start text-4xl font-bold px-3'>3{props.data.taskNumber.completed}
                    <span className=' text-xl  font-semibold '>Completed </span>
                </h1> 
            </div>
            <div className=' bg-green-200  w-1/5 rounded-2xl  p-3  '>
                <h1 className='   flex flex-col  item-start text-4xl font-bold px-3'>{props.data.taskNumber.active}
                    <span className=' text-xl  font-semibold '>Accepted </span>
                </h1> 
            </div>
            <div className=' bg-yellow-200  w-1/5 rounded-2xl  p-3  '>
                <h1 className='   flex flex-col  item-start text-4xl font-bold px-3'>1{props.data.taskNumber.failed}
                    <span className=' text-xl  font-semibold '>Failed</span>
                </h1> 
            </div>
          
            
           
        </div>
         <div className=' flex justify-between  item-center items-baseline-last  px-4 py-1'>
                <h1 className='text-xl font-semibold'>Active Tasks</h1>
                <div className='h-px w-[80%] bg-gray-500 '></div>
                <h2 className=' text-[12px] font-semibold text-gray-500 '>JANUARY 2026</h2>
            </div>
            </>
    )
}

export default Tasknum