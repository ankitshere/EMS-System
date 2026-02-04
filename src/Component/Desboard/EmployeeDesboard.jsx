import React from 'react'
import Head from '../Others/Head'
import Tasknum from '../Others/Tasknum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDesboard = (props) => {
  // console.log(props)
  return (
    <div className='px-12 py-8    bg-white'>
      
        <Head  />
        <Tasknum />
        <Tasklist  />
    </div>
  )
}

export default EmployeeDesboard