'use client';

import { motion } from 'framer-motion';
import { news } from '@/lib/data';
import { Calendar, ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
    return (
        <div className="min-h-screen pt-32 px-4 pb-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16 border-l-4 border-primary pl-8"
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
                        Tech <span className="text-primary">Logs</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Official updates, event participation, and strategic partnership announcements.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="tech-card h-full flex flex-col group"
                        >
                            <div className="h-48 bg-gray-100 relative overflow-hidden">
                                <img
                                    src={index % 2 === 0 ? "/about-team.png" : "/hero-abstract.png"}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest flex items-center gap-1">
                                        <Terminal size={10} /> LOG_ENTRY
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>

                                <h2 className="text-2xl font-bold mb-4 line-clamp-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 mb-8 flex-grow text-sm leading-relaxed">
                                    {item.summary}
                                </p>

                                <Link href={`/news/${item.id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors mt-auto group/link">
                                    Access Full Log <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
