
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFileExport} from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skillsData, updateSkillsData }) => {
  const addSkill = () => {
    updateSkillsData([...skillsData, '']); // Initialize with an empty string
  };

  const removeSkill = (index) => {
    const updatedSkillsData = [...skillsData];
    updatedSkillsData.splice(index, 1);
    updateSkillsData(updatedSkillsData);
  };

  const handleSkillChange = (index, skill) => {
    const updatedSkillsData = [...skillsData];
    updatedSkillsData[index] = skill;
    updateSkillsData(updatedSkillsData);
  };

  return (
    <div>
      <h2>Skills {} <FontAwesomeIcon icon={faFileExport} /></h2>
      {skillsData.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
          <button type="button" onClick={() => removeSkill(index)}>Remove</button>
        </div>
      ))}
      <button type='button1' onClick={addSkill}>Add Skill</button>
    </div>
  );
};

export default Skills;

