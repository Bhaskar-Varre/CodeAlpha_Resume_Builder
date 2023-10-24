
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = ({ educationData, updateEducationData }) => {
  const addEducation = () => {
    const newEducation = { school: '', degree: '', graduationYear: '', grade: '' };
    updateEducationData([...educationData, newEducation]);
  };

  const removeEducation = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    updateEducationData(updatedEducationData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = { ...updatedEducationData[index], [field]: value };
    updateEducationData(updatedEducationData);
  };

  return (
    <div>
      <h2>Education <FontAwesomeIcon icon={faGraduationCap} /></h2>
      <div className='education'>

      
      {educationData.map((education, index) => (
        <div key={index}>
          <form>
            <div>
              <label htmlFor={`school-${index}`}>School:</label>
              <input
                type="text"
                id={`school-${index}`}
                value={education.school || ''}
                onChange={(e) => handleInputChange(index, 'school', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`degree-${index}`}>Degree:</label>
              <input
                type="text"
                id={`degree-${index}`}
                value={education.degree || ''}
                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`graduationYear-${index}`}>Graduation Year:</label>
              <input
                type="text"
                id={`graduationYear-${index}`}
                value={education.graduationYear || ''}
                onChange={(e) => handleInputChange(index, 'graduationYear', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`grade-${index}`}>Grade:</label>
              <input
                type="text"
                id={`grade-${index}`}
                value={education.grade || ''}
                onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
              />
            </div>
            <div>
            <button type="button" onClick={() => removeEducation(index)}>Remove</button></div>
          </form>
        </div>
      ))}</div>
      <button type='button1' onClick={addEducation}>Add Another</button>
    </div>
  );
};

export default Education;
