import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";
import six from "./six.jpg";
import seven from "./seven.jpg";
import eight from "./one.jpg";
import nine from "./two.jpg";
import ten from "./three.jpg";

const doctors = [
  { id: 1, name: "Dr. Ananya Sharma", specialization: "Cardiologist", rating: 4.9, image: one, experience: "15 years", contact: "dr.ananya@example.com" },
  { id: 2, name: "Dr. Raj Verma", specialization: "Dermatologist", rating: 4.7, image: two, experience: "12 years", contact: "dr.raj@example.com" },
  { id: 3, name: "Dr. Priya Kapoor", specialization: "Neurologist", rating: 4.8, image: three, experience: "10 years", contact: "dr.priya@example.com" },
  { id: 4, name: "Dr. Neha Gupta", specialization: "Orthopedic Surgeon", rating: 4.6, image: four, experience: "8 years", contact: "dr.neha@example.com" },
  { id: 5, name: "Dr. Anil Mehta", specialization: "Pediatrician", rating: 4.8, image: five, experience: "20 years", contact: "dr.anil@example.com" },
  { id: 6, name: "Dr. Sunita Rao", specialization: "Gynecologist", rating: 4.7, image: six, experience: "18 years", contact: "dr.sunita@example.com" },
  { id: 7, name: "Dr. Karan Singh", specialization: "Endocrinologist", rating: 4.9, image: seven, experience: "14 years", contact: "dr.karan@example.com" },
  { id: 8, name: "Dr. Meera Nair", specialization: "Psychiatrist", rating: 4.8, image: eight, experience: "16 years", contact: "dr.meera@example.com" },
  { id: 9, name: "Dr. Vishal Das", specialization: "General Physician", rating: 4.7, image: nine, experience: "10 years", contact: "dr.vishal@example.com" },
  { id: 10, name: "Dr. Radhika Iyer", specialization: "Oncologist", rating: 4.8, image: ten, experience: "22 years", contact: "dr.radhika@example.com" }
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

      {/* Main Container */}
      <div className="w-full min-h-screen flex flex-col items-center p-6 bg-gray-100">
        
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Find Your Doctor</h2>
        
        {/* Search Section */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Search by Name"
              className="border border-gray-300 rounded-lg p-3 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Specializations</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Endocrinologist">Endocrinologist</option>
              <option value="Psychiatrist">Psychiatrist</option>
              <option value="General Physician">General Physician</option>
              <option value="Oncologist">Oncologist</option>
            </select>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-lg transition-all hover:shadow-2xl hover:scale-105">
              <Link to={`/doctor/${doctor.id}`} state={{ doctor }}>
                <img src={doctor.image} alt={doctor.name} className="w-36 h-36 rounded-full mx-auto border-4 border-gray-200" />
              </Link>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialization}</p>
              <p className="font-bold text-yellow-500 my-2">⭐ {doctor.rating}</p>
              <p className="text-gray-600"><strong>Experience:</strong> {doctor.experience}</p>
              <p className="text-gray-600"><strong>Contact:</strong> {doctor.contact}</p>
              <Link to={`/doctor/${doctor.id}`} className="block mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition-all">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorsList;
