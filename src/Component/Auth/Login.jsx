import React, { useState } from 'react'

const Login = () => {

const [email, setemail] = useState("")
const [password, setpassword] = useState("")
    
const Submithandler=(e)=>{
    e.preventDefault()
    console.log("the email s",email)
    console.log("the password", password)
    setemail("")
    setpassword("")

    
}

  return (
    <div className='flex h-screen w-screen justify-center items-center  bg-gray-200' >
<div className=' border-sky-100 rounded-2xl  bg-white shadow-5xl relative'>
        <h1 className=' w-fit  absolute top-[10%] left-[40%]  text-3xl font-bold '>LogIn  </h1>
<form  onSubmit={(e)=>{
    Submithandler(e)
}}
className='flex flex-col items-center justify-center px-15 py-25 gap-5  '>
    

 <input     
 value={email}
  onChange={(e)=>{
    setemail(e.target.value)
 } }
 
 type="email"  required name="" id="" placeholder='Enter Your Email' className='px-15 py-1.5 outline rounded-2xl  active:rounded-xl' />
  
 <input
       value={password}
       onChange={(e)=>{
        setpassword(e.target.value)
       }}
 required
  type="password" name="" id="" placeholder='Enter the password' className='px-15 py-1.5 outline rounded-2xl' />
 <button type="submit" className='bg-blue-600 rounded-4xl border-none shadow-2xl px-30 py-1 '>
    Login 
 </button>
</form>
</div>
    </div>
  )
}

export default Login