import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axiosInstance from "../../utils/axiosInstance";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/get-user");
        if (response.data?.user) setUserInfo(response.data.user);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/login");
        }
      }
    };
    getUserInfo();
  }, []);

  const communities = [
    { id: 1, name: "Mental Health", image: "/images/img7.webp" },
    { id: 2, name: "Menstrual Issues", image: "/images/img2.webp" },
    { id: 3, name: "Skin Care", image: "/images/img4.png" },
    { id: 4, name: "Gut Health", image: "/images/img9.webp" },
    { id: 5, name: "Breast Cancer", image: "/images/img1.webp" },
    { id: 6, name: "Menopause", image: "/images/img10.webp" },
  ];

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="min-h-screen bg-gradient-to-b from-white-100 to-white-50 flex items-center justify-center px-4 mt-20 mb-20">
        <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl p-6 md:p-10">

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Join a Community
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Share Your Thoughts", text: "Express your emotions in a safe space." },
              { title: "Find Support", text: "Connect with people who understand you." },
              { title: "Learn and Grow", text: "Gain new perspectives and insights." },
            ].map((benefit, index) => (
              <div key={index} className="bg-pink-50 p-5 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-700">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {communities.map((community) => (
              <div
                key={community.id}
                className="bg-pink-100 hover:bg-pink-200 transition p-5 rounded-xl shadow-lg text-center"
              >
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full max-h-50 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">{community.name}</p>
                <button
                  className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                  onClick={() => navigate(`/chat?community=${community.name}`)}
                >
                  Join Chat
                </button>
              </div>
            ))}
          </div>

          {/* Centered "View All" Button */}
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition">
              View all
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
