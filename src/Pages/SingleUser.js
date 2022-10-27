import React from 'react'
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'

const Singleuser = () => {
    const {userId}=useParams();
    let allUsers=useSelector(state=>state.usersData.allUsers)
    let spacificUser= allUsers.filter((el)=>el.id===userId)
    console.log(userId,spacificUser)
  return (
    <div>
        {userId}
    </div>
  )
}

export default Singleuser