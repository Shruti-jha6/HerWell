import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { MdAdd } from 'react-icons/md'
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom'
import axiosInstance from "../../utils/axiosInstance";
const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if(response.data && response.data.user){
        setUserInfo(response.data.user);
      }
    } catch (error){
      if(error.response.status === 401){
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  },[]);

  return (
    <>
      <Navbar userInfo={userInfo}/>
    </>
  )
}

export default Home