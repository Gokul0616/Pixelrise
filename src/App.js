import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Home, 
  About, 
  Services, 
  Portfolio, 
  ProjectDetail,
  ServiceDetail,
  Header,
  Footer 
} from './components';
import './App.css';
import { Contact } from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:serviceType" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;