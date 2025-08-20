import React from 'react'
import { createContext, useState } from 'react'


const UserContext = createContext();

function UserProvider({children}) {
  const [user, setUser] =useState({name:"Narottam"}) 
  const updateUser=(newName)=>{
    setUser({name:newName})
  }
  return <UserContext.Provider value={{user, updateUser}}>
    {children}
  </UserContext.Provider>
}

export {UserProvider,UserContext}

