import { useDarkMode } from './Hooks/Darkmode';
import React from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDarkMode = () => {
      console.log("value", darkMode);
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
        <div className="dark-mode__toggle" onClick={() => toggleDarkMode()}>
          <div
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };

export default Navbar;