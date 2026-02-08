import React, { useState } from 'react'




const CreateTask = () => {

    
    const [newTask, setnewTask] = useState({})

   const submitHandler = (e) => {
    e.preventDefault()
 setnewTask({Tasktitle,TaskDate,TaskCategory,TaskAssignto,TaskDescription,active:true,completed:false,newTask:true,failed:false})

const data =JSON.parse(localStorage.getItem("employees"))
   
  data.forEach(function(elem){
    if(TaskAssignto==elem.firstName){
elem.tasks.push(newTask)
elem.taskNumber.newTask=elem.taskNumber.newTask+1
console.log(elem)
    }   
  })
  console.log(data)

  setTasktitle("")
  setTAskDate("")
  setTaskAssignto("")
  setTaskCatagory("")
  setTaskDescription("")
}


    const [Tasktitle, setTasktitle] = useState("")
const [TaskDate, setTAskDate] = useState("")
const [TaskAssignto, setTaskAssignto] = useState("")
const [TaskCategory, setTaskCatagory] = useState("")
const [TaskDescription, setTaskDescription] = useState("")
  return (
    <div className='mt-8 '>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='bg-gray-100 flex rounded-[5px]  gap-30 justify-between  py-5 px-8 items-center '>
                    <div className=' w-1/3  h-1/2 '>
                        <div className='flex flex-col py-1 '>
                            <h1 className=' text-[16px] font-semibold'>Task Title </h1>
                            <input type="text" 
                            value={Tasktitle} 
                            onChange={(e)=>{
                                setTasktitle(e.target.value)
                            }}
                            placeholder='Make a UI Design ' className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                        <div className='flex flex-col py-1  '>
                            <h1  className=' text-[16px] font-semibold'>Date </h1>
                            <input type="date"
                            value={TaskDate}
                            onChange={(e)=>{
                                setTAskDate(e.target.value)
                            }}
                             className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                        <div  className='flex flex-col py-1  '>
                            <h1 className=' text-[16px] font-semibold'>Asign To</h1>
                            <input type="text" 
                            value={TaskAssignto}
                            onChange={(e)=>{
                                setTaskAssignto(e.target.value)
                            }}
                            placeholder='Employee name ' className='border w-full rounded-[5px] font-medium p-1'  />
                        </div>
                        <div  className='flex flex-col py-1  '>
                            <h1 className=' text-[16px] font-semibold'>Category </h1>
                            <input type="text"  value={TaskCategory}  
                               onChange={(e)=>{
                                setTaskCatagory(e.target.value)
                               }}
                            placeholder='Design, dev, etc. ' className='border w-full rounded-[5px] font-medium p-1' />
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col gap-1 '>
                        <h1 className=' text-[18px] font-semibold'>Description</h1>
                        <textarea name="" id=""  
                        value={TaskDescription}  
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                        
                        cols="10" rows="7" className=' flex items-center border w-full rounded-[5px] font-medium p-1 '></textarea>
                        <button className=' bg-blue-600 rounded-[5px] py-1 text-white font-semibold '>Create Task </button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask