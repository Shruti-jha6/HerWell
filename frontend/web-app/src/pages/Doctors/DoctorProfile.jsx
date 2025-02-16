import { useParams } from "react-router-dom";
import { useState } from "react";
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
  // 7: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: seven,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 8: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: one,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 9: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: two,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 10: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: three,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 11: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: four,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 12: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: five,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 13: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: six,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 14: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: seven,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 15: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: one,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 16: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: two,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 17: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: three,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: four,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: five,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: six,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: seven,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: one,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: two,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: three,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: four,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: five,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image: six,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  // },
  // 2: {
  //   name: "Dr. Raj Verma",
  //   specialization: "Dermatologist",
  //   charges: { Consultation: 400, "Skin Treatment": 1000 },
  //   schedule: ["Tue 9AM - 3PM", "Fri 12PM - 5PM"],
  //   image:seven,
  //   reviews: [
  //     "Helped me with my skin issue", "Highly recommended", "Best dermatologist I've visited", "Explained my condition well",
  //     "Gave me effective treatment", "Very polite and friendly", "Skin issues solved quickly", "Clinic is hygienic",
  //     "Understood my concerns well", "Doesn't rush appointments", "Great skincare advice", "Affordable treatment",
  //     "Professional and courteous", "Took time to understand my case", "Very knowledgeable in his field",
  //     "Best treatment I've had", "Would definitely visit again", "Good experience overall", "Effective solutions provided",
  //     "Solved my acne problem!"
  //   ],
  };



const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData[id];
  const [selectedDate, setSelectedDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!doctor) return <h2 className="not-found">Doctor not found</h2>;

  return (
    


    <div className="details-container">
      {/* Doctor's Image */}
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      
      <h1>{doctor.name}</h1>
      {/* <p className="specialization">{doctor.specialization}</p> */}
  {/* Left Section - Charges & Booking */}
  <div className="left-section">
    {/* 🔹 Service Charges */}
    <div className="charges">
      <h2>Charges</h2>
      <ul>
        {Object.entries(doctor.charges).map(([service, price]) => (
          <li key={service}>
            {service}: ₹{price}
          </li>
        ))}
      </ul>
    </div>

    {/* 🔹 Appointment Scheduling */}
    <div className="schedule">
      <h2>Schedule</h2>
      <select onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="">Select a Slot</option>
        {doctor.schedule.map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <button className="book-button" onClick={() => setShowPopup(true)}>
        Book Appointment
      </button>
    </div>
  </div>

  {/* Right Section - Reviews */}
  <div className="reviews">
    <h2>Reviews</h2>
    <div className="reviews-container">
      <ul>
        {doctor.reviews.map((review, index) => (
          <li key={index}>⭐ {review}</li>
        ))}
      </ul>
    </div>
  </div>
  {/* Popup for Appointment Confirmation */}
  {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>✅ You have successfully booked an appointment!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
</div>


  );
  
};

export default DoctorProfile;
