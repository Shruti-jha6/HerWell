import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { MdAdd } from 'react-icons/md'
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom'
import axiosInstance from "../../utils/axiosInstance";
import "../../../src/blog.css"
import Footer from '../../components/Footer/Footer';
const Blog = () => {

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

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const truncateDescription = (desc, length = 100) => {
    if (desc.length > length) {
      return desc.substring(0, length) + "...";
    }
    return desc;
   };

  return (
    <>
      <Navbar userInfo={userInfo}/>

      <div className="blog-container">
      <h1>Women's Health</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} />
            <h2>{truncateDescription(article.title, 50)}</h2>
            <p>{truncateDescription(article.description, 120)}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
        <div className="see-all-btn-container">
          <button 
            className="see-all-btn"
            onClick={() => navigate("/all-articles")}  // Adjust the route as per your app's routing
          >
            View All
          </button>
        </div>
    </div>
     <Footer /> 
    </>
  )
}

export default Blog