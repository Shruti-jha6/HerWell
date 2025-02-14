import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import "./DoctorsList.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    rating: 4.9,
    image: "/images/doctor1.jpg",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    rating: 4.7,
    image: "/images/doctor2.jpg",
    location: "Delhi",
  },
  {
    id: 3,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 5,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 6,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 7,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 8,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 9,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 10,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 11,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 12,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 13,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 14,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 15,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 16,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 17,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 18,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 19,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 20,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 21,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 22,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 23,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 24,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 25,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 26,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 27,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 28,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 29,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 30,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 31,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
  {
    id: 32,
    name: "Dr. Priya Kapoor",
    specialization: "Neurologist",
    rating: 4.8,
    image: "/images/doctor3.jpg",
    location: "Bangalore",
  },
];



const DoctorsList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? doctor.specialization === category : true)
  );

  return (
    <div className="container">
      {/* Search & Filters */}
      <div className="search-filters">
        <input type="text" placeholder="Enter your location" className="search-bar" />
        <input
          type="text"
          placeholder="Search for a doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Category Dropdown */}
      <select onChange={(e) => setCategory(e.target.value)} className="dropdown">
        <option value="">All Specialties</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
      </select>

      {/* Doctor Cards */}
      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <Link to={`/doctor/${doctor.id}`} state={{ doctor }}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            </Link>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p className="rating">⭐ {doctor.rating}</p>
            <p className="location">{doctor.location}</p>
            <Link to={`/doctor/${doctor.id}`} className="profile-link"></Link>

            {/* <Link to={`/doctor/${doctor.id}`} state={{ doctor }} className="profile-link">
              View Profile
            </Link> */}
            {/* <button onClick={() => navigate(`/doctor/${doctor.id}`, { state: { doctor } })}>
              View Profile
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
