import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './styles/App.css'
import Users from './Pages/Users';
import AddBtn from './Pages/AddBtn';
function App() {
  return (
    <div className="App">
      <div className='container'>
      <AddBtn/>
       <Users/>
      </div>
    </div>
  );
}

export default App;
