import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

const OperationsBtns = () => {

  function confirmDelete() {
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
  return (
    <div className='d-flex flex-row justify-center align-center'>
      <div className='del__oper'>
        <button className="Delete__btn" onClick={confirmDelete}><span className='text'>Delete</span><span className="icon"><FontAwesomeIcon icon={faTrash} /></span></button>
      </div>
      <div className='Edit__oper mx-2'>
        <button className="Edit__btn"><span className='text'>Edit</span><span className="icon">
          <FontAwesomeIcon icon={faPenSquare} />
        </span>
        </button>
      </div>
    </div>
  )
}

export default React.memo(OperationsBtns)