import React, { createContext, useContext, useEffect } from 'react'
import { getLocalStorage, SetLocalStorage } from '../utiles/localstorage'
import { useState } from 'react'

export const AuthContext=createContext ()

const AuthProvider = ({children}) => {
    
  // localStorage.clear()


  const [UserData, setUserData] = useState(null)

  useEffect(() => {
    SetLocalStorage()
     const {employees,admin}=getLocalStorage()
setUserData({employees,admin})
    
   
  }, [])
  
  return (
    
    <div>
        <AuthContext.Provider value={UserData}>
      {children}    
        </AuthContext.Provider>
  
        </div>
  )
}

export default AuthProvider