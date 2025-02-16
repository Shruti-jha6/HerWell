import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import five from './five.jpg';
import six from './six.jpg';
import Navbar from '../../components/Navbar/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu';
import axiosInstance from "../../utils/axiosInstance";
import React, { useState, useEffect } from 'react'

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    rating: 4.9,
    image: one,
    location: "Mumbai",
    experience: "15 years",
    contact: "dr.ananya@example.com"
  },
  {
    id: 2,
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    rating: 4.7,
    image: two,
    location: "Delhi",
    experience: "12 years",
    contact: "dr.raj@example.com"
  },
  {
    id: 3,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: three,
    location: "Bangalore",
    experience: "10 years",
    contact: "dr.priya@example.com"
  },
  {
    id: 4,
    name: "Dr. Neha Gupta",
    specialization: "Orthopedic Surgeon",
    rating: 4.6,
    image: four,
    location: "Hyderabad",
    experience: "8 years",
    contact: "dr.neha@example.com"
  },
  {
    id: 5,
    name: "Dr. Anil Mehta",
    specialization: "Pediatrician",
    rating: 4.8,
    image: five,
    location: "Chennai",
    experience: "20 years",
    contact: "dr.anil@example.com"
  },
  {
    id: 6,
    name: "Dr. Sunita Rao",
    specialization: "Gynecologist",
    rating: 4.7,
    image: six,
    location: "Kolkata",
    experience: "18 years",
    contact: "dr.sunita@example.com"
  }
];

const DoctorsList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? doctor.specialization === category : true)
  );

  return (
    <>
      <Navbar userInfo={userInfo} />
      <SideMenu search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
      <div className="w-full min-h-full flex flex-col items-center p-5 bg-gray-100 ml-64">
        {/* Doctor Cards */}
        <div className="flex flex-wrap gap-5 w-full max-w-screen-xl">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl p-4 shadow-md text-center transition-all hover:shadow-lg">
              <Link to={`/doctor/${doctor.id}`} state={{ doctor }}>
                <img src={doctor.image} alt={doctor.name} className="w-36 h-36 rounded-full mx-auto" />
              </Link>
              <h3 className="mt-2 text-lg font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="font-bold text-yellow-500 my-1">⭐ {doctor.rating}</p>
              <p className="text-gray-600">{doctor.location}</p>
              <p className="text-gray-600">Experience: {doctor.experience}</p>
              <p className="text-gray-600">Contact: {doctor.contact}</p>
              <Link to={`/doctor/${doctor.id}`} className="inline-block mt-2 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-all">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorsList;
