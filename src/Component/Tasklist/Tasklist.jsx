import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTAsk from './CompleteTAsk'
import NewTAsk from './NewTAsk'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {

   
   
    
    return (
        <div id='TaskList' className=' w-full h-[40vh] mt-6 flex flex-row gap-5 overflow-x-auto py-1  justify-between item-center  flex-nowrap  '>

          {data.tasks.map((elem, index) =>{
             if(elem.active){
               return <AcceptTask key={index} data={elem}/>
             }
             if(elem.completed){
                 return <CompleteTAsk key={index} data={elem}/>
             }
             if(elem.newTask){
                return<NewTAsk key={index} data={elem}/>
                
             }
             if(elem.failed){
                return <FailedTask key={index} data={elem}/>
             }else{
                return null
             }
          })}
            
             {/* <AcceptTask/>  
                <CompleteTAsk/>
                <NewTAsk/>
                <FailedTask/>   
                     */}
           
            
           
           
        </div>
    )
}

export default Tasklist