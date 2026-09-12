import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModuleData {
  id: string;
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  mockupType: 'delivery' | 'kds' | 'orders' | 'financial';
}

export const EcosystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('delivery');

  const modules: ModuleData[] = [
    {
      id: 'delivery',
      badge: 'Delivery Compra Rápida',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: 'fa-truck-fast',
      title: 'App Compra Rápida & App de Entregadores',
      subtitle: 'O Gourmetech é o sistema base e motor operacional do Compra Rápida.',
      description: 'Centralize a operação de delivery do seu restaurante ou mercado. Receba os pedidos originados no Compra Rápida diretamente no seu painel, envie para a cozinha, calcule o frete por distância e despache para o aplicativo nativo dos motoboys.',
      keyBenefits: [
        'App nativo para o entregador confirmar rota e entrega',
        'Cálculo automático de taxa de entrega por raio geográfico',
        'Acompanhamento em tempo real do status da entrega',
        'Despacho direto da cozinha para a rota sem atrasos'
      ],
      mockupType: 'delivery'
    },
    {
      id: 'kds',
      badge: 'Fila da Cozinha & Separação',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: 'fa-kitchen-set',
      title: 'Fila da Cozinha em Tempo Real & Separação',
      subtitle: 'Elimine comandas de papel e garanta precisão no preparo e separação.',
      description: 'Painel digital: visualize a fila de vendas do app em tempo real, acompanhe o tempo decorrido, filtre por itens prontos e utilize o fluxo de resolução de itens indisponíveis com substituição rápida.',
      keyBenefits: [
        'Fila organizada por tempo de espera e status',
        'Alertas visuais e sonoros a cada novo pedido do app',
        'Fluxo de resolução e substituição de item indisponível'
      ],
      mockupType: 'kds'
    },
    {
      id: 'orders',
      badge: 'Painel de Vendas',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: 'fa-list-check',
      title: 'Gestão de Vendas & Envio para Separação',
      subtitle: 'Acompanhamento ponta a ponta dos pedidos de delivery.',
      description: 'Controle centralizado de todas as comandas e vendas. Permite enviar vendas do app para separação, conferir valores parciais e finais, monitorar o status do pedido e emitir recibos em PDF.',
      keyBenefits: [
        'Ação rápida de Enviar para Separação para pedidos do app',
        'Controle de status: Aguardando separação, Em andamento e Finalizado',
        'Emissão e download de recibo detalhado em PDF',
        'Baixa sincronizada de produtos no estoque'
      ],
      mockupType: 'orders'
    },
    {
      id: 'financial',
      badge: 'Gestão Financeira & PIX',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      icon: 'fa-scale-balanced',
      title: 'Financeiro Integrado Asaas & Ledger de Estornos',
      subtitle: 'Controle de contas a pagar, a receber e conciliação bancária.',
      description: 'Integração nativa com o Asaas para recebimento instantâneo via PIX, conciliação automática das vendas do delivery, controle de contas a pagar/receber e ledger auditado de estornos parciais.',
      keyBenefits: [
        'PIX dinâmico com confirmação automática em segundos',
        'Ledger seguro de estornos parciais e totais',
        'Contas a pagar, a receber e fluxo de caixa',
        'Relatórios de vendas e lucratividade real'
      ],
      mockupType: 'financial'
    }
  ];

  const currentModule = modules.find(m => m.id === activeTab) || modules[0];

  return (
    <section id="ecosystem" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-layer-group text-xs"></i>
            <span>Sistema Base do Compra Rápida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            A infraestrutura completa para o delivery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              de restaurantes e mercados.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            O Gourmetech é o sistema que gerencia pedidos, separação na cozinha, entregadores e financeiro 
            do ecossistema Compra Rápida — com custo fixo zero.
          </p>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-start lg:justify-center">
          {modules.map((m) => {
            const isSelected = activeTab === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-brand text-white shadow-md shadow-brand/25 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-brand border border-slate-200/60'
                }`}
              >
                <i className={`fa-solid ${m.icon} text-sm ${isSelected ? 'text-white' : 'text-brand'}`}></i>
                <span>{m.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Preview Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModule.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            {/* Left Column: Descriptive & Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${currentModule.badgeColor}`}>
                  {currentModule.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {currentModule.title}
                </h3>
                <p className="text-sm font-medium text-brand">
                  {currentModule.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentModule.description}
              </p>

              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Destaques operacionais:</p>
                {currentModule.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-50 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors group"
                >
                  <span>Ver demonstração deste módulo</span>
                  <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Real System UI Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden font-sans">
                
                {/* Real System Top Header (#3E6990) */}
                <div className="bg-[#3E6990] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="cursor-pointer hover:opacity-80">
                      <i className="fa-solid fa-bars text-lg"></i>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        U
                      </div>
                      <span className="text-xs font-semibold">Super Mais Alimentos</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="relative cursor-pointer">
                      <i className="fa-regular fa-bell text-base"></i>
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                        3
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-100 hidden sm:inline-block">gourmetech-system</span>
                  </div>
                </div>

                {/* Sub-Header / Page Content Area */}
                <div className="p-4 sm:p-6 bg-[#F8FAFC]">

                  {/* 1. KDS Mockup (Real Fila da Cozinha screen) */}
                  {currentModule.mockupType === 'kds' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <h4 className="text-lg font-bold text-slate-800">Fila da cozinha</h4>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#3E6990] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs">
                            <i className="fa-solid fa-print text-xs"></i>
                            <span>IMPRIMIR (1)</span>
                          </button>
                        </div>
                      </div>

                      {/* Real dataTable grid of kitchen orders */}
                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-[#F1F5F9] text-slate-600 font-semibold border-b border-slate-200 text-[11px]">
                            <tr>
                              <th className="py-2.5 px-3 text-center w-12">Nº</th>
                              <th className="py-2.5 px-3">Cliente</th>
                              <th className="py-2.5 px-3 text-center">Origem</th>
                              <th className="py-2.5 px-3 text-center">Mesa/Entrega</th>
                              <th className="py-2.5 px-3 text-center">Itens</th>
                              <th className="py-2.5 px-3 text-center">Tempo na fila</th>
                              <th className="py-2.5 px-3 text-center w-10"></th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr className="hover:bg-blue-50/50 cursor-pointer bg-blue-50/30">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">501</td>
                              <td className="py-2.5 px-3 font-semibold">Carlos Silva</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-[#3E6990] text-white text-[10px] px-2 py-0.5 rounded-md font-bold">
                                  APP
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center font-medium">Entrega #142</td>
                              <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-600">1/2</td>
                              <td className="py-2.5 px-3 text-center font-mono text-slate-600">08:24</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">
                                <i className="fa-solid fa-print"></i>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">502</td>
                              <td className="py-2.5 px-3 font-semibold">Mariana Souza</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-[#3E6990] text-white text-[10px] px-2 py-0.5 rounded-md font-bold">
                                  APP
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center font-medium">Entrega #143</td>
                              <td className="py-2.5 px-3 text-center font-mono font-bold text-emerald-600">2/2</td>
                              <td className="py-2.5 px-3 text-center font-mono text-slate-600">03:10</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">
                                <i className="fa-solid fa-print"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Detail View of order items (Nível 2 do sistema real) */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-slate-800">Item em Resolução na Cozinha:</span>
                          <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                            EM PREPARO ⏱️ 04:15
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          <div>
                            <span className="font-semibold block">1x Filé de Peito de Frango 1kg</span>
                            <span className="text-[11px] text-slate-500">Obs: Embalagem a vácuo</span>
                          </div>
                          <div className="flex gap-1.5">
                            <button className="px-2.5 py-1 bg-[#3E6990] text-white text-[10px] font-bold rounded hover:opacity-90">
                              CONFIRMAR
                            </button>
                            <button className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded hover:opacity-90">
                              CANCELAR
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Delivery Mockup (Real shippingComponent.vue screen) */}
                  {currentModule.mockupType === 'delivery' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <h4 className="text-lg font-bold text-slate-800">Entregas</h4>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#3E6990] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs">
                            <i className="fa-solid fa-motorcycle text-xs"></i>
                            <span>ENVIAR PARA ENTREGA</span>
                          </button>
                        </div>
                      </div>

                      {/* Real dataTable grid of deliveries */}
                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-[#F1F5F9] text-slate-600 font-semibold border-b border-slate-200 text-[11px]">
                            <tr>
                              <th className="py-2.5 px-3 text-center w-12">ID</th>
                              <th className="py-2.5 px-3 text-center">Nº Comanda</th>
                              <th className="py-2.5 px-3">Cliente</th>
                              <th className="py-2.5 px-3 text-right">Valor Total</th>
                              <th className="py-2.5 px-3 text-center">Status</th>
                              <th className="py-2.5 px-3">Entregador</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">142</td>
                              <td className="py-2.5 px-3 text-center font-medium">501</td>
                              <td className="py-2.5 px-3 font-semibold">Carlos Silva</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">R$ 84,50</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Em rota
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-slate-600">Carlos Eduardo</td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">143</td>
                              <td className="py-2.5 px-3 text-center font-medium">502</td>
                              <td className="py-2.5 px-3 font-semibold">Mariana Souza</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">R$ 138,00</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Concluído
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-slate-600">Marcos Roberto</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-[#2E4F6C] text-white p-3.5 rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-location-dot text-emerald-400"></i>
                          <span>App do Entregador conectado via GPS • Taxas calculadas automaticamente</span>
                        </div>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">GPS Ativo</span>
                      </div>
                    </div>
                  )}

                  {/* 3. Orders Mockup (Real ordersComponent.vue screen) */}
                  {currentModule.mockupType === 'orders' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <h4 className="text-lg font-bold text-slate-800">Vendas</h4>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#3E6990] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs">
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                            <span>ENVIAR PARA SEPARAÇÃO</span>
                          </button>
                        </div>
                      </div>

                      {/* Real dataTable grid of orders */}
                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-[#F1F5F9] text-slate-600 font-semibold border-b border-slate-200 text-[11px]">
                            <tr>
                              <th className="py-2.5 px-3 text-center w-14">Comanda</th>
                              <th className="py-2.5 px-3">Cliente</th>
                              <th className="py-2.5 px-3 text-center">Delivery</th>
                              <th className="py-2.5 px-3 text-right">Valor Final</th>
                              <th className="py-2.5 px-3 text-center">Status do pedido</th>
                              <th className="py-2.5 px-3 text-center w-12">Recibo</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">501</td>
                              <td className="py-2.5 px-3 font-semibold">Carlos Silva</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">Sim</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">R$ 84,50</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Em separação
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-slate-400">
                                <i className="fa-solid fa-file-pdf"></i>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">502</td>
                              <td className="py-2.5 px-3 font-semibold">Mariana Souza</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">Sim</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">R$ 138,00</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Finalizado
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-[#3E6990]">
                                <i className="fa-solid fa-file-arrow-down"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 4. Financial Mockup (Real financialComponent.vue screen) */}
                  {currentModule.mockupType === 'financial' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <h4 className="text-lg font-bold text-slate-800">Financeiro</h4>
                        <div className="flex gap-2">
                          <button className="px-2.5 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs">
                            <i className="fa-solid fa-plus text-xs"></i>
                            <span className="hidden sm:inline">LANÇAR</span> A RECEBER
                          </button>
                          <button className="px-2.5 py-1.5 bg-[#3E6990] text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs">
                            <i className="fa-solid fa-minus text-xs"></i>
                            <span className="hidden sm:inline">LANÇAR</span> A PAGAR
                          </button>
                        </div>
                      </div>

                      {/* Real dataTable grid of debts/accounts */}
                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-[#F1F5F9] text-slate-600 font-semibold border-b border-slate-200 text-[11px]">
                            <tr>
                              <th className="py-2.5 px-3 text-center w-12">ID</th>
                              <th className="py-2.5 px-3">Discriminação</th>
                              <th className="py-2.5 px-3 text-right">Valor</th>
                              <th className="py-2.5 px-3 text-center">Tipo</th>
                              <th className="py-2.5 px-3 text-center">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">1081</td>
                              <td className="py-2.5 px-3 font-medium">Venda Delivery App #501 (PIX Asaas)</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-600">R$ 84,50</td>
                              <td className="py-2.5 px-3 text-center text-slate-500">Receber</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Pago
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="py-2.5 px-3 text-center font-bold text-[#3E6990]">1082</td>
                              <td className="py-2.5 px-3 font-medium">Fornecedor Hortifrúti (Insumos)</td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-rose-600">R$ 350,00</td>
                              <td className="py-2.5 px-3 text-center text-slate-500">Pagar</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  Pendente
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center justify-between text-xs text-emerald-900">
                        <span className="font-medium">
                          ✓ Conciliação Asaas ativa • Ledger de estornos automáticos para cancelamentos parciais
                        </span>
                        <span className="font-mono font-bold text-emerald-700">100% Auditado</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Teaser: Em breve no Gourmetech */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-lg shrink-0">
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Em breve: Atendimento Presencial no Estabelecimento
              </h4>
              <p className="text-xs text-slate-500">
                Futuramente o Gourmetech contará com cardápio digital e frente de caixa (PDV) para atendimento presencial no seu negócio.
              </p>
            </div>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold whitespace-nowrap">
            Módulos em Desenvolvimento
          </span>
        </div>

      </div>
    </section>
  );
};
