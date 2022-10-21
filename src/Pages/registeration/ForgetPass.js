import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPass = () => {
    const router=useNavigate()
    const handelsubmit=(e)=>{
        e.preventDefault();
        // Check on Email...
        if(true){
            router('/changePassword')
        }
    }
  return (
    <div className='container'>
        <form>
            <input type='email' className='' name='email' placeholder='Your Email'/>
            <button type='submit' onClick={(e)=>handelsubmit(e)}>submit</button>
        </form>
    </div>
  )
}

export default ForgetPass