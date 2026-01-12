import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Clientele from './pages/Clientele';
import Terms from './pages/Terms';
import ChatWidget from './components/common/ChatWidget';

import Brochure from './pages/Brochure';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/clientele" element={<Clientele />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="*" element={<div style={{ paddingTop: '100px', minHeight: '60vh' }} className="container"><h2>Page Not Found</h2></div>} />
          </Routes>
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
