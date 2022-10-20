import React, { useEffect } from 'react'
import "../styles/main.css"
import OperationsBtns from './OperationsBtns'
import { useDispatch, useSelector } from 'react-redux';
import { GetAPi } from '../Redux/GetSlice';
const Users = () => {
  // data of all users
  let DataOfUsers=useSelector(state=>state.usersData.allUsers)
  console.log(DataOfUsers)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GetAPi())
  },[dispatch])
  return (
<>
 <table className="table my-4">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Grade</th>
      <th scope="col">Level</th>
      <th scope="col" className='text-center'>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td><OperationsBtns/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Thornton</td>
      <td><OperationsBtns/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td><OperationsBtns/></td>
    </tr>
  </tbody>
</table>
              </>
  )
}

export default Users