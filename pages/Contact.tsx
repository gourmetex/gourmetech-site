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
    requestDemo: true
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const businessTypes = [
    { value: 'restaurant', label: 'Restaurante / Bar / Pub', icon: 'fa-utensils' },
    { value: 'pizzeria', label: 'Pizzaria / Hamburgueria', icon: 'fa-pizza-slice' },
    { value: 'market', label: 'Mercado / Mercearia / Empório', icon: 'fa-store' },
    { value: 'cafe', label: 'Cafeteria / Doceria / Padaria', icon: 'fa-mug-hot' },
    { value: 'other', label: 'Dark Kitchen / Outros', icon: 'fa-fire-burner' },
  ];

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
      // Normalizing businessType for backend compatibility if needed
      const normalizedType = formData.businessType === 'market' ? 'market' : 
                             formData.businessType === 'other' ? 'other' : 'restaurant';

      const response = await submitContactForm({
        ...formData,
        businessType: normalizedType as 'restaurant' | 'market' | 'other'
      });

      if (response.success) {
        setStatus({ 
          type: 'success', 
          message: response.message || 'Recebemos seus dados! Nossa equipe de especialistas entrará em contato em breve.' 
        });
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          businessType: 'restaurant', 
          message: '', 
          requestDemo: true 
        });
      }
    } catch (error: any) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'Ocorreu um erro ao enviar sua solicitação. Se preferir, fale conosco pelo WhatsApp.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background glow ambient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="fa-solid fa-headset text-xs"></i>
              <span>Atendimento & Demonstração</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Dê o próximo passo na gestão do seu negócio.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Solicite uma demonstração ao vivo ou fale diretamente com a nossa equipe pelo WhatsApp. 
              Sem compromisso e com custo fixo zero.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

            {/* Left Sidebar: Fast Contact & Reassurance */}
            <div className="lg:col-span-4 bg-brand-950 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Canais Oficiais</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Estamos prontos para atender você e tirar dúvidas sobre a operação do seu cardápio.
                  </p>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-base">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-semibold">WhatsApp Comercial</span>
                      <a 
                        href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Gourmetech." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                      >
                        (41) 9 9877-1127
                      </a>
                      <span className="block text-[10px] text-emerald-400 mt-0.5">● Resposta rápida</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-300 flex items-center justify-center shrink-0 text-base">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-semibold">E-mail Direto</span>
                      <a 
                        href="mailto:appgourmetech@gmail.com" 
                        className="text-sm font-semibold text-white hover:text-brand-300 transition-colors break-all"
                      >
                        appgourmetech@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-300 flex items-center justify-center shrink-0 text-base">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Horário de Atendimento</span>
                      <span className="text-xs text-slate-300 block">Segunda a Sábado, das 08h às 22h</span>
                      <span className="text-[10px] text-slate-400">Suporte em regime de plantão nos finais de semana</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-800">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <i className="fa-solid fa-shield-halved"></i>
                      <span>Garantia Gourmetech</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Custo fixo zero em mensalidades, taxa única de implantação sob medida e sem contrato de fidelidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Trigger */}
              <div className="mt-8 pt-4">
                <a
                  href="https://wa.me/5541998771127?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20do%20Gourmetech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/40 transition-all duration-200"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Abrir Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Modern Form Area */}
            <div className="lg:col-span-8 p-8 sm:p-12 relative">
              {loading && (
                <div className="absolute inset-0 bg-white/75 backdrop-blur-xs z-20 flex flex-col items-center justify-center text-brand">
                  <i className="fa-solid fa-circle-notch fa-spin text-3xl mb-2"></i>
                  <span className="text-sm font-semibold">Enviando seus dados com segurança...</span>
                </div>
              )}

              {status.type === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center space-y-4"
                >
                  <div className="w-18 h-18 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 border border-emerald-200">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    {status.message}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setStatus({ type: null, message: '' })}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Enviar outro contato
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status.type === 'error' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl"
                    >
                      <p className="text-sm text-rose-700">{status.message}</p>
                    </motion.div>
                  )}

                  {/* Business Type Selectors */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Qual é o seu tipo de negócio?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {businessTypes.map((t) => {
                        const isSelected = formData.businessType === t.value;
                        return (
                          <button
                            key={t.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, businessType: t.value as any }))}
                            className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer text-left ${
                              isSelected
                                ? 'bg-brand text-white border-brand shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <i className={`fa-solid ${t.icon} text-sm ${isSelected ? 'text-white' : 'text-brand'}`}></i>
                            <span className="truncate">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all text-sm disabled:bg-slate-100"
                        placeholder="Ex: Carlos Silva"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        disabled={loading}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all text-sm disabled:bg-slate-100"
                        placeholder="(41) 99999-9999"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-mail Corporativo ou Pessoal *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all text-sm disabled:bg-slate-100"
                      placeholder="carlos@seurestaurante.com.br"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Como podemos ajudar o seu negócio?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      disabled={loading}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all text-sm disabled:bg-slate-100"
                      placeholder="Conte um pouco sobre sua operação atual (ex: delivery, produtos, controle de estoque...)"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 p-3 bg-brand-50/50 rounded-xl border border-brand-100/60">
                    <input
                      id="requestDemo"
                      name="requestDemo"
                      type="checkbox"
                      checked={formData.requestDemo}
                      disabled={loading}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-brand focus:ring-brand border-slate-300 rounded mt-0.5"
                    />
                    <label htmlFor="requestDemo" className="text-xs sm:text-sm text-slate-700 cursor-pointer select-none">
                      <strong className="font-semibold text-brand-dark">Quero agendar uma demonstração guiada gratuita</strong> sem compromisso e com suporte na configuração.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="primary"
                      size="lg" 
                      className="w-full justify-center" 
                      isLoading={loading}
                      disabled={loading}
                      rightIcon={<i className="fa-solid fa-paper-plane text-xs"></i>}
                    >
                      Enviar Solicitação de Demonstração
                    </Button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Seus dados estão protegidos de acordo com a LGPD e nunca serão compartilhados para spam.
                    </p>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};