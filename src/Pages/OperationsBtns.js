import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
const OperationsBtns = () => {
  return (
    <div className='d-flex flex-row justify-center align-center'>
        <div className='del__oper'>
            <button className="Delete__btn"><span className='text'>Delete</span><span className="icon"><FontAwesomeIcon icon={faTrash}/></span></button>
        </div>
        <div className='Edit__oper mx-2'>
            <button className="Edit__btn"><span className='text'>Edit</span><span className="icon">
                <FontAwesomeIcon icon={faPenSquare}/>
                </span>
                </button>
        </div>
    </div>
  )
}

export default OperationsBtns