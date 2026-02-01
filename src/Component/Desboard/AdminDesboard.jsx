import React from 'react'
import Head from '../Others/Head'
import CreateTask from '../Others/CreateTask'
import AllTAsk from '../Others/AllTAsk'

const AdminDesboard = () => {
    return (
        <div className='w-full h-screen px-10 py-6   bg-white'>
            <Head />
            <CreateTask/>
            <AllTAsk/>
           
        </div>
    )
}

export default AdminDesboard