import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Safaris from './pages/Safaris';
import CarRentals from './pages/CarRentals';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';

// Safari destination pages
import BwindiPage from './pages/destinations/BwindiPage';
import QueenElizabethPage from './pages/destinations/QueenElizabethPage';
import MurchisonFallsPage from './pages/destinations/MurchisonFallsPage';
import KibalePage from './pages/destinations/KibalePage';
import RwenzoriPage from './pages/destinations/RwenzoriPage';
import LakeMburoPage from './pages/destinations/LakeMburoPage';
import MountElgonPage from './pages/destinations/MountElgonPage';
import KampalaPage from './pages/destinations/KampalaPage';
import JinjaPage from './pages/destinations/JinjaPage';
import KidepoPage from './pages/destinations/KidepoPage';
import SseseIslandsPage from './pages/destinations/SseseIslandsPage';
import ZiwaRhinoPage from './pages/destinations/ZiwaRhinoPage';
import LakeBunyonyiPage from './pages/destinations/LakeBunyonyiPage';
import KenyaSafariPage from './pages/destinations/KenyaSafariPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
            {/* Safari destination routes */}
            <Route path="/destinations/bwindi" element={<BwindiPage />} />
            <Route path="/destinations/queen-elizabeth" element={<QueenElizabethPage />} />
            <Route path="/destinations/murchison-falls" element={<MurchisonFallsPage />} />
            <Route path="/destinations/kibale" element={<KibalePage />} />
            <Route path="/destinations/rwenzori" element={<RwenzoriPage />} />
            <Route path="/destinations/lake-mburo" element={<LakeMburoPage />} />
            <Route path="/destinations/mount-elgon" element={<MountElgonPage />} />
            <Route path="/destinations/kampala" element={<KampalaPage />} />
            <Route path="/destinations/jinja" element={<JinjaPage />} />
            <Route path="/destinations/kidepo" element={<KidepoPage />} />
            <Route path="/destinations/ssese-islands" element={<SseseIslandsPage />} />
            <Route path="/destinations/ziwa-rhino" element={<ZiwaRhinoPage />} />
            <Route path="/destinations/lake-bunyonyi" element={<LakeBunyonyiPage />} />
            <Route path="/destinations/kenya-safari" element={<KenyaSafariPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;