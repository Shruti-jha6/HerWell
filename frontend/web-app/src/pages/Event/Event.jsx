import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance";
import "../../../src/event.css";

const Event = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    fetch("/upcomingEvent.json")
      .then((response) => response.json())
      .then((data) => setUpcomingEvents(data))
      .catch((error) => console.error("Error fetching upcoming events:", error));

    fetch("/pastEvent.json")
      .then((response) => response.json())
      .then((data) => setPastEvents(data))
      .catch((error) => console.error("Error fetching past events:", error));
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const shareOnWhatsApp = () => {
    if (selectedEvent) {
      const message = `Check out this event: *${selectedEvent.name}*%0A📅 Date: ${selectedEvent.date}%0A🕒 Time: ${selectedEvent.time}%0A📍 Location: ${selectedEvent.location}%0A${selectedEvent.description}%0AJoin me!`;
      const url = `https://wa.me/?text=${message}`;
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="flex flex-col p-8 text-gray-800">
        <h1>Events</h1>

        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No upcoming events.</p>
        ) : (
          upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} openModal={openModal} isPastEvent={false} />
          ))
        )}

        <h2 className="text-2xl font-semibold mt-12 mb-6">Past Events</h2>
        {pastEvents.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No past events.</p>
        ) : (
          pastEvents.map((event, index) => (
            <EventCard key={index} event={event} openModal={openModal} isPastEvent={true} />
          ))
        )}
      </div>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedEvent.name}</h2>
            <p className="text-gray-600">{selectedEvent.description}</p>
            <p className="mt-2 text-lg">
              📅 {selectedEvent.date} | 🕒 {selectedEvent.time} | 📍 {selectedEvent.location}
            </p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => alert(`You have RSVP'd for ${selectedEvent.name}`)}
              >
                Confirm RSVP
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={shareOnWhatsApp}
              >
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const EventCard = ({ event, openModal, isPastEvent }) => (
  <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
    <div className="md:w-3/5 space-y-6">
      <h2 className="text-2xl font-semibold">{event.name}</h2>
      <p className="text-gray-500 flex items-center gap-3 text-lg">
        📅 {event.date} | 🕒 {event.time} | 📍 {event.location}
      </p>
      <p className="text-gray-700 text-md leading-relaxed">{event.description}</p>
      {isPastEvent ? (
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
          onClick={() => alert(`Redirect to watch recording (not implemented)`)}
        >
          Watch Recording
        </button>
      ) : (
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-300"
          onClick={() => openModal(event)}
        >
          RSVP Now
        </button>
      )}
    </div>
    {event.image && (
      <div className="md:w-2/5">
        <img
          src={event.image}
          alt={event.name}
          className="w-full max-h-60 rounded-lg object-cover"
        />
      </div>
    )}
  </div>
);

export default Event;
