'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { Zap, Globe, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap size={48} />,
    Shield: <Shield size={48} />,
    Globe: <Globe size={48} />,
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-32 px-4 pb-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left mb-24 border-l-4 border-primary pl-8"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
                        Our <span className="text-primary">Systems</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Sustainable technologies and strategic consultation to protect and optimize your infrastructure.
                    </p>
                </motion.div>

                <div className="grid gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="tech-card overflow-hidden grid md:grid-cols-2 gap-0 group"
                        >
                            <div className="p-8 md:p-16 flex flex-col justify-center">
                                <div className="text-primary mb-8 p-4 bg-primary/5 rounded-none inline-block w-fit">
                                    {iconMap[service.icon] || <Globe size={48} />}
                                </div>
                                <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase">{service.title}</h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {service.details?.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-500">
                                            <CheckCircle2 size={18} className="text-primary" />
                                            <span className="font-mono text-sm">{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="btn-tech w-fit flex items-center gap-2">
                                    Initialize Inquiry <ArrowRight size={18} />
                                </Link>
                            </div>

                            <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700"></div>
                                <img
                                    src={index === 0 ? "/service-launch.png" : index === 1 ? "/service-strategy.png" : "/hero-abstract.png"}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="text-8xl font-black text-white/20 select-none">0{index + 1}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
