// components/ThemeToggle.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/index.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <Button onClick={toggleTheme} className="theme-btn">
      {darkMode ? 'Light🌞' : 'Dark🌙'}
    </Button>
  );
};

export default ThemeToggle;
