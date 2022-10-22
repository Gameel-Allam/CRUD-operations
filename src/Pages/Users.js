import React, { useEffect, useState } from 'react'
import "../styles/main.css"
import OperationsBtns from './Components/OperationsBtns'
import { useDispatch, useSelector } from 'react-redux';
import { GetAPi } from '../Redux/GetSlice';
import AddBtn from './Components/AddBtn';
const Users = () => {
  // data of all users
  let DataOfUsers = useSelector(state => state.usersData.allUsers)
  console.log(DataOfUsers)
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(GetAPi())
  // },[dispatch])
  const [tempData, setTempdata] = useState([{ id: 1, userName: "Ahmed", eMail: "ali@gmail.com", phone: "01222333444", DOB: "1-1-2000" },
  { id: 2, userName: "Omar", eMail: "omar@gmail.com", phone: "01222333445", DOB: "2-2-2000" },
  { id: 3, userName: "Mohamed", eMail: "mohamed@gmail.com", phone: "01222333446", DOB: "3-3-2000" },
  { id: 4, userName: "Kaream", eMail: "kareem@gmail.com", phone: "01222333447", DOB: "4-4-2000" }])

  return (
    <>
      <AddBtn />
      <table className="table my-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Date of Birth</th>
            <th scope="col" className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tempData.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
              <td><OperationsBtns currentUser={item}/></td>
            </tr>))}
        </tbody>
      </table>
    </>
  )
}

export default Users