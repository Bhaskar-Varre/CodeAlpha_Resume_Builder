import React from 'react';

const Template3 = ({ data }) => {
  const resumeStyle = {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
   
    height: '297mm',
    margin: '0 auto', 
    
  };

  const leftColumnStyle = {
    flex: '1 1 188px',
    padding: '20px',
  };

  const rightColumnStyle = {
    flex: 1,
    padding: '20px',
    borderLeft: '1px solid #ccc',
  };

  const headerStyle = {
    backgroundColor: '#333',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  };

  const h1Style = {
    margin: '0',
    fontSize: '36px',
    fontFamily: 'Verdana, sans-serif',
  };

  const contactInfoStyle = {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #333',
    backgroundColor: '#b4b2b2',
    fontFamily: 'Courier New, monospace',
    // textAlign: 'center',
  };

  const contactInfoPStyle = {
    margin: '5px 0',
    fontSize: '18px',
    fontFamily: 'Tahoma, sans-serif',
  };

  const sectionStyle = {
    marginTop: '20px',
    whiteSpace: 'nowrap', // Prevent text from breaking into new lines
    overflow: 'hidden', 
  };

  const h2Style = {
    margin: '0',
    fontSize: '28px',
    color: '#333',
    fontFamily: 'Georgia, serif',
  };

  const itemStyle = {
    marginBottom: '20px',
  };

  const pStyle = {
    whiteSpace: 'normal',
    margin: '10px 0',
    fontFamily: 'Courier New, monospace',
  };

  return (
    <div style={resumeStyle}>
      <div style={leftColumnStyle}>
        <div style={headerStyle}>
          <h1 style={h1Style}>{data?.personalInfo.firstname} {data?.personalInfo.lastname}</h1>
        </div>
        <div style={contactInfoStyle}>
          <p style={contactInfoPStyle}>Email: {data?.personalInfo.email}</p>
          <p style={contactInfoPStyle}>Phone: {data?.personalInfo.phone}</p>
          <p style={contactInfoPStyle}>LinkedIn: {data?.personalInfo.social}</p>
          <p style={contactInfoPStyle}>City: {data?.personalInfo.city}</p>
          <p style={contactInfoPStyle}>Country: {data?.personalInfo.country}</p>     
               <p style={contactInfoPStyle}>Pincode: {data?.personalInfo.pincode}</p>

        </div>
        <div style={{ ...sectionStyle, borderBottom: '1px solid #ccc' }}>
          <h2 style={h2Style}>Objective</h2>
          <p style={pStyle}>{data?.objective.objective}</p>
        </div>
        <div style={{ ...sectionStyle, borderBottom: '1px solid #ccc' }}>
          <h2 style={h2Style}>Skills</h2>
          <ul>
            {data?.Skills.map((skill, index) => (
              <li style={pStyle} key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div style={sectionStyle}>
          <h2 style={h2Style}>Languages</h2>
          {data?.languages.map((language, index) => (
            <div style={itemStyle} key={index}>
              <h3>{language.language}</h3>
              <p>Proficiency: {language.proficiency}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={rightColumnStyle}>
      <div style={{ ...sectionStyle, borderBottom: '1px solid #ccc' }}>
          <h2 style={h2Style}>Education</h2>
          {data?.education.map((eduItem, index) => (
            <div style={itemStyle} key={index}>
              <h3>{eduItem.school}</h3>
              <p>Degree: {eduItem.degree}</p>
              <p>Graduation Year: {eduItem.graduationYear}</p>
              <p>Grade: {eduItem.grade}</p>
            </div>
          ))}
        </div>
  

        <div style={sectionStyle}>
          <h2 style={h2Style}>Certifications</h2>
          {data?.certifications.map((certification, index) => (
            <div style={itemStyle} key={index}>
              <h3>{certification.title}</h3>
              <p>Organization: {certification.organization}</p>
              <p>Year: {certification.year}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Template3;
