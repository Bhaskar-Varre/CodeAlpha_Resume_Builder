import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css'; // Import the CSS file


const LandingPage = () => {
    const navigate = useNavigate();

  const handleBuildResume = () => {
    navigate('/resume');
  };

  return (
    <div className='landing'>
      <div><h1>Welcome to Resume Builder</h1></div>
      <h3>Build your professional resume with our easy-to-use tool.</h3>
      <div className="btn-container">
        <button onClick={handleBuildResume}>Build Your Resume</button>
      </div>
      
      <div className="contact-details">
        <h3>Contact Us:</h3>
        
        <p>Email: <a href="mailto:srianjanibhaskarnaiduvarre@gmail.com">srianjanibhaskarnaiduvarre@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/varre-s-2534a8256" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/varre-s-2534a8256</a></p>
    
      </div>
    </div>
  );
};

export default LandingPage;
