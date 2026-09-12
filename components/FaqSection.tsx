import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona o modelo sem mensalidade fixa? Existe taxa de implantação?',
      answer: 'Não cobramos mensalidade fixa nem exigimos contratos de fidelidade. Você conta com custo fixo mensal zero de licenças, pagando apenas uma pequena porcentagem justa sobre os pedidos efetivamente vendidos. Para a ativação da sua loja, temos uma taxa única de implantação muito menor que a do mercado tradicional (a partir de R$ 149 na opção com treinamento e auto-cadastro, ou planos assistidos em que nossa equipe cadastra todo o seu catálogo de acordo com o porte do seu negócio).'
    },
    {
      question: 'Preciso comprar computadores caros ou equipamentos específicos?',
      answer: 'Não! O Gourmetech é 100% em nuvem e multiplataforma. Você pode utilizá-lo em computadores comuns (Windows, Mac ou Linux), notebooks, tablets e smartphones (Android e iOS). Para a cozinha ou área de separação, qualquer tablet, celular ou monitor com navegador vira um KDS completo para a sua equipe.'
    },
    {
      question: 'Como funciona o aplicativo de delivery Compra Rápida?',
      answer: 'O Compra Rápida é o seu canal de delivery próprio. Seus clientes pedem diretamente pelo aplicativo. Além disso, o sistema conta com um aplicativo nativo exclusivo para os seus entregadores/motoboys, calculando rotas por GPS, taxas dinâmicas por distância e atualizando o status do pedido em tempo real a cada etapa da entrega.'
    },
    {
      question: 'E se faltar um item ou ingrediente na cozinha durante um pedido já pago?',
      answer: 'O Gourmetech conta com uma tecnologia de resolução de pedidos na cozinha (KDS) e ledger de estornos parciais integrado ao gateway Asaas. Se um item estiver em falta, o operador pode selecionar um item substituto aprovado ou cancelar a linha do produto. O sistema recalcula o valor automaticamente e devolve a diferença ao cliente no mesmo PIX, sem gerar inconsistência financeira.'
    },
    {
      question: 'Como controlo o estoque com ficha técnica?',
      answer: 'Ao cadastrar produtos ou pratos, você pode associar a ficha técnica com os ingredientes ou composição exata. Cada vez que uma venda de delivery é concluída, o sistema dá baixa automática proporcional nos ingredientes e avisa quando o estoque atingir o nível mínimo configurado.'
    },
    {
      question: 'Como funciona a taxa de implantação e o treinamento da equipe?',
      answer: 'Nossa implantação é rápida, humanizada e com valores muito menores do que os cobrados por sistemas tradicionais (que exigem de R$ 800 a R$ 2.500 de taxa inicial). Disponibilizamos duas opções: (1) Implantação com Treinamento (a partir de R$ 149): configuramos sua loja, regras de entrega, KDS e meios de pagamento, capacitando sua equipe para operar e cadastrar os produtos com autonomia e suporte; (2) Implantação Assistida (sob medida): nossa equipe cadastra seu catálogo completo com fotos, categorias e adicionais, entregando a operação chave na mão. O suporte técnico é contínuo via WhatsApp e e-mail.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-circle-question text-xs"></i>
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Respostas claras para você <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              tomar a melhor decisão para o seu negócio.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tudo o que você precisa saber sobre funcionamento, implantação e segurança do Gourmetech.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200/70 shadow-sm">
          <p className="text-sm font-medium text-slate-700 mb-3">
            Ainda ficou com alguma dúvida sobre a operação no seu estabelecimento?
          </p>
          <a
            href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20Gourmetech."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>Conversar agora com um especialista no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
