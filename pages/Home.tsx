import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50"></div>
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-semibold text-sm mb-6">
            Novo: Integração com Delivery e IA
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Gestão Inteligente para <br/>
            <span className="text-brand">Restaurantes e Mercados</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Simplifique sua operação com o Gourmetech. Um ERP completo, intuitivo e sem mensalidade fixa. 
            Você só paga quando seu negócio cresce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary">
                Começar Agora <i className="fa-solid fa-arrow-right ml-2"></i>
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="white" className="border border-gray-200 shadow-sm">
                Conhecer Recursos
              </Button>
            </a>
          </div>
          
          <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="rounded-xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
               {/* Placeholder for Dashboard Image */}
               <div className="rounded-lg bg-gray-800 aspect-[16/9] flex items-center justify-center text-gray-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  <div className="text-center">
                      <i className="fa-solid fa-chart-pie text-6xl mb-4 text-brand"></i>
                      <p className="font-medium text-lg text-gray-300">Painel Administrativo Gourmetech</p>
                      <p className="text-sm text-gray-400 mt-2">Visualize vendas, estoque e muito mais em tempo real.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o Gourmetech?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Desenvolvido pensando na agilidade que seu negócio precisa.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand text-2xl">
                        <i className="fa-solid fa-coins"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Custo Zero Fixo</h3>
                    <p className="text-gray-600">
                        Esqueça mensalidades caras. Nosso modelo cobra apenas uma pequena taxa sobre as vendas. Se você não vende, não paga.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand text-2xl">
                        <i className="fa-solid fa-rocket"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Implantação Rápida</h3>
                    <p className="text-gray-600">
                        Sistema em nuvem, pronto para usar. Cadastre seus produtos e comece a vender em minutos, sem instalações complexas.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand text-2xl">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Multiplataforma</h3>
                    <p className="text-gray-600">
                        Acesse de qualquer lugar. Funciona perfeitamente em computadores, tablets e smartphones para gestão on-the-go.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tudo o que você precisa em um só lugar</h2>
                <p className="text-gray-600">Funcionalidades robustas para restaurantes e mercados.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: 'fa-boxes-stacked', title: 'Controle de Estoque', desc: 'Baixa automática de ingredientes e alerta de reposição.' },
                    { icon: 'fa-file-invoice-dollar', title: 'Emissão Fiscal', desc: 'Integrado com o Asaas (meio de pagamento).' },
                    { icon: 'fa-cash-register', title: 'PDV Intuitivo', desc: 'Frente de caixa rápido para evitar filas e agilizar o atendimento.' },
                    { icon: 'fa-users', title: 'Gestão de Mesas', desc: 'Controle de comandas e mesas para restaurantes em tempo real.' },
                    { icon: 'fa-chart-line', title: 'Relatórios Avançados', desc: 'Análises de vendas, lucro e produtos mais vendidos.' },
                    { icon: 'fa-truck-fast', title: 'Integração Compra Rápida', desc: 'Delivery para restaurantes e mercados locais com o Compra Rápida.' }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <i className={`fa-solid ${feature.icon} text-brand text-3xl mb-4`}></i>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-20 bg-brand-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Parceria de verdade é crescer junto</h2>
            <p className="text-xl text-gray-300 mb-10">
                Sem taxas de adesão. Sem mensalidade fixa. <br/>
                Cobramos apenas uma pequena porcentagem sobre as vendas realizadas.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 inline-block w-full max-w-lg">
                <div className="text-5xl font-bold mb-2">Gratuito</div>
                <div className="text-brand-light font-medium mb-8">para começar e configurar</div>
                
                <ul className="text-left space-y-4 mb-8 text-gray-200">
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-400"></i> Acesso a todos os recursos
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-400"></i> Suporte técnico incluído
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-400"></i> Atualizações automáticas
                    </li>
                </ul>
                
                <Link to="/contact">
                    <Button variant="white" size="lg" className="w-full text-brand-dark font-bold">
                        Solicitar Demonstração
                    </Button>
                </Link>
                <p className="mt-4 text-xs text-gray-400">*Consulte taxas de transação com nossa equipe comercial.</p>
            </div>
        </div>
      </section>

    </div>
  );
};