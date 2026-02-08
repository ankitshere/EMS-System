import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
const AllTAsk = () => {
    const authdata = useContext(AuthContext)
    return (
             
        <div className=' bg-gray-300 rounded-2xl  w-full h-2/4 py-4 flex flex-col gap-2 justify-between  mt-3  '>
            <div className='  flex flex-row justify-between item-center text-center  rounded-[5px] font-medium px-5  '>
                <h1 className='w-1/7 bg-cyan-600 border- px-1.25 rounded-[5px]'>Employee Name </h1>
                <h2 className='w-1/7 bg-cyan-600 border- px-1.25 rounded-[5px]'>New Tasks</h2>
                <h5 className=' w-1/7  bg-cyan-600 border- px-1.25 rounded-[5px]   '>Active </h5>
                <h5 className='  w-1/7   bg-cyan-600 border- px-1.25 rounded-[5px] '>completed</h5>
            </div>
            {authdata.employees.map(function (elem, idx) {
                return <div  key={idx} className='px-5 ' > 
                    <div key={idx} className='bg-gray-200 flex flex-row justify-between item-center overflow-auto  rounded-[5px] font-medium p-1 px-10 '>
                    <h1 className='w-1/5'>{elem.firstName} </h1>
                    <h2 className='w-1/5'>{elem.taskNumber.newTask}</h2>            

                    <h5 className=' w-1/5'>{elem.taskNumber.active} </h5>
                    <h5 className=' '>{elem.taskNumber.completed}</h5>
                </div>  
                </div>            
            })}


        </div>
    )
}

export default AllTAsk