import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const ComparisonTable: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Mensalidade Fixa Obrigatória',
      gourmetech: 'R$ 0,00 fixo (Pague apenas pelo sucesso)',
      legacy: 'R$ 290 a R$ 800 / mês (mesmo sem vender)',
      highlight: true
    },
    {
      feature: 'Taxa de Implantação e Setup',
      gourmetech: 'A partir de R$ 149 (sob medida pelo porte do catálogo ou opção com treinamento para auto-cadastro)',
      legacy: 'R$ 800 a R$ 2.500 de taxa inicial obrigatória'
    },
    {
      feature: 'Fila da Cozinha & KDS em Tempo Real',
      gourmetech: 'Incluso nativamente com alertas e substituição',
      legacy: 'Módulo cobrado à parte (+R$ 100/mês)'
    },
    {
      feature: 'App de Delivery Próprio (Compra Rápida)',
      gourmetech: 'App do cliente integrado nativamente',
      legacy: 'Cobrado à parte ou depende de marketplaces'
    },
    {
      feature: 'App Nativo para Entregadores / Motoboys',
      gourmetech: 'Incluso (rotas GPS e confirmação)',
      legacy: 'Geralmente inexistente ou manual'
    },
    {
      feature: 'Controle de Insumos e Ficha Técnica',
      gourmetech: 'Baixa automática por ingrediente no preparo',
      legacy: 'Apenas controle básico de estoque final'
    },
    {
      feature: 'PIX Dinâmico Instantâneo e Estornos Seguros',
      gourmetech: 'Integrado ao Asaas com ledger antifraude',
      legacy: 'Reconciliação manual no fim do dia'
    },
    {
      feature: 'Fidelidade Obrigatória / Multa de Saída',
      gourmetech: 'Zero. Cancele quando quiser sem multa',
      legacy: 'Contratos anuais com multas de rescisão'
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-scale-balanced text-xs"></i>
            <span>Transparência Radical</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Compare e comprove. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              A diferença entre um fornecedor e um verdadeiro parceiro.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Veja lado a lado por que donos de restaurantes e mercados estão migrando para o Gourmetech.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-sm font-bold text-slate-700 w-2/5">
                    Recurso ou Condição
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-brand bg-brand-50/70 border-x border-brand-100 w-2/5">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-crown text-amber-500 text-base"></i>
                      <span>Gourmetech</span>
                      <span className="text-[10px] bg-brand text-white px-2 py-0.5 rounded-full font-semibold ml-auto hidden sm:inline-block">
                        Recomendado
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-medium text-slate-500 w-1/5">
                    Sistemas Convencionais
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors hover:bg-slate-50/60 ${item.highlight ? 'bg-emerald-50/20' : ''}`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-brand-dark bg-brand-50/40 border-x border-brand-100">
                      <div className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-emerald-500 text-base shrink-0 mt-0.5"></i>
                        <span>{item.gourmetech}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-xmark text-rose-400 text-base shrink-0 mt-0.5"></i>
                        <span>{item.legacy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Callout inside Table */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                Quer ver como o Gourmetech funciona na sua operação?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Nossa equipe monta uma demonstração prática personalizada para o seu estabelecimento.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="white" size="md">
                  Agendar Demonstração Prática
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
