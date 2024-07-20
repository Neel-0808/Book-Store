import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {

    const {logOut} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/home";
    const handleLogout = ()=>{
        logOut().then(() => {
  // Sign-out successful.
    alert("Logout successful")
    navigate('/', { replace: true });

}).catch((error) => {
  // An error happened.
});
}

  return (
    <div className='h-screen bg-teal-200 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 rounded text-white' onClick={handleLogout}>Log Out</button>
        </div>
  )
}

export default Logout