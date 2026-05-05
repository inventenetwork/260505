/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Blyten from './pages/Blyten';
import Blynd from './pages/Blynd';
import Education from './pages/Education';
import StemEducation from './pages/StemEducation';
import EducateTheEducator from './pages/EducateTheEducator';
import TechnicalCourses from './pages/TechnicalCourses';
import About from './pages/About';
import Contact from './pages/Contact';
import SmartFarming from './pages/SmartFarming';
import SmartHome from './pages/SmartHome';
import SmartIoT from './pages/SmartIoT';
import SmartOffice from './pages/SmartOffice';
import EngineeringProducts from './pages/EngineeringProducts';
import NetworkITProducts from './pages/NetworkITProducts';
import ProfessionalServices from './pages/ProfessionalServices';
import ProjectReferences from './pages/ProjectReferences';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blyten" element={<Blyten />} />
          <Route path="/blynd" element={<Blynd />} />
          <Route path="/education" element={<Education />} />
          <Route path="/stem-education" element={<StemEducation />} />
          <Route path="/educate-the-educator" element={<EducateTheEducator />} />
          <Route path="/technical-courses" element={<TechnicalCourses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/smart-farming" element={<SmartFarming />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/smart-iot" element={<SmartIoT />} />
          <Route path="/smart-office" element={<SmartOffice />} />
          <Route path="/engineering-products" element={<EngineeringProducts />} />
          <Route path="/network-it-products" element={<NetworkITProducts />} />
          <Route path="/professional-services" element={<ProfessionalServices />} />
          <Route path="/project-references" element={<ProjectReferences />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-[#f5f2ed] font-sans selection:bg-[#b38b3f]/30">
        <Navbar />
        <AnimatedRoutes />
        <WhatsAppBubble />
        <Footer />
      </div>
    </Router>
  );
}
