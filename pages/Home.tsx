import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import { EcosystemShowcase } from '../components/EcosystemShowcase';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { ComparisonTable } from '../components/ComparisonTable';
import { FaqSection } from '../components/FaqSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          {/* Conceptual Atmospheric Light Bubbles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 right-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-brand-400/20 rounded-full blur-3xl"
            ></motion.div>
            <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                {/* Main Headline */}
                <motion.h1 
                  variants={fadeInUp} 
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
                >
                  Gestão inteligente para o seu negócio vender mais, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-600 to-brand-dark">
                    sem pagar mensalidade fixa.
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  variants={fadeInUp} 
                  className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                >
                  O sistema de retaguarda do Compra Rápida para restaurantes e mercados: fila da cozinha e 
                  separação em tempo real, despacho de entregas e financeiro integrado. 
                  Você só investe sobre o resultado real das suas vendas.
                </motion.p>

                {/* Hero CTAs */}
                <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button size="lg" variant="glow" rightIcon={<i className="fa-solid fa-arrow-right text-sm"></i>}>
                        Começar Agora Sem Custos Fixos
                      </Button>
                    </motion.div>
                  </Link>

                  <a href="#ecosystem">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button size="lg" variant="glass" leftIcon={<i className="fa-solid fa-compass text-brand"></i>}>
                        Conhecer os Módulos
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>

                {/* Trust Highlights Strip */}
                <motion.div variants={fadeInUp} className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-amber-500"></i>
                    <span>Implantação Imediata na Nuvem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-shield-check text-emerald-500"></i>
                    <span>PIX Dinâmico Asaas Integrado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-ban text-rose-500"></i>
                    <span>Zero Fidelidade ou Multas</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero System Image Mockup with Floating Interactive Cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="mt-14 sm:mt-18 relative mx-auto max-w-5xl"
              >
                {/* Visual Frame */}
                <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-2 sm:p-3 shadow-2xl shadow-brand-950/25 ring-1 ring-slate-800/80 border border-slate-700/50 relative">
                  
                  {/* Browser-like window header */}
                  <div className="bg-slate-950/90 px-4 py-2.5 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between border-b border-slate-800 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 text-[11px] font-mono text-slate-400">app.gourmetech.com.br/home</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Sistema Operacional</span>
                    </div>
                  </div>

                  {/* Real System Screenshot */}
                  <img
                    src="/img/print-sistema.png"
                    alt="Painel do Sistema Gourmetech"
                    className="rounded-lg sm:rounded-xl w-full h-auto block shadow-inner object-cover"
                  />
                </div>

                {/* Floating Micro-Card 1: Real KDS notification */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden md:flex items-center gap-3 absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 text-left max-w-xs z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">Fila da Cozinha</span>
                    <span className="text-xs font-semibold text-slate-800 block">Venda #501 (APP) · 1/2 itens</span>
                    <span className="text-[10px] text-slate-400">Em preparo • ⏱️ 04:12 min</span>
                  </div>
                </motion.div>

                {/* Floating Micro-Card 2: Real PIX Confirmation */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="hidden md:flex items-center gap-3 absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 text-left max-w-xs z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-brands fa-pix"></i>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">PIX Dinâmico Instantâneo</span>
                    <span className="text-xs font-semibold text-slate-800 block">R$ 84,50 recebido</span>
                    <span className="text-[10px] text-slate-400">Conciliação automática Asaas</span>
                  </div>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* Benefits Strip: Why Zero Fixed Cost Wins */}
        <section id="benefits" className="py-16 bg-brand-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center sm:text-left">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Custo Fixo Zero Real</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Você não paga mensalidade para manter o sistema ligado. Se não vender em um dia de chuva ou baixo movimento, não paga nada.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Integração Compra Rápida</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Painel de vendas, tela de cozinha, gestão de entregadores e conciliação financeira em perfeita sincronia.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Nuvem & Multiplataforma</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Acesse pelo computador, tablet ou celular. Sem servidores locais pesados e sem complicações técnicas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Ecosystem Showcase Section */}
        <EcosystemShowcase />

        {/* Features Bento Grid Section */}
        <section id="features" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
                <i className="fa-solid fa-sparkles text-xs"></i>
                <span>Tecnologia de Alta Performance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Projetado para o ritmo acelerado da sua operação.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Cada funcionalidade foi desenhada para otimizar o fluxo de pedidos de delivery e evitar perdas de insumos.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Feature 1: Compra Rápida & Entregadores */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all card-hover-lift flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl mb-5">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">App Compra Rápida & Entregadores</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Seu próprio canal de delivery integrado. App dedicado para clientes e app nativo para motoboys confirmarem entregas com rota por GPS e cálculo dinâmico de taxas.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-rose-700">
                  <span>Operação de delivery completa</span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                </div>
              </div>

              {/* Feature 2: KDS Cozinha */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all card-hover-lift flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-5">
                    <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">KDS Cozinha & Separação de Pedidos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fila digital de vendas em tempo real com cronômetro visual, alertas sonoros e fluxo integrado de substituição inteligente para produtos ou insumos indisponíveis.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700">
                  <span>Preparo ágil e sem perdas de papel</span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                </div>
              </div>

              {/* Feature 3: Ficha Técnica & Estoque */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all card-hover-lift flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center text-xl mb-5">
                    <i className="fa-solid fa-boxes-stacked"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ficha Técnica & Controle de Estoque</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Baixa automática de insumos e produtos a cada pedido vendido. Alertas de estoque mínimo, controle a granel e gerenciamento de validade.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-cyan-800">
                  <span>Fim do desperdício de insumos</span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                </div>
              </div>

              {/* Feature 4: Financeiro & PIX Asaas */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all card-hover-lift flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-5">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Gestão Financeira & PIX Integrado</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Integração nativa com Asaas para liquidação instantânea via PIX, conciliação automática das vendas, contas a pagar/receber e ledger auditado de estornos.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                  <span>Conciliação automática sem planilhas</span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                </div>
              </div>

              {/* Feature 5: Futuro / Em Breve (Atendimento Presencial) */}
              <div className="bg-gradient-to-br from-slate-50 to-brand-50/40 p-7 rounded-3xl border border-dashed border-brand-200 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand text-white text-[11px] font-bold uppercase tracking-wider">
                      Em Breve
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Expansão do Ecossistema</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vendas no Estabelecimento</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                    Futuramente o Gourmetech contará com cardápio digital e frente de caixa (PDV) completa para atendimento presencial no seu restaurante ou mercado.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-100/80 flex items-center text-xs font-semibold text-brand">
                  <span>Cardápio digital e frente de caixa (PDV) em desenvolvimento</span>
                  <i className="fa-solid fa-sparkles ml-2 text-[11px]"></i>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Savings Calculator Section */}
        <SavingsCalculator />

        {/* Comparison Table Section */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final Conversion CTA Section */}
        <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-semibold uppercase tracking-wider">
              <span>Comece hoje sem riscos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Revolucione a gestão do seu restaurante ou mercado agora.
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Custo fixo zero em mensalidades, implantação acessível sob medida e sem contratos de fidelidade. 
              Cadastre seus produtos e comece a operar com a retaguarda definitiva do Compra Rápida.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="glow" rightIcon={<i className="fa-solid fa-arrow-right text-sm"></i>}>
                    Solicitar Demonstração Gratuita
                  </Button>
                </motion.div>
              </Link>

              <a
                href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20a%20usar%20o%20Gourmetech%20no%20meu%20estabelecimento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="glass" leftIcon={<i className="fa-brands fa-whatsapp text-emerald-600 text-lg"></i>}>
                    Falar com Consultor no WhatsApp
                  </Button>
                </motion.div>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              *Ativação imediata em nuvem • Treinamento dedicado • Implantação acessível sob medida
            </p>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};