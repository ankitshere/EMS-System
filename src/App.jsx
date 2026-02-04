import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDesboard from './Component/Desboard/EmployeeDesboard'
import AdminDesboard from './Component/Desboard/AdminDesboard'
import { getLocalStorage, SetLocalStorage } from './utiles/localstorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // SetLocalStorage()
  //     getLocalStorage()

  // })

  const [user, setUser] = useState(null)
  
  const [loggedinUserData, setloggedinUserData] = useState(null)
 
   const data =useContext(AuthContext)

  const authData= useContext(AuthContext)
  console.log()


// useEffect(() => {
//  if(authData){
//   const loginUser=getLocalStorage("loggedinUser")
//   if(loginUser){
//     setUser(loginUser.role)
//   }
//  }


// }, [authData])



  const handleLogin=(email,password)=>{
    if( email== "admin@mail.com" && password =="123" ){
   setUser({role:"admin"})
   localStorage.setItem("loggedinUser",JSON.stringify({role:"admin"}))
    } else if ( authData){
      const employee =authData && authData.employees.find((e)=>email== e.email && e.password== password)
      // console.log(employee)
      if(employee){
     setUser({ role:"employee"}) 
     setloggedinUserData(employee)
     console.log(employee)
   localStorage.setItem("loggedinUser",JSON.stringify({role:"employee"}))

      }
   
        
    }else{
      alert("invalid data")
    }

  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDesboard />
      ) : user === "employees" ? (
        <EmployeeDesboard data={loggedinUserData} />
      ) : null}
    </>
  )
}

export default App