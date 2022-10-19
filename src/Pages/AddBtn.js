import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const AddBtn = () => {
  return (
    <>
        <div className='Add__oper my-4'>
            <button className="ADd__btn"><span className='text'>Add</span><span className="icon">
                <FontAwesomeIcon icon={faPlus}/>
                </span>
                </button>
        </div>
    </>
  )
}

export default AddBtn