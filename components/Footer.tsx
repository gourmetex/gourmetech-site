import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-slate-300 pt-20 pb-12 border-t border-brand-800/40 relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Col 1: Brand & Proposition */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/img/gourmetech-logo-branco.png"
                alt="Gourmetech - Gestão Inteligente"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              O sistema base e retaguarda do Compra Rápida para restaurantes e mercados. 
              Fila da cozinha em tempo real, despacho para entregadores, controle de estoque e 
              conciliação financeira integrada — <strong className="text-white font-medium">sem mensalidade fixa</strong>.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium">Tecnologia desenvolvida no Brasil 🇧🇷</span>
            </div>
          </div>

          {/* Col 2: Ecossistema */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-400 pl-2.5">
              Ecossistema
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-truck-fast text-xs text-brand-400"></i>
                  <span>App Delivery Compra Rápida</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-motorcycle text-xs text-brand-400"></i>
                  <span>App Nativo do Entregador</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-kitchen-set text-xs text-brand-400"></i>
                  <span>Fila da Cozinha & KDS</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-list-check text-xs text-brand-400"></i>
                  <span>Painel de Vendas & Separação</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-boxes-stacked text-xs text-brand-400"></i>
                  <span>Estoque & Ficha Técnica</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-scale-balanced text-xs text-brand-400"></i>
                  <span>Financeiro & PIX Asaas</span>
                </Link>
              </li>
              <li className="pt-1 text-slate-500 text-xs">
                <span>(Em breve: Cardápio Digital e PDV)</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-400 pl-2.5">
              Segmentos
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Restaurantes & Bares
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Pizzarias & Hamburguerias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Dark Kitchens & Marmitarias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Mercados & Mercearias
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Açougues & Hortifrútis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Empórios & Lojas de Conveniência
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-400 pl-2.5">
              Contato & Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a 
                  href="mailto:appgourmetech@gmail.com" 
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-brand-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <i className="fa-regular fa-envelope text-xs"></i>
                  </div>
                  <span className="truncate">appgourmetech@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5541998771127" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                  </div>
                  <span>(41) 9 9877-1127</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/5 space-y-1.5">
                <Link to="/terms" className="block text-xs text-slate-400 hover:text-brand-300 transition-colors">
                  <i className="fa-solid fa-file-contract mr-1.5 text-[10px]"></i> Termos de Uso
                </Link>
                <Link to="/privacy" className="block text-xs text-slate-400 hover:text-brand-300 transition-colors">
                  <i className="fa-solid fa-shield-halved mr-1.5 text-[10px]"></i> Política de Privacidade (LGPD)
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Gourmetech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Termos</Link>
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacidade</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Suporte</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};