import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import FAQ from './pages/FAQ';
import PatientInfo from './pages/PatientInfo';
import CommunityOutreach from './pages/CommunityOutreach';
import AdmissionProcess from './pages/patient-info/AdmissionProcess';
import DischargeProcess from './pages/patient-info/DischargeProcess';
import BillingProcess from './pages/patient-info/BillingProcess';
import PatientRegistration from './pages/patient-info/PatientRegistration';
import PreCounselling from './pages/patient-info/PreCounselling';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="patient-info" element={<PatientInfo />} />
          <Route path="patient-info/admission-process" element={<AdmissionProcess />} />
          <Route path="patient-info/discharge-process" element={<DischargeProcess />} />
          <Route path="patient-info/billing-process" element={<BillingProcess />} />
          <Route path="patient-info/patient-registration" element={<PatientRegistration />} />
          <Route path="patient-info/pre-counselling" element={<PreCounselling />} />
          <Route path="community-outreach" element={<CommunityOutreach />} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
        </Route>
      </Routes>
      <WhatsAppButton phoneNumber="256705451656" />
    </>
  );
}

export default App;