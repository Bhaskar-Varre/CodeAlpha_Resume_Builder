


import React, { useEffect, useState, useRef } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import './ResumePreview.css'

const ResumePreview = () => {
  const pdfRef = useRef();
  const [resumeData, setResumeData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('template1'); // Initialize with the default template

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    fetch('/api/resume') // Update to the correct URL
      .then((response) => response.json())
      .then((data) => {
        setResumeData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const handleGeneratePDF = () => {
    const content = pdfRef.current;

    html2canvas(content).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('resume.pdf');
    });
  };

  const handleEdit = () => {
    navigate('/edit', { state: { resumeData } });
  };

  return (
    <div className='rpl'> 
    <div className="resume-preview-container">
      <div className="select-container" >
      <label>
          Select Resume Template:
          <select  onChange={(e) => handleTemplateChange(e.target.value)}>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>

          </select>
        </label>
      </div>
      <div id='content-container' className={setSelectedTemplate.resume} ref={pdfRef}>
      {selectedTemplate === 'template1' && <Template1 data={resumeData} />}
      {selectedTemplate === 'template2' && <Template2 data={resumeData} />}
      {selectedTemplate === 'template3' && <Template3 data={resumeData} />}

      </div></div>
      <div className="button-container">

      <button  className="edit-button" onClick={handleEdit}>Edit</button>
      <button  className="generate-button" onClick={handleGeneratePDF}>Generate PDF</button>
      </div>
      </div>
  );
};

export default ResumePreview;


