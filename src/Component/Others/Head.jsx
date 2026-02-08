import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
const Head = (props) => {

// const [username, setusername] = useState("Guest")
// if(!data){
//   setusername("Admin")
// }else{
//   setusername(data.firstName)
// }



const logOUtUser=()=>{
  localStorage.setItem("loggedinUser","")
  // window.location.reload()
    props.changeuser("")
  
}         

  return (
    <div className='flex item-center justify-between  item-center   '>
        <h1 className='text-2xl font-bold'>Hello <br />   <span className='text-4xl font-bold'> {props?.data?.firstName || "Admin"}👋</span> </h1>
     <button  onClick={logOUtUser} className='bg-blue-500 px-4 h-8 rounded-xl border-none font-sm cursor-pointer in-active:*:scale-95  mt-4'> <i className="ri-logout-box-r-line"></i>Log Out </button>
    </div>
  )
}

export default Head