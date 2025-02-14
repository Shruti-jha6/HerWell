import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Blog from './pages/Blog/Blog'
import Event from './pages/Event/event'
import DoctorsList from './pages/Doctors/DoctorsList'
import DoctorProfile from './pages/Doctors/DoctorProfile'

const routes=(
  <Router>
    <Routes>
      <Route path="/dashboard" exact element ={<Home />} />
      <Route path="/events" exact element ={<Event />} />
      <Route path="/blogs" exact element ={<Blog />} />
      <Route path="/login" exact element ={<Login />} />
      <Route path="/signup" exact element ={<SignUp />} />
      <Route path="/docs" exact element ={<DoctorsList />} />
      <Route path="/doctor/:id" exact element={<DoctorProfile />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App