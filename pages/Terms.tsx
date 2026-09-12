import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';

export const Terms: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    { id: 'intro', title: '1. Aceitação e Visão Geral' },
    { id: 'objeto', title: '2. Objeto e Escopo dos Serviços' },
    { id: 'acesso', title: '3. Cadastro e Segurança de Acesso' },
    { id: 'remuneracao', title: '4. Modelo Comercial e Remuneração' },
    { id: 'pagamentos', title: '5. Transações Financeiras e Estornos (Asaas)' },
    { id: 'delivery', title: '6. Compra Rápida e Módulo de Entregas' },
    { id: 'obrigacoes', title: '7. Obrigações e Conduta do Usuário' },
    { id: 'sla', title: '8. Disponibilidade, Manutenção e Backup' },
    { id: 'propriedade', title: '9. Propriedade Intelectual' },
    { id: 'rescisao', title: '10. Vigência, Cancelamento e Suspensão' },
    { id: 'foro', title: '11. Legislação Aplicável e Foro' },
    { id: 'contato', title: '12. Dúvidas e Atendimento' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="fa-solid fa-file-shield text-xs"></i>
              <span>Instrumento Jurídico Regulatório</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Termos de Uso e Condições Gerais
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Última atualização: 12 de setembro de 2026 • Versão 2.4
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Sticky Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <i className="fa-solid fa-list-ol text-brand"></i>
                <span>Índice do Documento</span>
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors duration-150 cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-brand text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-brand hover:bg-slate-50'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <i className="fa-solid fa-check-double"></i>
                  <span>Vigente para todos os estabelecimentos</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Ao acessar ou utilizar qualquer módulo da plataforma Gourmetech, você adere integralmente a estas diretrizes.
                </p>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">

              {/* Section 1 */}
              <section id="intro" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">1.</span> Aceitação e Visão Geral
                </h2>
                <p>
                  Estes Termos de Uso e Condições Gerais ("Termos") regulamentam o uso da plataforma de software como serviço (SaaS), aplicativos móveis e soluções digitais sob a denominação <strong>Gourmetech</strong>, de titularidade e propriedade exclusiva da <strong>Kinetic Solutions / Gourmetech</strong>
                </p>
                <p>
                  No presente estágio de operação, o Gourmetech atua precipuamente como <strong>sistema base e retaguarda operacional do Compra Rápida</strong>, viabilizando o gerenciamento centralizado de pedidos de delivery para restaurantes, bares, lanchonetes e mercados.
                </p>
                <p>
                  Ao cadastrar-se, acessar, integrar ou utilizar o painel administrativo do Gourmetech ou os aplicativos integrados (Compra Rápida e Compra Rápida Entregador), o estabelecimento comercial ("Lojista", "Contratante" ou "Usuário") expressa sua plena, livre e irrevogável concordância com todas as cláusulas aqui estipuladas.
                </p>
              </section>

              {/* Section 2 */}
              <section id="objeto" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">2.</span> Objeto e Escopo dos Serviços Atuais e Futuros
                </h2>
                <p>
                  A plataforma Gourmetech tem por finalidade disponibilizar infraestrutura tecnológica para a gestão, separação e logística de pedidos de delivery no ecossistema Compra Rápida.
                </p>
                <p><strong>Funcionalidades em Operação Corrente (Escopo Vigente):</strong></p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Painel de Vendas e Pedidos:</strong> recepção centralizada de pedidos do aplicativo Compra Rápida com controle de status ('Aguardando separação', 'Em separação', 'Em andamento' e 'Finalizado');</li>
                  <li><strong>Fila da Cozinha & KDS Digital:</strong> tela digital de produção e separação para cozinheiros e operadores, com cronômetro, alertas sonoros e fluxo de resolução para substituição ou cancelamento de itens indisponíveis;</li>
                  <li><strong>Módulo de Entregas & App do Entregador:</strong> despacho de pedidos para o aplicativo móvel nativo dos entregadores parceiros com cálculo dinâmico de taxas e rotas por geolocalização;</li>
                  <li><strong>Controle de Estoque & Ficha Técnica:</strong> baixa automática de ingredientes e produtos por pedido concluído, controle a granel e alertas de estoque mínimo;</li>
                  <li><strong>Módulo Financeiro Integrado (Asaas):</strong> conciliação de pagamentos instantâneos via PIX, controle de contas a pagar/receber e ledger auditado de estornos parciais e totais com garantia de idempotência.</li>
                </ul>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 mt-3">
                  <p className="font-semibold text-slate-800 mb-1">Nota sobre Módulos Presenciais (Em Desenvolvimento):</p>
                  <p>
                    Encontram-se em fase de desenvolvimento as ferramentas de Frente de Caixa (PDV) e Cardápio Digital para atendimento presencial. Tais módulos presenciais serão disponibilizados em atualizações futuras e passarão a integrar este instrumento no momento de seu lançamento oficial.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="acesso" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">3.</span> Cadastro e Segurança de Acesso
                </h2>
                <p>
                  Para utilização do sistema, o Lojista deverá fornecer informações cadastrais verídicas, completas e atualizadas (incluindo CNPJ ou CPF, razão social, endereço físico, e-mail corporativo e dados dos representantes legais).
                </p>
                <p>
                  As credenciais de acesso (login, senha e tokens JWT de autenticação) são de uso estritamente pessoal e intransferível. O Lojista é o único responsável pela definição de níveis de permissão entre seus operadores, gerentes, garçons e cozinheiros, respondendo civil e administrativamente por qualquer ação realizada por meio de suas contas autorizadas.
                </p>
              </section>

              {/* Section 4 */}
              <section id="remuneracao" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">4.</span> Modelo Comercial e Remuneração
                </h2>
                <p>
                  O Gourmetech adota como premissa o modelo de <strong>remuneração por sucesso ("Custo Fixo Zero")</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Sem Mensalidade Fixa Obrigatória:</strong> não é cobrada taxa mensal fixa de manutenção ou aluguel de licença de software em períodos em que não houver faturamento;</li>
                  <li><strong>Taxa sobre Transação Efetiva:</strong> incidirá uma taxa percentual acordada previamente no ato do credenciamento comercial sobre o valor bruto das transações operadas ou intermediadas pelo sistema;</li>
                  <li><strong>Taxa Única de Implantação e Onboarding:</strong> para a ativação inicial da conta, parametrização operacional e treinamento, aplica-se uma taxa única de setup em valor significativamente reduzido em comparação aos padrões de mercado. O valor varia conforme a modalidade escolhida pelo CONTRATANTE: (a) Modalidade com Treinamento e Auto-cadastro (valor inicial reduzido com capacitação da equipe e suporte para alimentação autônoma do catálogo); ou (b) Modalidade de Implantação Assistida, com carga e higienização completa do catálogo pela equipe técnica do Gourmetech, calculada proporcionalmente ao volume de itens e categorias do cardápio/catálogo estipulado na proposta comercial.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="pagamentos" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">5.</span> Transações Financeiras e Estornos (Asaas)
                </h2>
                <p>
                  As operações de pagamento eletrônico (PIX dinâmico, cartões de crédito e split de recebíveis) são viabilizadas em parceria com a instituição de pagamento <strong>Asaas Gestão Financeira S.A.</strong>
                </p>
                <p>
                  <strong>Política de Estornos Parciais e Totais:</strong> Em conformidade com as regras operacionais do sistema e a legislação de defesa do consumidor, caso um item de pedido pago pelo consumidor final venha a ser cancelado na cozinha (KDS) por indisponibilidade de insumos ou recusa operacional, o Gourmetech acionará automaticamente a restituição integral ou proporcional dos valores correspondentes via ledger de estornos, garantindo a conciliação bancária e a transparência contábil do estabelecimento.
                </p>
              </section>

              {/* Section 6 */}
              <section id="delivery" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">6.</span> Compra Rápida e Módulo de Entregas
                </h2>
                <p>
                  A plataforma disponibiliza a infraestrutura de software para gestão de delivery direto (aplicativo Compra Rápida e aplicativo de entregador), cabendo exclusivamente ao Lojista:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>A preparação, embalagem, integridade e conformidade sanitária dos alimentos ou produtos comercializados;</li>
                  <li>A gestão direta, contratação e remuneração da frota de entregadores parceiros ou próprios;</li>
                  <li>A definição das zonas de entrega, tempos estimados e precificação de frete por raio ou bairro.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="obrigacoes" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">7.</span> Obrigações e Conduta do Usuário
                </h2>
                <p>
                  O Usuário compromete-se a: (a) utilizar a plataforma em estrita consonância com a legislação brasileira, normas sanitárias (ANVISA) e fiscais; (b) não praticar engenharia reversa, descompilação ou ataques cibernéticos contra a infraestrutura de servidores do Gourmetech; (c) não utilizar a plataforma para transações ilícitas, fraudulentas ou de lavagem de dinheiro; (d) manter atualizados seus dados fiscais para correta apuração tributária.
                </p>
              </section>

              {/* Section 8 */}
              <section id="sla" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">8.</span> Disponibilidade, Manutenção e Backup
                </h2>
                <p>
                  O Gourmetech empenha seus melhores esforços técnicos para manter a disponibilidade dos serviços em índice de 99,5% (noventa e nove vírgula cinco por cento) ao ano. Janelas programadas de manutenção e atualizações preventivas serão, sempre que possível, executadas em horários de menor impacto operacional (madrugadas), com notificação prévia aos administradores.
                </p>
              </section>

              {/* Section 9 */}
              <section id="propriedade" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">9.</span> Propriedade Intelectual
                </h2>
                <p>
                  Todas as marcas, códigos-fonte, bancos de dados, interfaces visuais, logotipos, arquitetura de sistemas e documentações associadas ao Gourmetech e Compra Rápida são de propriedade exclusiva da Kinetic Solutions / Gourmetech, sendo estritamente vedada qualquer reprodução, cessão ou licenciamento não autorizado expressamente por escrito.
                </p>
              </section>

              {/* Section 10 */}
              <section id="rescisao" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">10.</span> Vigência, Cancelamento e Suspensão
                </h2>
                <p>
                  O presente contrato vige por prazo indeterminado a contar do aceite digital. O Lojista poderá solicitar o encerramento de sua conta a qualquer momento, sem exigência de aviso prévio penalizador ou cláusula de fidelidade de longo prazo, bastando quitar eventuais taxas proporcionais pendentes sobre vendas já concretizadas.
                </p>
              </section>

              {/* Section 11 */}
              <section id="foro" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">11.</span> Legislação Aplicável e Foro
                </h2>
                <p>
                  Estes Termos são regidos exclusivamente pelas leis da República Federativa do Brasil, em especial o Código Civil Brasileiro (Lei 10.406/2002), o Marco Civil da Internet (Lei 12.965/2014) e a Lei Geral de Proteção de Dados (Lei 13.709/2018). Para dirimir eventuais controvérsias, fica eleito o Foro Central da Comarca de Curitiba, Estado do Paraná.
                </p>
              </section>

              {/* Section 12 */}
              <section id="contato" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">12.</span> Dúvidas e Atendimento
                </h2>
                <p>
                  Para esclarecimentos regulatórios, suporte ou notificações jurídicas relativas a estes Termos, entre em contato através dos nossos canais oficiais:
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-1">
                  <p><strong>Gourmetech.</strong></p>
                  <p>E-mail oficial: <a href="mailto:appgourmetech@gmail.com" className="text-brand hover:underline font-semibold">appgourmetech@gmail.com</a></p>
                  <p>Telefone / WhatsApp Comercial: <span className="font-semibold text-slate-800">(41) 9 9877-1127</span></p>
                </div>
              </section>

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};