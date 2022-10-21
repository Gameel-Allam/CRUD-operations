import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePass = () => {
    const router=useNavigate()
    const handelsubmit=(e)=>{
        e.preventDefault();
        // Check on Password...
        if(true){
            router('/')
        }
    }
  return (
    <div>
        <form>
        <input type='password' name='password' placeholder='New Password'/>
        <input type='password' name='password' placeholder='Confirm Password'/>
        <button type='submit' onClick={(e)=>handelsubmit(e)}>Change</button>
        </form>
    </div>
  )
}
export default ChangePass;