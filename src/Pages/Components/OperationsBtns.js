import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrash,faUser } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'
import EditingDialog from './editingUser'
import {useNavigate } from 'react-router-dom'

const OperationsBtns = (currentUser) => {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  function confirmDelete(id) {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your user has been completely deleted!", {
            icon: "success",
          });
        } else {
          swal("Your user is safe!");
        }
      });
  }
  const router=useNavigate()
  const handleClickView=(id)=>{
    router(`/users/${id}`)
  }
  return (
    <div className='d-flex flex-row justify-center align-center'>
      <div className='del__oper'>
        <button className="Delete__btn" onClick={() => { confirmDelete(currentUser.currentUser.id); }}><span className='text'>Delete</span><span className="icon"><FontAwesomeIcon icon={faTrash} /></span></button>
      </div>
      <div className='Edit__oper mx-2'>
        <button className="Edit__btn" onClick={handleClickOpen}><span className='text'>Edit</span><span className="icon">
          <FontAwesomeIcon icon={faPenSquare} />
        </span>
        </button>
      </div>
      <div className='View__oper mx-2'>
        <button className="View__btn" onClick={()=>handleClickView(currentUser.currentUser.id)}><span className='text'>View</span><span className="icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        </button>
      </div>
      <EditingDialog openDialog={openDialog} handleClose={handleClose} userData={currentUser.currentUser} />
    </div>
  )
}

export default React.memo(OperationsBtns)