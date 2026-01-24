import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">Última atualização: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Coleta de Informações</h2>
          <p className="mb-4">
            Coletamos informações que você nos fornece diretamente ao criar uma conta, solicitar uma demonstração ou usar nosso serviço. 
            Isso inclui nome, e-mail, telefone, dados da empresa e dados de transações.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Uso das Informações</h2>
          <p className="mb-4">
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Fornecer, manter e melhorar nossos serviços;</li>
            <li>Processar transações e enviar notificações relacionadas;</li>
            <li>Responder aos seus comentários e perguntas;</li>
            <li>Enviar comunicações de marketing (que você pode optar por não receber).</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Compartilhamento de Dados</h2>
          <p className="mb-4">
            Não vendemos seus dados pessoais. Compartilhamos informações apenas com prestadores de serviços terceirizados 
            que nos ajudam a operar o negócio (como processadores de pagamento e hospedagem em nuvem), sob rigorosos acordos de confidencialidade.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Segurança</h2>
          <p className="mb-4">
            Empregamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, 
            alteração ou destruição.
          </p>
          
           <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Contato</h2>
          <p className="mb-4">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em appgourmetech@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};