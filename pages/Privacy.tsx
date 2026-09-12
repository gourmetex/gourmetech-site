import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';

export const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    { id: 'intro', title: '1. Compromisso e Controlador' },
    { id: 'coleta', title: '2. Dados Pessoais Coletados' },
    { id: 'bases', title: '3. Finalidades e Bases Legais (LGPD)' },
    { id: 'compartilhamento', title: '4. Compartilhamento Seguro com Terceiros' },
    { id: 'seguranca', title: '5. Segurança da Informação e Salvaguardas' },
    { id: 'direitos', title: '6. Direitos dos Titulares de Dados' },
    { id: 'retencao', title: '7. Retenção e Descarte de Informações' },
    { id: 'cookies', title: '8. Cookies e Tecnologias de Sessão' },
    { id: 'alteracoes', title: '9. Atualizações desta Política' },
    { id: 'dpo', title: '10. Canal do Encarregado (DPO)' }
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="fa-solid fa-shield-halved text-xs"></i>
              <span>Em conformidade com a LGPD (Lei nº 13.709/2018)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Última atualização: 12 de setembro de 2026 • Versão 2.4
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Sticky Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <i className="fa-solid fa-lock text-brand"></i>
                <span>Tópicos de Privacidade</span>
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
                  <i className="fa-solid fa-user-shield"></i>
                  <span>Privacidade por Padrão (Privacy by Default)</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Não comercializamos dados pessoais de estabelecimentos nem de clientes finais sob nenhuma hipótese.
                </p>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">

              {/* Section 1 */}
              <section id="intro" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">1.</span> Compromisso e Identificação do Controlador
                </h2>
                <p>
                  A <strong>Gourmetech.</strong> ("Gourmetech", "nós" ou "plataforma") reconhece a importância fundamental da privacidade, da segurança e da transparência no tratamento de dados pessoais no âmbito do seu ecossistema tecnológico.
                </p>
                <p>
                  Esta Política de Privacidade tem por objetivo esclarecer como coletamos, utilizamos, armazenamos, compartilhamos e protegemos os dados pessoais de administradores, colaboradores de estabelecimentos comerciais ("Lojistas"), consumidores finais do aplicativo de delivery Compra Rápida e entregadores parceiros, em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei Federal nº 13.709/2018)</strong> e o Marco Civil da Internet (Lei nº 12.965/2014).
                </p>
              </section>

              {/* Section 2 */}
              <section id="coleta" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">2.</span> Dados Pessoais Coletados
                </h2>
                <p>O Gourmetech coleta dados estritamente necessários para viabilizar as operações contratadas:</p>
                
                <div className="space-y-4 pt-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">A. Dados de Lojistas e Operadores</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Razão social, nome fantasia, CNPJ, nome completo do representante legal, CPF, e-mail corporativo, número de telefone/WhatsApp de contato, endereço físico do estabelecimento e dados bancários/de credenciamento no gateway Asaas para liquidação financeira.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">B. Dados de Consumidores Finais e Entregadores do Compra Rápida</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Nome, número de telefone para autenticação, endereço de entrega com coordenadas de geolocalização para cálculo dinâmico de taxa e roteirização do entregador, histórico de pedidos, preferências de indisponibilidade/substituição de itens e identificadores de pagamento.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">C. Dados Técnicos e Registros de Acesso</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Endereço IP, data e hora dos acessos, logs de requisição de API, tipo de navegador, sistema operacional e identificadores de sessão baseados em tokens JWT criptografados.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="bases" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">3.</span> Finalidades e Bases Legais (LGPD)
                </h2>
                <p>O tratamento de dados pessoais no Gourmetech pauta-se nas seguintes bases legais do art. 7º da LGPD:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Execução de Contrato e Procedimentos Preliminares (Art. 7º, V):</strong> autenticação de usuários no ERP, recepção e separação de pedidos na fila da cozinha (KDS), despacho de entregas e liquidação de vendas via Asaas;
                  </li>
                  <li>
                    <strong>Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):</strong> guarda de logs de conexão e de aplicação pelo prazo mínimo legal de 6 meses (Marco Civil da Internet), bem como retenção de registros fiscais e contábeis de faturamento;
                  </li>
                  <li>
                    <strong>Exercício Regular de Direitos (Art. 7º, VI):</strong> manutenção de registros auditáveis de estornos parciais ou totais e resolução de eventuais contestações comerciais (chargebacks);
                  </li>
                  <li>
                    <strong>Legítimo Interesse (Art. 7º, IX):</strong> aprimoramento da performance do sistema, segurança contra ataques de força bruta e envio de comunicações essenciais sobre atualizações de software.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="compartilhamento" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">4.</span> Compartilhamento Seguro com Terceiros
                </h2>
                <p>
                  O Gourmetech <strong>jamais vende, aluga ou monetiza dados pessoais</strong> de qualquer titular. O compartilhamento ocorre exclusivamente com prestadores de serviços estritamente essenciais para a prestação dos serviços:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Instituição de Pagamento Parceira (Asaas Gestão Financeira S.A.):</strong> para processamento de cobranças via PIX dinâmico, cartões e liquidação bancária automatizada;</li>
                  <li><strong>Provedores de Nuvem e Servidores Seguros:</strong> infraestrutura em nuvem de alta disponibilidade dotada de certificações internacionais de segurança (como SOC 2 e ISO 27001);</li>
                  <li><strong>Serviços de Mensageria e Notificação (WhatsApp API):</strong> para envio de atualizações em tempo real do status de pedidos para os consumidores finais;</li>
                  <li><strong>Autoridades Públicas:</strong> mediante requisição judicial ou obrigação fiscal expressa em lei.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="seguranca" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">5.</span> Segurança da Informação e Salvaguardas
                </h2>
                <p>
                  Adotamos rigorosas medidas técnicas e organizacionais de proteção de dados, incluindo:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Criptografia de ponta a ponta em trânsito com protocolo HTTPS/TLS de última geração;</li>
                  <li>Autenticação de usuários via tokens JWT (JSON Web Tokens) com tempo de expiração e invalidação remota;</li>
                  <li>Controle rigoroso de controle de acesso granular por papel (RBAC: cozinheiro, garçom, operador de caixa, gerente e administrador);</li>
                  <li>Chaves de idempotência únicas em todas as operações de estorno e pagamento, prevenindo duplicidades ou fraudes;</li>
                  <li>Backups periódicos e redundância lógica para garantia de continuidade operacional.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="direitos" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">6.</span> Direitos dos Titulares de Dados
                </h2>
                <p>
                  Em atendimento ao Artigo 18 da LGPD, os titulares de dados tratados pelo Gourmetech podem exercer os seguintes direitos mediante solicitação ao nosso canal de privacidade:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Confirmação da existência de tratamento e acesso aos dados pessoais armazenados;</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                  <li>Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa;</li>
                  <li>Informação sobre as entidades com as quais os dados foram compartilhados;</li>
                  <li>Revogação do consentimento, quando esta for a base legal aplicável.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="retencao" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">7.</span> Retenção e Descarte de Informações
                </h2>
                <p>
                  Os dados pessoais serão conservados pelo período necessário para atender às finalidades operacionais descritas nesta Política, respeitando prazos prescricionais legais (como os prazos de guarda fiscal do Código Tributário Nacional e de logs previstos no Marco Civil da Internet). Após o término do prazo aplicável, os dados serão descartados de forma segura ou anonimizados para fins estatísticos.
                </p>
              </section>

              {/* Section 8 */}
              <section id="cookies" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">8.</span> Cookies e Tecnologias de Sessão
                </h2>
                <p>
                  O site e as aplicações web do Gourmetech utilizam cookies estritamente necessários para manutenção da sessão autenticada, segurança de navegação e preferências básicas de interface. Não utilizamos cookies de rastreamento comportamental de terceiros para publicidade abusiva.
                </p>
              </section>

              {/* Section 9 */}
              <section id="alteracoes" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">9.</span> Atualizações desta Política
                </h2>
                <p>
                  Buscando contínua melhoria e conformidade regulatória, esta Política de Privacidade poderá ser atualizada periodicamente. As versões atualizadas entrarão em vigor na data de publicação em nosso site oficial, com indicação clara da data de revisão no topo do documento.
                </p>
              </section>

              {/* Section 10 */}
              <section id="dpo" className="space-y-3 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="text-brand">10.</span> Canal do Encarregado de Dados (DPO)
                </h2>
                <p>
                  Para exercer seus direitos de titular, tirar dúvidas sobre o tratamento de dados pessoais ou enviar notificações relativas à privacidade, entre em contato direto com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
                </p>
                <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 text-sm space-y-1">
                  <p className="font-bold text-emerald-950">Encarregado de Proteção de Dados (DPO) — Gourmetech</p>
                  <p>E-mail de privacidade: <a href="mailto:appgourmetech@gmail.com" className="text-emerald-800 hover:underline font-semibold">appgourmetech@gmail.com</a></p>
                  <p className="text-xs text-emerald-700 pt-1">
                    Prazo de resposta inicial para requisições de titulares: até 15 (quinze) dias úteis, conforme preconizado pelo Art. 19 da LGPD.
                  </p>
                </div>
              </section>

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};