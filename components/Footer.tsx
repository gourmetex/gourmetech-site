import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center text-white text-sm">
                  <i className="fa-solid fa-utensils"></i>
                </div>
              <span className="text-xl font-bold">Gourmetech</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              O ERP definitivo para modernizar seu restaurante ou mercado. Simples, poderoso e justo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-light">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/#features" className="hover:text-white transition-colors">Recursos</Link></li>
              <li><Link to="/#benefits" className="hover:text-white transition-colors">Benefícios</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Demonstração</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-light">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/terms" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-light">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-envelope"></i>
                contato@gourmetech.com
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                0800 123 4567
              </li>
              <li className="mt-4 flex gap-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gourmetech Tecnologia Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};