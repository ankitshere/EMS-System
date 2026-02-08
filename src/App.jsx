import React, { use, useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDesboard from './Component/Desboard/EmployeeDesboard'
import AdminDesboard from './Component/Desboard/AdminDesboard'
import { getLocalStorage, SetLocalStorage } from './utiles/localstorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedinUserData, setloggedinUserData] = useState(null)
  const authData= useContext(AuthContext)


useEffect(() => {
  const loggedinUser = localStorage.getItem("loggedinUser")
  if (loggedinUser) {
    const userData = JSON.parse(loggedinUser)
    setUser(userData.role)
    if (userData.role === "employee") {
      setloggedinUserData(userData.data)
    }
  }
}, [])

const handlelogin = (email, password) => {
  const { employees, admin } = getLocalStorage()
  const adminUser = admin.find(admin => admin.email === email && admin.password === password)
  if (adminUser) {
    setUser("admin")
    localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }))
    return
  }
  const employeeUser = employees.find(employee => employee.email === email && employee.password === password)
  if (employeeUser) {
    setUser("employee")
    localStorage.setItem("loggedinUser", JSON.stringify({ role: "employee", data: employeeUser }))
    setloggedinUserData(employeeUser)
    return
  }
  alert("Invalid credentials")
}



  return (
    <>
      {!user ? <Login handleLogin={handlelogin} /> :""}
      {user === "admin" ? ( <AdminDesboard changeuser={setUser}    /> ) : user === "employee" ? (<EmployeeDesboard changeuser={setUser} data={loggedinUserData} />) : null}
    </>
  )
}

export default App