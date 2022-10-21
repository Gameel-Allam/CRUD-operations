import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
  let router=useNavigate()
    const {validUser}=useSelector(state=>state.authoUser)
    console.log("valid user status",validUser)    
  return (
    <>
        {!validUser ?children:<Navigate to={'/'}/>}
    </>
  )
}

export default Protected