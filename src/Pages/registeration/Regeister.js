
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
// import { setVaildRegConfPassword, setVaildRegEmail, setVaildRegPassword, setVaildRegUserName } from '../../../redux/VerifyForm/ValidRegisterSlice';
import { setVaildRegConfPassword, setVaildRegEmail, setVaildRegPassword, setVaildRegUserName } from '../../Redux/VerifyForm/ValidRegisterSlice';
const Register = () => {
  const router=useNavigate()
  const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{4,20}$/;
  const Pws_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%]).{8,24}$/;
  const Email_REGEX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // username , password , email refrences
  let userRef=useRef();
  let passwordRef=useRef();
  let emailRef=useRef();
  let confpasswordRef=useRef();
  let [username,setUserName]=useState(null)
  let [password,setPassword]=useState('')
  let [confpassword,setConfPassword]=useState('')
  let [email,setEmail]=useState('')
  // Status OF username , Email , Password From validRegisterSlice
  let dispatch=useDispatch()
  let validUser=useSelector(state=>state.register.validUser)
  let vaildEmail=useSelector(state=>state.register.vaildEmail)
  let validPassword=useSelector(state=>state.register.validPassword)
  let validConfPassword=useSelector(state=>state.register.vaildConfPassword)
  console.log(validConfPassword)
  const handelUsernameCheck=()=>{
    setUserName(userRef.current.value)
    if(USER_REGEX.test(userRef.current.value)){
      dispatch(setVaildRegUserName(true))
    }else{
      dispatch(setVaildRegUserName(false))
    }
  }
  const handelEmailCheck=()=>{
    setEmail(emailRef.current.value)
    console.log(emailRef.current.value,vaildEmail)
    if(Email_REGEX.test(emailRef.current.value)){
      dispatch(setVaildRegEmail(true))
    }else{
      dispatch(setVaildRegEmail(false))
    }
  }
  const handelPasswordCheck=()=>{
    setPassword(passwordRef.current.value)
    console.log(passwordRef.current.value,passwordRef)
    if(Pws_REGEX.test(passwordRef.current.value)){
      dispatch(setVaildRegPassword(true))
    }else{
      dispatch(setVaildRegPassword(false))
    }
    if(passwordRef.current.value === confpasswordRef.current.value){
      dispatch(setVaildRegConfPassword(true))
    }
    else{
      dispatch(setVaildRegConfPassword(false))
    }
  }
 const handelConfirmPasswordCheck=()=>{
  setConfPassword(confpasswordRef.current.value)
  console.log(confpasswordRef.current.value,validConfPassword)
  if(passwordRef.current.value === confpasswordRef.current.value){
    dispatch(setVaildRegConfPassword(true))
  }
  else{
    dispatch(setVaildRegConfPassword(false))
  }
 }
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(userRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    if(vaildEmail && validPassword && validConfPassword &&validUser){
      console.log("succec login")
    }else{
      console.log("Not valid entry")
      return
    }
  }
  return (
    <div className='container d-flex justify-center align-items-center flex-col'>
        <h1 className='Reg__Heading'>Register</h1>
        <form onSubmit={(e)=>handelSubmit(e)} className='d-flex flex-col w-full md:w-6/12'>
          <label htmlFor='user' className='align-self-start'>
            username
            <span>
             {username && (validUser?<FontAwesomeIcon icon={faCheck}/>:'*')}
            </span>
            </label>
            <input 
            type='text'
            name='username'  
            placeholder='username'
            id='user'
            className='Reg__input border-2 mb-2'
            aria-invalid='false'
            aria-describedby='uidnote'
            required
            autoComplete='no'
            ref={userRef}
            onChange={()=>handelUsernameCheck()}
            />
           {username && (validUser ?'': <p className='Error massage self-start text-left' id='uidnote'><FontAwesomeIcon icon={faInfoCircle}/> username must 5 to 24 charachers <br/>must begin with a letter<br/>it may contain letters ,nubmers,underscors</p>)}

           <label htmlFor='email' className='align-self-start'>
            Email
            <span>
             {email && (vaildEmail?<FontAwesomeIcon icon={faCheck}/>:'*')}
            </span>
            </label>
            <input type='email'
             name='email'
             placeholder='Your Email'
             id='email'
             className='Reg__input border-2 mb-2'
             aria-invalid='false'
             aria-describedby='eidnote'
             onChange={()=>handelEmailCheck()}
             required
             ref={emailRef}
             />
             {email && (vaildEmail ?'': <p className='Error massage self-start text-left' id='uidnote'><FontAwesomeIcon icon={faInfoCircle}/> Invalid Email</p>)}

           <label htmlFor='password' className='align-self-start'>
            Password
            <span>
             {password && (validPassword?<FontAwesomeIcon icon={faCheck}/>:'*')}
            </span>
            </label>
            <input 
            type='password' 
            name='password'  
            placeholder='Your Password'
            id='password'
            className='Reg__input border-2 mb-2'
            aria-invalid='false'
            aria-describedby='pidnote'
            onChange={()=>handelPasswordCheck()}
            required
            ref={passwordRef}
            />
            {password && (validPassword ?'': <p className='Error massage self-start text-left' id='pidnote'><FontAwesomeIcon icon={faInfoCircle}/> password must be 8 to 24 charachers <br/>must begin with a contain capital letter<br/>it contains small letters <span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span><span aria-label='hashing'>#</span><span aria-label='dollar sign'>$</span></p>)}
            
            <label htmlFor='confirm' className='align-self-start'>
            Confirm Password
            <span>
             {confpassword && (validConfPassword?<FontAwesomeIcon icon={faCheck}/>:'*')}
            </span>
            </label>
            <input 
            type='password'  
            placeholder='Confirm Your password'
            id='confirm'
            className='Reg__input border-2 mb-2'
            aria-invalid='false'
            aria-describedby='cidnote'
            onChange={()=>handelConfirmPasswordCheck()}
            required
            ref={confpasswordRef}
            />
            {confpassword && (validConfPassword ?'': <p className='Error massage self-start text-left' id='cidnote'><FontAwesomeIcon icon={faInfoCircle}/> Not Equal passwords</p>)}
            <button type='submit' className='border-2 bg-slate-500' disabled={validUser &&validPassword &&vaildEmail &&validConfPassword ? false :true}>Submit</button>
          <p className='ready__question self-start mb-1'>Already have Email?</p>
        <NavLink to='/' className='decoration-transparent font-bold  self-start'>login</NavLink>
        </form>
    </div>
  )
}

export default Register