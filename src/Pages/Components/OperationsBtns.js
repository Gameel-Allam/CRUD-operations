import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrash,faUser } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'
import EditingDialog from './editingUser'
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DeleteAPi } from '../../Redux/Crud/DeleteSlice'
import { viewFn } from '../../Redux/Crud/ViewSlice'

const OperationsBtns = (currentUser) => {
const dispatch=useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = useCallback(() => {
    setOpenDialog(true);
  },[]);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  },[]);
  function confirmDelete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(DeleteAPi({id:id}))
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
    dispatch(viewFn(id))
  }
  return (
    <div className='d-flex flex-row justify-center align-center'>
      <div className='del__oper'>
        <button className="Delete__btn" onClick={() => { confirmDelete(currentUser.currentUser.id); }}><span className='text'></span><span className="icon"><FontAwesomeIcon icon={faTrash} /></span></button>
      </div>
      <div className='Edit__oper mx-2'>
        <button className="Edit__btn" onClick={handleClickOpen}><span className='text'></span><span className="icon">
          <FontAwesomeIcon icon={faPenSquare} />
        </span>
        </button>
      </div>
      <div className='View__oper'>
        <button className="View__btn" onClick={()=>handleClickView(currentUser.currentUser.id)}><span className='text'></span><span className="icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        </button>
      </div>
      <EditingDialog openDialog={openDialog} handleClose={handleClose} userData={currentUser.currentUser} />
    </div>
  )
}

export default React.memo(OperationsBtns)