
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone,faCity,faGlobe,faLink } from '@fortawesome/free-solid-svg-icons';
import './PersonalInfo.css';

const PersonalInfo = ({ personalInfo, updatePersonalInfo }) => {
  const { firstname,lastname, email, phone, pincode, country, city, social } = personalInfo;


 
 
  return (
    <div>
      <h2>Personal Information</h2>
      <form  className='pi'>
        <div>
          <label htmlFor="firstname">  <FontAwesomeIcon icon={faUser} />  First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, firstname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastname">  <FontAwesomeIcon icon={faUser} />  Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, lastname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} /> Email:</label>
          <input
            type="email"
            id="email"
            value={email || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone"> <FontAwesomeIcon icon={faPhone} /> Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, phone: e.target.value })}
          />
        </div>
        <div>
        <label htmlFor="pincode"> <FontAwesomeIcon icon={faPhone} /> Pincode:</label>
          <input
            type="tel"
            id="pincode"
            value={pincode || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, pincode: e.target.value })}
          />
        </div>
        <div>
        <label htmlFor="city"> <FontAwesomeIcon icon={faCity} /> City:</label>
          <input
            type="tel"
            id="city"
            value={city || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, city: e.target.value })}
          />
        </div>

        <div>
        <label htmlFor="country"> <FontAwesomeIcon icon={faGlobe} /> Country:</label>
          <input
            type="text"
            id="country"
            value={country || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, country: e.target.value })}
          />
        </div>
        <div>
        <label htmlFor="social"> <FontAwesomeIcon icon={faLink} /> Social Profile:</label>
          <input
            type="text"
            id="social"
            value={social || '' }
            onChange={(e) => updatePersonalInfo({ ...personalInfo, social: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;