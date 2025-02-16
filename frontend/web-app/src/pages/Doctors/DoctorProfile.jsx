import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import Footer from "../../components/Footer/Footer";

const doctorsData = {
    1: {
      name: "Dr. Ananya Sharma",
      specialization: "Cardiologist",
      experience: "12 years of experience",
      hospital: "Apollo Hospital, Delhi",
      charges: { Consultation: 500, "Heart Checkup": 1200 },
      schedule: ["Mon 10AM - 4PM", "Wed 2PM - 6PM"],
      image: one,
      reviews: [
        { user: "Amit K.", time: "2 days ago", text: "Dr. Ananya is an amazing doctor! She listened to all my concerns patiently and gave me a clear diagnosis." },
        { user: "Pooja R.", time: "5 days ago", text: "Highly professional and very knowledgeable. She explained everything in a way that was easy to understand." },
        { user: "Vikram S.", time: "1 week ago", text: "She caught a heart issue early that others missed. Forever grateful!" },
        { user: "Ritu J.", time: "1 week ago", text: "Clinic was very clean, and the staff was polite. Great overall experience." },
        { user: "Sameer M.", time: "2 weeks ago", text: "She doesn't rush appointments and ensures all doubts are cleared. Highly recommended!" },
        { user: "Neha K.", time: "3 weeks ago", text: "I was very nervous, but she made me feel at ease. A great doctor!" },
        { user: "Rajesh T.", time: "1 month ago", text: "Friendly, professional, and a good listener. The best cardiologist I’ve met!" },
        { user: "Priya S.", time: "1 month ago", text: "She guided me through lifestyle changes that have greatly improved my heart health." },
        { user: "Anil B.", time: "1 month ago", text: "Prompt service and accurate diagnosis. Would definitely visit again." },
        { user: "Sonia L.", time: "2 months ago", text: "She genuinely cares for her patients. Thank you for your support!" },
      ],
    },
  
  2: {
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    experience: "8 years",
    hospital: "Max Hospital, Noida",
    contact: "+91 9988776655",
    charges: { Consultation: 400, "Skin Treatment": 1200, "Acne Therapy": 1500 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM", "Sun 10AM - 2PM"],
    image: two,
    reviews: [
      { user: "Pooja Malhotra", text: "Helped me with my skin issues.", avatar: "https://i.pravatar.cc/50?img=4" },
      { user: "Amit Joshi", text: "Very polite and friendly doctor.", avatar: "https://i.pravatar.cc/50?img=5" },
    ],
  },
  3: {
    name: "Dr. Priya Kapoor",
    specialization: "Pediatrician",
    experience: "15 years",
    hospital: "Fortis Hospital, Gurgaon",
    contact: "+91 9654321876",
    charges: { Consultation: 600, "Child Vaccination": 2000 },
    schedule: ["Wed 10AM - 3PM", "Sat 1PM - 6PM"],
    image: three,
    reviews: [
      { user: "Ritika Sharma", text: "Amazing doctor for kids!", avatar: "https://i.pravatar.cc/50?img=6" },
    ],
  },
};

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData[id];
  const [selectedDate, setSelectedDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!doctor) return <h2 className="text-center text-red-500 text-2xl mt-10">Doctor not found</h2>;

  return (
    <>
    <div className="bg-white-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-10">
        {/* Doctor Info */}
        <div className="flex gap-6">
          <img src={doctor.image} alt={doctor.name} className="w-48 h-48 rounded-lg shadow-md" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{doctor.name}</h1>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-500">{doctor.experience}</p>
            <p className="text-gray-500">{doctor.hospital}</p>
          </div>
        </div>

        {/* Charges & Schedule */}
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-800">Charges</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {Object.entries(doctor.charges).map(([service, price]) => (
              <li key={service} className="font-medium">
                {service}: <span className="text-blue-600 font-bold">₹{price}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-medium text-gray-800 mt-4">Available Slots</h2>
          <select
            className="w-full p-2 border rounded mt-2"
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="">Select a Slot</option>
            {doctor.schedule.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <button
            className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => setShowPopup(true)}
          >
            Book Appointment
          </button>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-800">Patient Reviews</h2>
          <div className="mt-4 max-h-72 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow">
            {doctor.reviews.map((review, index) => (
              <div key={index} className="mb-4 p-3 bg-white rounded shadow">
                <p className="text-gray-800 font-semibold">{review.user}</p>
                <p className="text-gray-500 text-sm">{review.time}</p>
                <p className="text-gray-700 mt-1">⭐ {review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg text-gray-800">✅ Appointment booked successfully!</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default DoctorProfile;

