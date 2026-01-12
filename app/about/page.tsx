'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Globe, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const stats = [
        { label: 'Energy Saved', value: '30%' },
        { label: 'Regional Support', value: 'MEA' },
        { label: 'Partners', value: '25+' },
    ];

    return (
        <div className="min-h-screen pt-32 px-4 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border-l-4 border-primary pl-8"
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic">
                            The <span className="text-primary">Mission</span>
                        </h1>
                        <p className="text-2xl text-gray-500 font-bold mb-8 leading-tight uppercase">
                            Sustainable Innovation for a Smarter Future.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            i2M is dedicated to transforming groundbreaking ideas into tangible market successes. We provide all-in-one smart systems that unify automation, devices, and protection, focusing specifically on energy and water conservation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">Cairo HQ</span>
                            <span className="px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">Africa Reach</span>
                            <span className="px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">Gulf Network</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden tech-card"
                    >
                        <img src="/about-team.png" alt="i2M Leadership" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-12 text-center tech-card border-b-4 border-b-primary"
                        >
                            <div className="text-6xl md:text-7xl font-black text-foreground mb-4 tabular-nums tracking-tighter">{stat.value}</div>
                            <div className="text-primary text-xs font-black uppercase tracking-[0.3em]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Areas */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase mb-4 tracking-tight">Our Core <span className="text-primary">Philosophy</span></h2>
                        <p className="text-gray-500 max-w-xl mx-auto italic">Bridging the gap between initial concept and commercial reality.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Proven Results', desc: 'Real numbers backing up significant energy and water savings across projects.', icon: Target },
                            { title: 'Reliable Assistance', desc: 'Local ground support in Egypt and the region for seamless integration.', icon: Users },
                            { title: 'Certified Security', desc: 'Military-grade hardware isolation for critical infrastructure protection.', icon: ShieldCheck },
                        ].map((area, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center tech-card"
                            >
                                <div className="p-4 bg-primary/5 text-primary mb-6">
                                    <area.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase">{area.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values Checklist */}
                <div className="bg-black p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 opacity-10">
                        <Globe size={400} className="text-white" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
                        <div>
                            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">
                                Building the <span className="text-primary">MENA</span> Tech Corridor
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We specialize in market entry strategies for international companies looking to expand into Egypt, Africa, and the Gulf.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {['Strategic Networking', 'Lead Generation', 'Market Analysis', 'Brand Representation', 'Local Compliance', 'Sales Support'].map((val, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                                    <CheckCircle2 size={16} className="text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
