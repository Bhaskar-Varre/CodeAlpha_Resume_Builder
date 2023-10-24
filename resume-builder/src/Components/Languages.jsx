import React from 'react';
import './Language.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage} from '@fortawesome/free-solid-svg-icons';
const Languages = ({ languagesData, updateLanguagesData}) => {
  const addLanguage = () => {
    const newLanguage = { language: '', proficiency: '' };
    updateLanguagesData([...languagesData, newLanguage]);
  };

  const removeLanguage = (index) => {
    const updatedLanguagesData = [...languagesData];
    updatedLanguagesData.splice(index, 1);
    updateLanguagesData(updatedLanguagesData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedLanguagesData = [...languagesData];
    updatedLanguagesData[index] = { ...updatedLanguagesData[index], [field]: value };
    updateLanguagesData(updatedLanguagesData);
  };

  return (
    <div>
      <h2>Languages {} <FontAwesomeIcon icon={faLanguage} /></h2>
      {languagesData.map((language, index) => (
        <div key={index}>
          <form>
            <div>
              <label htmlFor={`language-${index}`}>Language:</label>
              <input
                type="text"
                id={`language-${index}`}
                value={language.language || ''}
                onChange={(e) => handleInputChange(index, 'language', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor={`proficiency-${index}`}>Proficiency:</label>
              <input
                type="text"
                id={`proficiency-${index}`}
                value={language.proficiency || ''}
                onChange={(e) => handleInputChange(index, 'proficiency', e.target.value)}
              />
            </div>
            <div><button type="button" onClick={() => removeLanguage(index)}>Remove</button></div>
          </form>
        </div>
      ))}
      <button type='button1' onClick={addLanguage}>Add Another</button>
    </div>
  );
};

export default Languages;
