
import React from 'react';

const Template2 = ({ data }) => {
  const resumeStyle = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.6',
    background: '#fff',
    height: '297mm',
    margin: '0 auto',
    borderRadius: '10px',
  };

  const containerStyle = {
 
    
  
  
  };

  const headerStyle = {
    background: '#4CAF50',
    color: '#fff',
  };

  const headerContentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    fontSize: '18px',
    color: '#666',
  };

  const h1Style = {
    fontSize: '32px',
    margin: '0',
  };

  const sectionStyle = {
    fontSize: '28px',
    color: '#333',
  };

  const sectionContentStyle = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={resumeStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={h1Style}>{data?.personalInfo.firstname} {data?.personalInfo.lastname}</h1>
          <div style={headerContentStyle}>
            <p>Email: {data?.personalInfo.email}</p>
            <p>Phone: {data?.personalInfo.phone}</p>
            <p>Pincode: {data?.personalInfo.pincode}</p>
            <p>City: {data?.personalInfo.city}</p>
            <p>Country: {data?.personalInfo.country}</p>
            <p>LinkedIn: {data?.personalInfo.social}</p>
          </div>
        </header>
        <section>
          <h2 style={{ ...sectionStyle, borderBottom: '1px solid #4caf50' }}>Objective</h2>
          <p style={sectionContentStyle}>{data?.objective.objective}</p>
        </section>
        <section>
          <h2 style={{ ...sectionStyle, borderBottom: '1px solid #4caf50' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            {data?.education.map((eduItem, index) => (
              <div className="education-item" key={index} style={{ margin: '-40px 0' }}>
                <h3 style={sectionStyle}>{eduItem.school}</h3>
                <p style={sectionContentStyle}>Degree: {eduItem.degree}</p>
                <p style={sectionContentStyle}>Graduation Year: {eduItem.graduationYear}</p>
                <p style={sectionContentStyle}>Grade: {eduItem.grade}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 style={{ ...sectionStyle, borderBottom: '1px solid #4caf50' }}>Skills</h2>
          <ul style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap', gap: '100px' }}>
            {data?.Skills.map((skill, index) => (
              <li key={index} style={{ fontSize: '18px', color: '#fff', backgroundColor: '#333', padding: '8px 16px', borderRadius: '20px' }}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 style={{ ...sectionStyle, borderBottom: '1px solid #4caf50' }}>Certifications</h2>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
          {data?.certifications.map((certification, index) => (
            <div className="certification-item" key={index} style={{ margin: '-40px -32px' }}>
              <h3 style={sectionStyle}>{certification.title}</h3>
              <p style={sectionContentStyle}>Organization: {certification.organization}</p>
              <p style={sectionContentStyle}>Year: {certification.year}</p>
            </div>
          ))}</div>
        </section>
        <section>
          <h2 style={{ ...sectionStyle, borderBottom: '1px solid #4caf50' }}>Languages</h2>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>

          {data?.languages.map((language, index) => (
            <div className="language-item" key={index} style={{ margin: '-40px -32px' }}>
              <h3 style={sectionStyle}>{language.language}</h3>
              <p style={sectionContentStyle}>Proficiency: {language.proficiency}</p>
            </div>
          ))}</div>
        </section>
      </div>
    </div>
  );
};

export default Template2;

