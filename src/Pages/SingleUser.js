import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import { viewFn } from '../Redux/Crud/ViewSlice';
import "../styles/main.css"
const Singleuser = () => {
    const {userId}=useParams();
    let allUsers=useSelector(state=>state.usersData.allUsers)
    // let spacificUser= allUsers.filter((el)=>el.id==userId)
    let fetchedUser=useSelector(state=>state.viewedUser.singleUser);
    console.log(userId,fetchedUser)
    const dispatch=useDispatch()
    useEffect(()=>{
      console.log("work")
      dispatch(viewFn(userId))
    },[dispatch])
  return (
    <div>
        <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius mx-auto" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600">{fetchedUser.uname}</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{fetchedUser.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{fetchedUser.phone}</h6>
                        </div>
                        <div className="col-sm-6 my-2">
                          <p className="m-b-10 f-w-600">Age</p>
                          <h6 className="text-muted f-w-400">{fetchedUser.age}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Recent</p>
                          <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleuser