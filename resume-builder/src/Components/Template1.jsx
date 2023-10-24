import React from 'react';

const Template1 = ({ data }) => {
  const resumeStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const h1Style = {
    fontSize: '36px',
    margin: '0',
  };

  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderBottom: '1px solid #ccc',
  };

  const h2Style = {
    fontSize: '28px',
    color: '#333',
  };

  const listItemStyle = {
    fontSize: '18px',
    color: '#555',
  };

  return (
    <div style={resumeStyle}>
      <div style={headerStyle}>
        <h1 style={h1Style}>
          {data?.personalInfo.firstname} {data?.personalInfo.lastname}
        </h1>
      </div>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Personal Info</h2>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between'}}>
        <p>Email: {data?.personalInfo.email}</p>
        <p>Phone: {data?.personalInfo.phone}</p>
        <p>Pincode: {data?.personalInfo.pincode}</p>
        <p>City: {data?.personalInfo.city}</p>
        <p>Country: {data?.personalInfo.country}</p>
        <p>LinkedIn: {data?.personalInfo.social}</p></div>
      </section>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Objective</h2>
        <p>{data?.objective.objective}</p>
      </section>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Education</h2>
        {data?.education.map((eduItem, index) => (
          <div className="education-item" key={index}>
            <h3>{eduItem.school}</h3>
            <p>Degree: {eduItem.degree}</p>
            <p>Graduation Year: {eduItem.graduationYear}</p>
            <p>Grade: {eduItem.grade}</p>
          </div>
        ))}
      </section>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Skills</h2>
        <ul>
          {data?.Skills.map((skill, index) => (
            <li key={index} style={listItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Certifications</h2>
        {data?.certifications.map((certification, index) => (
          <div className="certification-item" key={index}>
            <h3>{certification.title}</h3>
            <p>Organization: {certification.organization}</p>
            <p>Year: {certification.year}</p>
          </div>
        ))}
      </section>
      <section style={sectionStyle}>
        <h2 style={h2Style}>Languages</h2>
        {data?.languages.map((language, index) => (
          <div className="language-item" key={index}>
            <h3>{language.language}</h3>
            <p>Proficiency: {language.proficiency}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Template1;

