// import React, { useState } from 'react'
// import ProfileInfo from '../cards/ProfileInfo'
// import {useNavigate } from 'react-router-dom'

// const Navbar = ({userInfo}) => {
//   const [searchQuery,setSearchQuery] = useState("");

//   const navigate= useNavigate()

//   const onLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   }

//   const handleSearch = () => {
//   };

//   const onClearSearch = () => {
//     setSearchQuery("")
//   };

//   return (
//     < div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
//         <h2 className="text-xl font-medium text-black py-2">Adira</h2>

//         <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../cards/ProfileInfo';
import { FaHome, FaCalendarAlt, FaStethoscope, FaBook } from 'react-icons/fa';

const Navbar = ({ userInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
        Adira
      </h2>
      
      {/* Navigation Links */}
      <div className="flex gap-6">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-700 hover:text-black">
          <FaHome /> Home
        </button>
        <button onClick={() => navigate('/events')} className="flex items-center gap-2 text-gray-700 hover:text-black">
          <FaCalendarAlt /> Event
        </button>
        <button onClick={() => navigate('/docs')} className="flex items-center gap-2 text-gray-700 hover:text-black">
          <FaStethoscope /> Doctor
        </button>
        <button onClick={() => navigate('/blogs')} className="flex items-center gap-2 text-gray-700 hover:text-black">
          <FaBook /> Blog
        </button>
        
      </div>

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
