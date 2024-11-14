import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Servicespage from './Components/Servicespage/Servicespage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Services1 from './Components/Allservicess/Services1';
import Services2 from './Components/Allservicess/Services2';
import Services3 from './Components/Allservicess/Services3';
import Services4 from './Components/Allservicess/Services4';
import Services5 from './Components/Allservicess/Services5';
import Services6 from './Components/Allservicess/Services6';

function App() {
  return (
    <>
      <Router>
        <div className="website">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Servicespage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/service1" element={<Services1 />} />
            <Route path="/services/service2" element={<Services2 />} />
            <Route path="/services/service3" element={<Services3 />} />
            <Route path="/services/service4" element={<Services4 />} />
            <Route path="/services/service5" element={<Services5 />} />
            <Route path="/services/service6" element={<Services6 />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
