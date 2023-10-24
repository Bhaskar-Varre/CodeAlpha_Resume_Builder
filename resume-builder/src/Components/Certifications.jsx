import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStamp} from '@fortawesome/free-solid-svg-icons';
import './Certifications.css'
const Certifications = ({ certificationsData, updateCertificationsData }) => {
  const addCertification = () => {
    const newCertification = { title: '', organization: '', year: '' };
    updateCertificationsData([...certificationsData, newCertification]);
  };

  const removeCertification = (index) => {
    const updatedCertificationsData = [...certificationsData];
    updatedCertificationsData.splice(index, 1);
    updateCertificationsData(updatedCertificationsData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedCertificationsData = [...certificationsData];
    updatedCertificationsData[index] = { ...updatedCertificationsData[index], [field]: value };
    updateCertificationsData(updatedCertificationsData);
  };

  return (
    <div>
      <h2>Certifications {} <FontAwesomeIcon icon={faStamp} /></h2>
      {certificationsData.map((certification, index) => (
        <div key={index}>
          <form>
            <div>
              <label htmlFor={`title-${index}`}>Title:</label>
              <input
                type="text"
                id={`title-${index}`}
                value={certification.title || ''}
                onChange={(e) => handleInputChange(index, 'title', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`organization-${index}`}>Organization:</label>
              <input
                type="text"
                id={`organization-${index}`}
                value={certification.organization || ''}
                onChange={(e) => handleInputChange(index, 'organization', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`year-${index}`}>Year:</label>
              <input
                type="text"
                id={`year-${index}`}
                value={certification.year || ''}
                onChange={(e) => handleInputChange(index, 'year', e.target.value)}
              />
            </div>
            <div><button type="button" onClick={() => removeCertification(index)}>Remove</button></div>
          </form>
        </div>
      ))}
      <button type='button1' onClick={addCertification}>Add Another</button>
    </div>
  );
};

export default Certifications;
