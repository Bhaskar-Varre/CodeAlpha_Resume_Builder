import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul>
       
          <button className="home-button" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} />
          </button>
       
      </ul>
    </nav>
  );
};

export default Navbar;
