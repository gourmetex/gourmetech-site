import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pathname;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const isPageChange = prevPath !== pathname;
    const delay = isPageChange ? 500 : 100; 

    const timer = setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/' && /^#\/(contact|terms|privacy)(?:[?#]|$)/.test(location.hash)) {
      navigate(location.hash.slice(1), { replace: true });
    }
  }, [location.pathname, location.hash, navigate]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<section className="mx-auto max-w-3xl px-6 py-32"><h1 className="text-3xl font-bold">Página não encontrada</h1><a href="/" className="mt-4 inline-block underline">Voltar ao início</a></section>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;