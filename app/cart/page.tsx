'use client';

import { useCartStore } from '@/lib/store';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
    const { cart, removeFromCart, total, clearCart } = useCartStore();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-6 p-8 bg-white/5 rounded-full"
                >
                    <ShoppingBag size={64} className="text-gray-500" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-400 mb-8 max-w-md">Looks like you haven't added any innovation tools to your cart yet.</p>
                <Link href="/store" className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors">
                    Go to Store
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-12">Your Cart</h1>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="md:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="glass p-4 rounded-xl flex items-center gap-4"
                            >
                                <div className="relative w-24 h-24 bg-white/5 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <p className="text-primary font-mono">${item.price}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-400">Qty: {item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Checkout Summary */}
                    <div className="md:col-span-1">
                        <div className="glass p-8 rounded-2xl sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="flex justify-between mb-4 text-gray-400">
                                <span>Subtotal</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-8 text-xl font-bold">
                                <span>Total</span>
                                <span>${total().toFixed(2)}</span>
                            </div>

                            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105 mb-4 flex justify-center items-center gap-2">
                                Checkout <ArrowRight size={20} />
                            </button>

                            <button
                                onClick={clearCart}
                                className="w-full py-2 text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
