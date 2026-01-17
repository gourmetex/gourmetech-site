import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { submitContactForm } from '../services/api';
import { ContactFormData } from '../types';
import { PageTransition } from '../components/PageTransition';

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
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message || 'Ocorreu um erro ao enviar.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Entre em Contato
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Tem dúvidas sobre como o Gourmetech pode transformar seu negócio?
              Preencha o formulário abaixo e nossa equipe entrará em contato.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex"
          >
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
                      <span className="block text-xs text-blue-200 uppercase tracking-wider font-semibold">Telefone</span>
                      <span className="text-sm">(41) 9 9877-1127</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa-regular fa-envelope text-sm"></i>
                    </div>
                    <div>
                      <span className="block text-xs text-blue-200 uppercase tracking-wider font-semibold">Email</span>
                      <span className="text-sm">appgourmetech@gmail.com</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-location-dot text-sm"></i>
                    </div>
                    <div>
                      <span className="block text-xs text-blue-200 uppercase tracking-wider font-semibold">Escritório</span>
                      <span className="text-sm">Av. Paulista, 1000 - SP</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-blue-200 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
                </div>
              </div>
            </div>

            {/* Form Area with Animations */}
            <div className="p-8 md:w-2/3 relative">
              {loading && (
                <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center"></div>
              )}

              {status.type === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-lg"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700">{status.message}</p>
                  <button onClick={() => setStatus({ type: null, message: '' })} className="mt-6 text-green-600 font-semibold hover:underline">
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.type === 'error' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <p className="text-sm text-red-700">{status.message}</p>
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                      <input type="text" id="name" name="name" required disabled={loading} value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" required disabled={loading} value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                    <input type="email" id="email" name="email" required disabled={loading} value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400" placeholder="voce@empresa.com" />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Negócio</label>
                    <select id="businessType" name="businessType" value={formData.businessType} disabled={loading} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white disabled:bg-gray-100 disabled:text-gray-400">
                      <option value="restaurant">Restaurante / Bar / Café</option>
                      <option value="market">Mercado / Mercearia</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                    <textarea id="message" name="message" rows={4} required disabled={loading} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400" placeholder="Conte um pouco sobre a sua necessidade..."></textarea>
                  </div>
                  <div className="flex items-center">
                    <input id="requestDemo" name="requestDemo" type="checkbox" checked={formData.requestDemo} disabled={loading} onChange={handleCheckboxChange} className="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded" />
                    <label htmlFor="requestDemo" className="ml-2 block text-sm text-gray-900">Gostaria de agendar uma demonstração do sistema</label>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full" size="lg" isLoading={loading} disabled={loading}>
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};