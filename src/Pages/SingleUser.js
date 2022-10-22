import React from 'react'
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'

const Singleuser = () => {
    const {userId}=useParams();

    console.log(userId)
    const allusers=useSelector(state=>state.usersData.allusers)
    console.log(allusers)
  return (
    <div>
        {userId}
    </div>
  )
}

export default Singleuser