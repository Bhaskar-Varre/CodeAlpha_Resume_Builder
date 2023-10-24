import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeForm from './Components/ResumeForm';
import ResumePreview from './Components/ResumePreview';
import LandingPage from './Components/Landingpage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/preview" element={<ResumePreview />} />
        <Route path="/edit" element={<ResumeForm />} />

      </Routes>
    </Router>
  );
}

export default App;
