import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Ecossistema', path: '/#ecosystem' },
    { name: 'Recursos', path: '/#features' },
    { name: 'Economia', path: '/#calculator' },
    { name: 'Comparativo', path: '/#comparison' },
    { name: 'Dúvidas', path: '/#faq' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-slate-900/5 border border-slate-200/80 py-2.5 px-4 sm:px-6' 
            : 'bg-white/60 backdrop-blur-sm border border-slate-200/40 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo & Live Status */}
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              onClick={() => { handleNavClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            >
              <img 
                src="/img/gourmetech-logo.png" 
                alt="Gourmetech - ERP Inteligente" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && !location.hash;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={handleNavClick}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-brand bg-brand-50/80 font-semibold'
                      : 'text-slate-600 hover:text-brand hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Gourmetech%20para%20meu%20estabelecimento."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-emerald-600 hover:bg-emerald-50 transition-colors duration-150 text-base"
              title="Falar no WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>

            <Link to="/contact" onClick={handleNavClick}>
              <Button 
                variant="primary" 
                size="sm"
                rightIcon={<i className="fa-solid fa-arrow-right text-xs"></i>}
              >
                Solicitar Demonstração
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl p-4 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Navegação</span>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Sem mensalidade fixa
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={handleNavClick}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-brand hover:bg-brand-50/60 transition-colors"
                >
                  <span>{link.name}</span>
                  <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <Link to="/contact" onClick={handleNavClick}>
                <Button variant="primary" className="w-full justify-center">
                  Solicitar Demonstração Gratuita
                </Button>
              </Link>
              <a
                href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Gourmetech%20para%20meu%20estabelecimento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Falar no WhatsApp Oficial</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};