import React, { useEffect, useRef, useState } from 'react'
import "../styles/main.css"
import OperationsBtns from './Components/OperationsBtns'
import { useDispatch, useSelector } from 'react-redux';
import { GetAPi } from '../Redux/Crud/GetSlice';
import AddBtn from './Components/AddBtn';
import Splash from './Components/Splash';
import { searchAbout } from '../Redux/Crud/SearchSlice';
const Users = () => {
      // data of all users
      let DataOfUsers = useSelector(state => state.usersData.allUsers)
      let loading = useSelector(state => state.usersData.loading)
      let [searchValue,setSearchValue]=useState("")
      let [focusSearch,setFocus]=useState(false)
      let searchRef=useRef();
      // console.log(searchValue)
      const dispatch=useDispatch()
      // const [tempData, setTempdata] = useState()
      useEffect(()=>{
        dispatch(GetAPi())
      },[dispatch])
function searchFn(e){
  console.log(e.target.defaultValue)
  if(e.keyCode === 13){
    // console.log(e.target.value)
    dispatch(searchAbout(e.target.defaultValue))
  }if(e.keyCode===	8 && e.target.defaultValue===''){
    console.log("hii")
    dispatch(GetAPi())
  }
}
useEffect(()=>{
  // searchRef.current.focus();
  setFocus(true)
  let dobounceSearch=setTimeout(()=>{
    if(searchValue){
      dispatch(searchAbout(searchValue))
    }
  },1000)
  return ()=>{
    clearTimeout(dobounceSearch)
  }
},[searchValue,dispatch])
      // dispatch(GetAPi())
      // console.log("Data from get",DataOfUsers)
  return (
    <>
    {loading?<Splash/>:
    <>
      <AddBtn />
      <div className="row">
        <div className="col-12">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-sm-3 col-xs-12">
                            <h4 className="title">Users</h4>
                        </div>
                        <div className="col-sm-9 col-xs-12 text-right">
                            <div className="btn_group">
                                <input type="search" className="form-control m-auto" placeholder="Email , Name , Phone" onChange={(e)=>setSearchValue(e.target.value)} onKeyUp={(e)=>searchFn(e)} defaultValue={searchValue} ref={searchRef} autoFocus={focusSearch}/>
                                {/* <button className="btn btn-default" title="Reload"><i className="fa fa-sync-alt"></i></button>
                                <button className="btn btn-default" title="Pdf"><i className="fa fa-file-pdf"></i></button>
                                <button className="btn btn-default" title="Excel"><i className="fas fa-file-excel"></i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-body table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Username</th>
                          <th scope="col">E-mail</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Age</th>
                          <th scope="col" className='text-center'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DataOfUsers.length!==0?DataOfUsers.map((item,index) => (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.uname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.age}</td>
                            <td><OperationsBtns currentUser={item}/></td>
                          </tr>)):null
                          }
                      </tbody>
                    </table>
                </div>
                {/* <div className="panel-footer">
                    <div className="row">
                        <div className="col col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
                        <div className="col-sm-6 col-xs-6">
                            <ul className="pagination hidden-xs pull-right">
                            <li><a href="google">{`<`}</a></li>
                                <li className="active"><a href="asd">1</a></li>
                                <li><a href="dad">2</a></li>
                                <li><a href="dasd">3</a></li>
                                <li><a href="dasd">4</a></li>
                                <li><a href="dasd">5</a></li>
                                <li><a href="asd">{`>`}</a></li>
                                </ul>
                                <ul className="pagination visible-xs pull-right">
                                <li><a href="asdad">{`<`}</a></li>
                                <li><a href="sad">{`>`}</a></li>
                                </ul>
                                </div>
                                </div>
                              </div> */}
            </div>
        </div>
    </div>
    </>
    }
    </>
  )
}

export default Users

