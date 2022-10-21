import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Admin = ({children}) => {
  const {validUser}=useSelector(state=>state.authoUser)
  return (
    <>
        {validUser ?children:<Navigate to='/login'/>}
    </>
  )
}

export default Admin