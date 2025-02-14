


import './Home.css';
import { useNavigate } from 'react-router-dom';
import Chats from './Chats'; // Import the chat component
import Navbar from '../../components/Navbar/Navbar';
import axiosInstance from "../../utils/axiosInstance";
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [activeCommunity, setActiveCommunity] = useState(null); // Track which community is active
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();

  
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };
  const communities = [
    { id: 1, name: "Mental Health" },
    { id: 2, name: "Menstrual issues" },
    { id: 3, name: "Skin care" },
    { id: 4, name: "Gut Health" },
    { id: 5, name: "Breast Cancer" },
  ];

  const handleJoin = (community) => {
    setActiveCommunity(community); // Set the active community on join button click
  };

  return (
    <><Navbar userInfo={userInfo} />
    <div className="community">
      {/* Show community options if no active chat */}
      {!activeCommunity ? (
        <>
          <h2 className="community-title">Join a Community</h2>

          {/* Introduction Section */}
          <div className="benefits-section">
            <div className="benefit">
              <h3>Share Your Thoughts</h3>
              <p>
                Expressing your feelings and experiences can help lighten your emotional load.
                Join a community where you can freely share and connect with others who understand.
              </p>
            </div>
            <div className="benefit">
              <h3>Find Support</h3>
              <p>
                Being part of a community provides you with a support system. Connect with people who
                can relate to your struggles and offer helpful advice.
              </p>
            </div>
            <div className="benefit">
              <h3>Learn and Grow</h3>
              <p>
                Engage in discussions that can help you gain new perspectives and insights.
                Sharing experiences fosters growth and resilience.
              </p>
            </div>
          </div>

          {/* Community Options */}
          <div className="community-options">
            {communities.map((community) => (
              <div key={community.id} className="community-card">
                <p>{community.name}</p>
                <button className="join-button" onClick={() => handleJoin(community.name)}>
                  Join Chat
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Show the chat box when a community has been joined
        <div className="chat-section">
          <h2>{`Community Chat: ${activeCommunity}`}</h2>
          <Chats /> {/* Render the chat component here */}
          <button className="leave-button" onClick={() => setActiveCommunity(null)}>
            Leave Chat
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Home;