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
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfService } from './TermsOfService';

// New page components
import { OurStory } from './pages/OurStory';
import { OurProcess } from './pages/OurProcess';
import { Testimonials } from './pages/Testimonials';
import { WebsiteDesign } from './pages/WebsiteDesign';
import { WebDevelopment } from './pages/WebDevelopment';
import { WhatIsSEO } from './pages/WhatIsSEO';
import { ECommerce } from './pages/ECommerce';
import { MobileWebsites } from './pages/MobileWebsites';
import { Blog } from './pages/Blog';
import { WebDesignTips } from './pages/WebDesignTips';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { FAQs } from './pages/FAQs';

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
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;