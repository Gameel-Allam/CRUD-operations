import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddingDialog from './creatingUser';
const AddBtn = () => {
  const [newUser, setNewUser] = React.useState({ uname: "",email:"", phone: "", age: "" });

  const onChange = (e) => {
    const { value, id } = e.target;
    // console.log(value,"ourtarget")
    setNewUser({ ...newUser, [id]: value });
  }

  const [openDialog, setOpenDialog] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <div className='Add__oper my-4'>
        <button className="Add__btn md:ml-auto" onClick={handleClickOpen}><span className='text'>Add</span><span className="icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        </button>
        <AddingDialog openDialog={openDialog} handleClose={handleClose} data={newUser} onChange={onChange} />
      </div>
    </>
  )
}

export default React.memo(AddBtn)
