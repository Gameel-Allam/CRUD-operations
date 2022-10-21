import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
// import { getAccessToken } from '../../../redux/Autorization/AuthLogin'
import {getAccessToken} from '../../Redux/Autorization/AuthLogin'
export const Login = () => {
  const router=useNavigate()
  const dispatch=useDispatch()
  let {validUser}=useSelector(state=>state.authoUser)
  const [identifier,setIdentifier]=useState(null)
  const [password,setpassword]=useState(null)
  let identifierRef=useRef();
  let passwordRef=useRef();
  const handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(getAccessToken({"identifier":`${identifier}`,"password": `${password}`}))
    console.log(validUser,"from submit")
    if(validUser){
      router('/')
    }
  }
// Debounce for limit render
const identifierCheck=async(e)=>{
    setIdentifier(e.target.value)
}
const passwordCheck=async(e)=>{
    setpassword(e.target.value)
}
  return (
    <div className='container h-80 d-flex justify-center align-items-center'>
    <form className='mx-auto w-full md:w-4/12 d-flex flex-col' onSubmit={(e)=>handelSubmit(e)}>
    <input type='email' name='email'  placeholder='Your Email' className='mb-2' onChange={(e)=>identifierCheck(e)}/>
    <input type='password' name='password'  placeholder='Your Password' className='mb-2'onChange={(e)=>passwordCheck(e)}/>
    <button type='submit' className='border-2 bg-slate-500'>submit</button>
    <div className='logLinks d-flex flex-col'>
        <NavLink to='/register' className='self-start decoration-transparent'>Signup</NavLink>
        <NavLink to='/resetPasseord' className='self-start decoration-transparent'>Forget Password ?</NavLink>
       </div>
    </form>
    </div>
  )
}
