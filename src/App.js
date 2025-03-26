// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import ThemeToggle from './components/ThemeToggle';
import SignUp from './components/SignUp';
import Signin from './components/Signin';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <div className='below-nav'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      </div>
      <ThemeToggle/>
    </Router>
  );
};

export default App;

