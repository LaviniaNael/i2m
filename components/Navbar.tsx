'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import clsx from 'clsx';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'News', path: '/news' },
    { name: 'Store', path: '/store' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const cart = useCartStore((state) => state.cart);
    const [mounted, setMounted] = useState(false);
    const [lang, setLang] = useState('EN');

    useEffect(() => setMounted(true), []);

    const toggleLang = () => {
        setLang(prev => prev === 'EN' ? 'AR' : 'EN');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 font-black text-3xl tracking-tighter text-primary">
                        i2m
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={clsx(
                                        'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                                        pathname === item.path
                                            ? 'text-primary bg-primary/10'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="p-2 text-gray-600 hover:text-primary transition-colors flex items-center gap-1 font-bold"
                        >
                            <Globe size={20} />
                            <span className="text-xs">{lang}</span>
                        </button>

                        <Link href="/cart" className="p-2 text-gray-600 hover:text-primary transition-colors relative">
                            <ShoppingCart size={20} />
                            {mounted && cart.length > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile controls */}
                    <div className="-mr-2 flex items-center md:hidden gap-2">
                        <Link href="/cart" className="p-2 text-gray-600 hover:text-primary transition-colors relative">
                            <ShoppingCart size={20} />
                            {mounted && cart.length > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                                    pathname === item.path
                                        ? 'text-primary bg-primary/10'
                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 mt-4">
                            <button onClick={toggleLang} className="flex items-center gap-2 text-gray-600 font-medium">
                                <Globe size={20} />
                                <span>{lang}</span>
                            </button>
                            <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-600 font-medium">
                                <ShoppingCart size={20} />
                                <span>Cart ({mounted ? cart.length : 0})</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
