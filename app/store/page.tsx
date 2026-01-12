'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { ShoppingBag, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function StorePage() {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="min-h-screen pt-32 pb-24 px-4 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-4 border border-primary/20">
                        <ShieldCheck size={14} /> Official i2M Supply Store
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                        The <span className="text-primary tech-glow-text">Boutique</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Precision-engineered smart hardware and energy-saving protocols for your home and business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-100 flex flex-col group tech-card"
                        >
                            <div className="relative h-72 overflow-hidden bg-gray-200">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1 shadow-sm">
                                        <Star size={10} className="text-primary fill-primary" /> Premium Asset
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="btn-tech scale-90 group-hover:scale-100 transition-transform flex items-center gap-2 shadow-2xl"
                                    >
                                        <ShoppingBag size={18} /> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                    <span className="text-2xl font-black text-primary">${product.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                    {product.description} Guaranteed compatibility with i2M Smart Hubs and regional power standards.
                                </p>
                                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-300">
                                    <span>ID: INV-30{product.id}</span>
                                    <span>•</span>
                                    <span>IN_STOCK</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
