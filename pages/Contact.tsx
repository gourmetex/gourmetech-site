import React, { useState } from 'react';
import { Button } from '../components/Button';
import { submitContactForm } from '../services/api';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: 'restaurant',
    message: '',
    requestDemo: false
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData(prev => ({ ...prev, requestDemo: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setStatus({ type: 'success', message: response.message });
        setFormData({ name: '', email: '', phone: '', businessType: 'restaurant', message: '', requestDemo: false });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas sobre como o Gourmetech pode transformar seu negócio? 
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          {/* Contact Info Sidebar */}
          <div className="bg-brand text-white p-8 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Informações</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-brand-light uppercase tracking-wider font-semibold">Telefone</span>
                    <span className="text-sm">0800 123 4567</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-regular fa-envelope text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-brand-light uppercase tracking-wider font-semibold">Email</span>
                    <span className="text-sm">comercial@gourmetech.com</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-xs text-brand-light uppercase tracking-wider font-semibold">Escritório</span>
                    <span className="text-sm">Av. Paulista, 1000 - SP</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
               <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-brand-light transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
                  <a href="#" className="text-white hover:text-brand-light transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
                  <a href="#" className="text-white hover:text-brand-light transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:w-2/3">
            {status.type === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                <p className="text-green-700">{status.message}</p>
                <button onClick={() => setStatus({ type: null, message: '' })} className="mt-6 text-green-600 font-semibold hover:underline">
                    Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="voce@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Negócio</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="restaurant">Restaurante / Bar / Café</option>
                    <option value="market">Mercado / Mercearia</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="Conte um pouco sobre a sua necessidade..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="requestDemo"
                    name="requestDemo"
                    type="checkbox"
                    checked={formData.requestDemo}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
                  />
                  <label htmlFor="requestDemo" className="ml-2 block text-sm text-gray-900">
                    Gostaria de agendar uma demonstração do sistema
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};