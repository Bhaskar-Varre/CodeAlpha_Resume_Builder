
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Objective from './Objective';
import Skills from './Skills';
import Certifications from './Certifications'; 
import Languages from './Languages'; 
import './ResumeForm.css'

import { useLocation } from 'react-router-dom';


const ResumeForm = () => {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationData, setEducationData] = useState([{}]);
  const [objectiveData, setObjectiveData] = useState({});
  const [skillsData, setSkillsData] = useState(['']);
  const [certificationsData, setCertificationsData] = useState([{}]); // Add state for certifications
  const [languagesData, setLanguagesData] = useState([{}]); // Add state for languages


  const [step, setStep] = useState(1);
  const location = useLocation();


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePersonalInfoSubmit = (data) => {
    // Store the personalInfo data in state and move to the next step
    setPersonalInfo(data);
    nextStep();
  };

  const handleEducationSubmit = (data) => {
    // Store the education data in state and move to the next step
    setEducationData(data);
    nextStep();
  };

  const handleObjectiveSubmit = (data) => {
    // Store the objective data in state and move to the next step
    setObjectiveData(data);
    nextStep();
  };
  const handleskillsSubmit = (data) => {
    // Store the skkils data in state and move to the next step
    setSkillsData(data);
    nextStep();
  };
  const handleCertificationsSubmit = (data) => {
    setCertificationsData(data);
    nextStep();
  };

  const handleLanguagesSubmit = (data) => {
    setLanguagesData(data);
    nextStep();
  };

  useEffect(() => {
    // Check if resumeData is passed from the preview
    if (location.state && location.state.resumeData) {
      const { personalInfo, education, objective , Skills, certifications, languages} = location.state.resumeData;
      setPersonalInfo(personalInfo);
      setEducationData(education);
      setObjectiveData(objective);
      setSkillsData(Skills);
      setCertificationsData(certifications);
      setLanguagesData(languages);

      setStep(1); // Assuming you want to directly navigate to the last step
    }
  }, [location.state]);
  const handleSubmit = () => {
    // Combine personalInfo, education, and objective data
    const resumeData = {
      personalInfo,
      education: educationData,
      objective: objectiveData,
      Skills: skillsData,
      certifications: certificationsData,
      languages: languagesData,
      // Add other sections as needed
    };


    // Send resumeData to the API
    fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resumeData),
    })
      .then((response) => {
        if (response.status === 200) {
          navigate('/preview');
        } else {
          // Handle errors
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='fb'>

      <h1>Resume Builder</h1>
      <div className="resume-form-card">

      <div className="resume-form-container">

      {step === 1 && <PersonalInfo personalInfo={personalInfo} updatePersonalInfo={setPersonalInfo} onSubmit={handlePersonalInfoSubmit} />}
      {step === 2 && (
        <Education
          educationData={educationData}
          updateEducationData={setEducationData}
          onSubmit={handleEducationSubmit}
        />
      )}
      {step === 3 && <Objective objectiveData={objectiveData} updateObjectiveData={setObjectiveData} onSubmit={handleObjectiveSubmit} />}

      {step === 4 && <Skills skillsData={skillsData} updateSkillsData={setSkillsData} onSubmit={handleskillsSubmit} />}

      {step === 5 && (
        <Certifications
          certificationsData={certificationsData}
          updateCertificationsData={setCertificationsData}
          onSubmit={handleCertificationsSubmit}
        />
      )}
      {step === 6 && (
        <Languages
          languagesData={languagesData}
          updateLanguagesData={setLanguagesData}
          onSubmit={handleLanguagesSubmit}
        />
      )}
      {/* Navigation buttons */}
      <div className='rb'>
      {step > 1 && <button onClick={prevStep}>Previous</button>}
      {step < 6 && <button onClick={nextStep}>Next</button>}

      {/* Submit button */}
      {step === 6 && <button onClick={handleSubmit}>Submit</button>}
      </div>
      </div>
</div>
    </div>
  );
};

export default ResumeForm;
