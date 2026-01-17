import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const floatAnimation = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const Home: React.FC = () => {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50"></div>
                        {/* Animating Abstract Shapes */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand/10 rounded-full blur-3xl"
                        ></motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl"
                        ></motion.div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-semibold text-sm mb-6">
                                Integração com Delivery Compra Rápida
                            </motion.span>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                                Gestão Inteligente para <br />
                                <span className="text-brand">Restaurantes e Mercados</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                Simplifique sua operação com o Gourmetech. Um ERP completo, intuitivo e sem mensalidade fixa.
                                Você só paga quando seu negócio cresce.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button size="lg" variant="primary">
                                            Começar Agora <i className="fa-solid fa-arrow-right ml-2"></i>
                                        </Button>
                                    </motion.div>
                                </Link>
                                {/* Link ancora normal funcionando com o ScrollToTop */}
                                <Link to="/#features">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button size="lg" variant="white" className="border border-gray-200 shadow-sm">
                                            Conhecer Recursos
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-16 relative mx-auto max-w-5xl"
                        >
                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="rounded-xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10"
                            >
                                <img
                                    src="/img/print-sistema.png"
                                    alt="Painel Administrativo Gourmetech"
                                    className="rounded-lg w-full h-auto block"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section - Adicionado scroll-mt-28 */}
                <section id="benefits" className="py-20 bg-white scroll-mt-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o Gourmetech?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Desenvolvido pensando na agilidade que seu negócio precisa.</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-12"
                        >
                            {[
                                { icon: 'fa-coins', title: 'Custo Zero Fixo', desc: 'Esqueça mensalidades caras. Nosso modelo cobra apenas uma pequena taxa sobre as vendas. Se você não vende, não paga.' },
                                { icon: 'fa-rocket', title: 'Implantação Rápida', desc: 'Sistema em nuvem, pronto para usar. Cadastre seus produtos e comece a vender em minutos, sem instalações complexas.' },
                                { icon: 'fa-mobile-screen-button', title: 'Multiplataforma', desc: 'Acesse de qualquer lugar. Funciona perfeitamente em computadores, tablets e smartphones para gestão on-the-go.' }
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="text-center group">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand text-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-300"
                                    >
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid - Adicionado scroll-mt-28 */}
                <section id="features" className="py-20 bg-gray-50 scroll-mt-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tudo o que você precisa em um só lugar</h2>
                            <p className="text-gray-600">Funcionalidades robustas para restaurantes e mercados.</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                { icon: 'fa-boxes-stacked', title: 'Controle de Estoque', desc: 'Baixa automática de ingredientes conforme vendas.' },
                                { icon: 'fa-file-invoice-dollar', title: 'Pagamento', desc: 'Integrado com o Asaas (meio de pagamento).' },
                                { icon: 'fa-cash-register', title: 'Vendas controladas', desc: 'Vendas no App e avulsas.' },
                                { icon: 'fa-users', title: 'Gestão de Mesas', desc: 'Controle de comandas e mesas para restaurantes em tempo real.' },
                                { icon: 'fa-chart-line', title: 'Relatórios Avançados', desc: 'Análises de vendas, lucro e produtos mais vendidos.' },
                                { icon: 'fa-truck-fast', title: 'Integração Compra Rápida', desc: 'Delivery para restaurantes e mercados locais com o Compra Rápida.' }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                                >
                                    <i className={`fa-solid ${feature.icon} text-brand text-3xl mb-4`}></i>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Pricing / CTA Section */}
                <section className="py-20 bg-brand-darker text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Parceria de verdade é crescer junto</h2>
                            <p className="text-xl text-gray-300 mb-10">
                                Sem taxas de adesão. Sem mensalidade fixa. <br />
                                Cobramos apenas uma pequena porcentagem sobre as vendas realizadas.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.4 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 inline-block w-full max-w-lg"
                        >
                            <div className="text-5xl font-bold mb-2">Gratuito</div>
                            <div className="text-brand-light font-medium mb-8">para começar e configurar</div>

                            <ul className="text-left space-y-4 mb-8 text-gray-200">
                                {[
                                    'Acesso a todos os recursos',
                                    'Suporte técnico incluído',
                                    'Atualizações automáticas'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <i className="fa-solid fa-check text-green-400"></i> {item}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact">
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button variant="white" size="lg" className="w-full text-brand-dark font-bold">
                                        Solicitar Demonstração
                                    </Button>
                                </motion.div>
                            </Link>
                            <p className="mt-4 text-xs text-gray-400">*Consulte taxas de transação com nossa equipe comercial.</p>
                        </motion.div>
                    </div>
                </section>

            </div>
        </PageTransition>
    );
};