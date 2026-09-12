import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const SavingsCalculator: React.FC = () => {
  // Monthly turnover state in BRL
  const [revenue, setRevenue] = useState<number>(35000);

  // Formatting currency
  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Traditional delivery marketplaces (iFood, Rappi, etc.) typically charge ~18% to 23% in commissions
  const marketplaceRate = 0.20; // 20%
  const marketplaceMonthlyCost = Math.round(revenue * marketplaceRate);

  // Compra Rápida + Gourmetech: Zero fixed monthly fee, fair ~3.5% platform & payment processing fee
  const gourmetechRate = 0.035; // 3.5%
  const gourmetechMonthlyCost = Math.round(revenue * gourmetechRate);

  // Dynamic savings calculations
  const monthlySavings = marketplaceMonthlyCost - gourmetechMonthlyCost;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-calculator text-xs"></i>
            <span>Simulador de Economia Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pare de queimar margem com comissões abusivas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              Veja o quanto você economiza no delivery próprio.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Marketplaces tradicionais chegam a reter até 27% das suas vendas. Com o Compra Rápida integrado à retaguarda Gourmetech, seu cliente pede direto no seu canal com custo fixo zero.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Interactive Slider & Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="revenue-range" className="block text-sm font-semibold text-slate-700">
                    Faturamento mensal estimado no Delivery:
                  </label>
                  <span className="text-xs text-brand-dark font-medium bg-brand/10 px-2 py-0.5 rounded">
                    Arraste para calcular
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand tracking-tight font-mono">
                  {formatBRL(revenue)}
                  <span className="text-sm font-sans font-medium text-slate-500 ml-2">/ mês</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  id="revenue-range"
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand transition-all"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>R$ 5.000</span>
                  <span>R$ 100.000</span>
                  <span>R$ 200.000+</span>
                </div>
              </div>

              {/* Comparison Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-rose-50/70 border border-rose-200/70 rounded-2xl p-4 transition-all">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase mb-1">
                    <i className="fa-solid fa-store-slash"></i>
                    <span>Marketplaces Convencionais</span>
                  </div>
                  <div className="text-lg font-bold text-rose-700 font-mono">
                    {formatBRL(marketplaceMonthlyCost)}
                    <span className="text-xs font-sans font-normal text-rose-600/80">/mês</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Média de <strong>20%</strong> de comissão por pedido entregue retida pelas plataformas.
                  </p>
                </div>

                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Compra Rápida + Gourmetech</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-700 font-mono">
                    {formatBRL(gourmetechMonthlyCost)}
                    <span className="text-xs font-sans font-normal text-emerald-600/80">/mês</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    Apenas <strong>~3,5%</strong> de taxa justa por pedido. <strong>R$ 0,00</strong> de mensalidade fixa.
                  </p>
                </div>
              </div>

              {/* Dynamic Micro Info */}
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <i className="fa-solid fa-shield-halved text-brand"></i>
                <span>
                  Sua economia líquida estimada é de <strong>{formatBRL(monthlySavings)}/mês</strong> que deixam de ser repassados a intermediários.
                </span>
              </div>
            </div>

            {/* Right: Big Impact Badge & CTA */}
            <div className="lg:col-span-5 bg-brand-950 text-white rounded-2xl p-6 sm:p-8 text-center space-y-5 border border-brand-800/60 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand-500/20 rounded-full blur-2xl"></div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                Economia Anual Estimada
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                  {formatBRL(annualSavings)}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium mt-1">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  <span>+ {formatBRL(monthlySavings)} / mês no seu caixa</span>
                </div>
                <p className="text-xs text-slate-400 pt-2">
                  Dinheiro que volta para a sua margem de lucro em vez de sustentar comissões de terceiros.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="glow" size="md" className="w-full justify-center">
                      Quero Economizar Agora
                    </Button>
                  </motion.div>
                </Link>
                <p className="text-[11px] text-slate-400 mt-3">
                  Sem contrato de fidelidade. Teste sem risco.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
