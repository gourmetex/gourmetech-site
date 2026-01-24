import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">Última atualização: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Aceitação dos Termos</h2>
          <p className="mb-4">
            Ao acessar e usar o software Gourmetech ("Serviço"), você concorda em cumprir e estar vinculado a estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, você não deve usar nosso serviço.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Descrição do Serviço</h2>
          <p className="mb-4">
            O Gourmetech é um sistema de gestão empresarial (ERP) voltado para restaurantes e mercados. 
            O serviço é fornecido "como está" e pode ser atualizado periodicamente.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Modelo de Cobrança</h2>
          <p className="mb-4">
            O Gourmetech opera em um modelo de comissão sobre vendas. Não cobramos mensalidade fixa. 
            Uma taxa percentual acordada no momento do cadastro será aplicada sobre o volume de transações processadas ou registradas no sistema.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Responsabilidades do Usuário</h2>
          <p className="mb-4">
            Você é responsável por manter a confidencialidade de sua conta e senha. 
            Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Propriedade Intelectual</h2>
          <p className="mb-4">
            Todo o conteúdo, design, gráficos e código relacionados ao Gourmetech são propriedade exclusiva da Kinetic Solutions, proprietária do sistema Gourmetech.
          </p>
        </div>
      </div>
    </div>
  );
};