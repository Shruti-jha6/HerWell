import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import SignUp from './pages/SignUp/SignUp'
// import Blog from './pages/Blog/Blog'
// import Event from './pages/Event/Event'
// import DoctorsList from './pages/Doctors/DoctorsList'
// import DoctorProfile from './pages/Doctors/DoctorProfile'
const Home = React.lazy(() => import('./pages/Home/Home'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Event = React.lazy(() => import('./pages/Event/Event'));
const DoctorsList = React.lazy(() => import('./pages/Doctors/DoctorsList'));
const DoctorProfile = React.lazy(() => import('./pages/Doctors/DoctorProfile'));
const Chats = React.lazy(() => import('./pages/Home/Chats'));
const routes=(
  <Router>
    <Routes>
      <Route path="/" exact element ={<Home />} />
      <Route path="/chat" element={<Chats />} />
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