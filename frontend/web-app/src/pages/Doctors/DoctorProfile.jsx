import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./DoctorProfile.css";
import five from './five.jpg'
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import six from './six.jpg'
import seven from './seven.jpg'

const doctorsData = {
  1: {
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    charges: { Consultation: 500, Checkup: 800 },
    schedule: ["Mon 10AM - 4PM", "Wed 2PM - 6PM"],
    image: one,
    reviews: [
      "Excellent doctor!", "Very patient and understanding", "Highly knowledgeable", "Took time to explain everything",
      "Friendly and approachable", "Great experience", "Helped me a lot", "Would definitely recommend",
      "One of the best doctors I've visited", "Professional and caring", "Very attentive to details",
      "Gave the right treatment", "Solved my issue in one visit", "Explains medical terms clearly",
      "Punctual and well-mannered", "Clinic was very clean", "Listened to all my concerns", "Great bedside manner",
      "Very effective treatment", "Saved my life!"
    ],
  },
  2: {
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    charges: { Consultation: 400, "Skin Treatment": 1000 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
    image: two,
    reviews: [
      "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
      "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
      "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
      "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
      "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
      "Solved my acne problem!"
    ],
  },
  3: {
    name: "Dr. Priya Kapoor",
    specialization: "Dermatologist",
    charges: { Consultation: 400, "Skin Treatment": 1000 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
    image: three,
    reviews: [
      "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
      "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
      "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
      "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
      "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
      "Solved my acne problem!"
    ],
  },
  4: {
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    charges: { Consultation: 400, "Skin Treatment": 1000 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
    image: four,
    reviews: [
      "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
      "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
      "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
      "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
      "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
      "Solved my acne problem!"
    ],
  },
  5: {
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    charges: { Consultation: 400, "Skin Treatment": 1000 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
    image: five,
    reviews: [
      "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
      "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
      "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
      "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
      "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
      "Solved my acne problem!"
    ],
  },
  6: {
    name: "Dr. Raj Verma",
    specialization: "Dermatologist",
    charges: { Consultation: 400, "Skin Treatment": 1000 },
    schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
    image: six,
    reviews: [
      "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
      "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
      "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
      "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
      "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
      "Solved my acne problem!"
    ],
  },
};

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData[id];
  const [selectedDate, setSelectedDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!doctor) return <h2 className="not-found">Doctor not found</h2>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> {/* Adding Navbar component */}
      <div className="details-container max-w-4xl mx-auto p-6 flex gap-8">
        {/* Left Section - Charges & Booking */}
        <div className="left-section w-1/4">
          <h1 className="text-2xl font-semibold mb-2">{doctor.name}</h1>
          <div className="charges mb-4">
            <h2 className="text-xl font-medium mb-2">Charges</h2>
            <ul className="list-disc pl-5">
              {Object.entries(doctor.charges).map(([service, price]) => (
                <li key={service}>
                  {service}: ₹{price}
                </li>
              ))}
            </ul>
          </div>
          <div className="schedule mb-4">
            <h2 className="text-xl font-medium mb-2">Schedule</h2>
            <select className="w-full p-2 border rounded" onChange={(e) => setSelectedDate(e.target.value)}>
              <option value="">Select a Slot</option>
              {doctor.schedule.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <button className="book-button mt-4 w-full p-2 bg-blue-500 text-white rounded" onClick={() => setShowPopup(true)}>
              Book Appointment
            </button>
          </div>
        </div>

        {/* Doctor's Image */}
        <div className="middle-section w-1/2 flex flex-col items-center">
          <img src={doctor.image} alt={doctor.name} className="doctor-image mb-4 rounded" />
        </div>

        {/* Right Section - Reviews */}
        <div className="reviews w-1/4">
          <h2 className="text-xl font-medium mb-2">Reviews</h2>
          <div className="reviews-container max-h-64 overflow-y-auto bg-white p-4 rounded shadow">
            <ul>
              {doctor.reviews.map((review, index) => (
                <li key={index}>⭐ {review}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-content bg-white p-6 rounded shadow">
            <p className="mb-4">✅ You have successfully booked an appointment!</p>
            <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
