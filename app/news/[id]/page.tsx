'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { news } from '@/lib/data';
import { Calendar, ArrowLeft, Terminal, Activity, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsArticlePage() {
    const params = useParams();
    const article = news.find(n => n.id === params.id);

    if (!article) {
        return (
            <div className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-black mb-4">LOG_NOT_FOUND</h1>
                <Link href="/news" className="btn-tech">Return to Archive</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 px-4 pb-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/news" className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-12 hover:scale-105 transition-transform">
                    <ArrowLeft size={16} /> return_to_logs
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-primary text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest flex items-center gap-1">
                                <Terminal size={10} /> LOG_ENTRY_{article.id.padStart(3, '0')}
                            </span>
                            <span className="text-primary font-mono text-xs">{article.date}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
                            {article.title}
                        </h1>
                    </div>

                    <div className="relative aspect-video mb-12 tech-card overflow-hidden">
                        <img
                            src={Number(article.id) % 2 === 0 ? "/about-team.png" : "/hero-abstract.png"}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        <div className="md:col-span-1 space-y-8">
                            <div className="border-l-2 border-primary/20 pl-4 py-2">
                                <span className="text-[10px] font-black uppercase text-gray-400 block mb-2">status</span>
                                <span className="text-xs font-bold text-primary">DEPLO_COMPLETE</span>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-4 py-2">
                                <span className="text-[10px] font-black uppercase text-gray-400 block mb-2">priority</span>
                                <span className="text-xs font-bold text-foreground">CRITICAL_UPDATE</span>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-4 py-2">
                                <span className="text-[10px] font-black uppercase text-gray-400 block mb-2">tags</span>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-[9px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500">MEA</span>
                                    <span className="text-[9px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500">TECH</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="prose prose-slate max-w-none">
                                <p className="text-xl text-gray-600 font-bold mb-8 leading-relaxed">
                                    {article.summary}
                                </p>
                                <div className="text-gray-500 leading-relaxed space-y-6">
                                    {article.content.split('\n').map((para, i) => (para &&
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16 p-8 border border-primary/10 bg-gray-50/50">
                                <h3 className="text-lg font-black uppercase mb-4 flex items-center gap-2">
                                    <Activity size={18} className="text-primary" /> System Reflections
                                </h3>
                                <p className="text-sm italic text-gray-400">
                                    "This log entry represents a pivotal coordinate in the i2M Tech Corridor expansion. All protocols verified."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.article>

                <div className="mt-24 border-t border-gray-100 pt-12 flex justify-between items-center">
                    <Link href="/news" className="btn-tech-outline">Back to News</Link>
                    <div className="flex gap-4">
                        <Activity size={16} className="text-gray-200" />
                        <ShieldCheck size={16} className="text-gray-200" />
                        <Zap size={16} className="text-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
