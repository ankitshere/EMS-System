import React from 'react'
import Head from '../Others/Head'
import Tasknum from '../Others/Tasknum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDesboard = (props) => {


  return (
    <div className='px-12 py-8    bg-white'>
        <Head data={props.data}  changeuser={props.changeuser}  />   
        <Tasknum data={props.data} />
        <Tasklist data={props.data} />   
    </div>
  )
}

export default EmployeeDesboard