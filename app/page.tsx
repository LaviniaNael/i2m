'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Globe, Shield, Rocket, Activity, Users, Lightbulb, Droplets } from 'lucide-react';
import { services, news } from '@/lib/data';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-primary/30 bg-primary/5 text-primary font-mono text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Smart & Sustainable
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-foreground">
              SUSTAINABLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-500 tech-glow-text">INNOVATION</span>
            </motion.h1>

            <motion.h2 variants={fadeIn} className="text-xl md:text-2xl font-bold text-gray-500 mb-8 uppercase tracking-wide">
              Smart Solutions for energy and water conservation
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6">
              We provide all-in-one smart systems that unify automation, devices, and protection for a greener, more efficient future.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-6">
              <Link href="/services" className="btn-tech text-center flex items-center gap-2">
                Our Solutions <Zap size={18} />
              </Link>
              <Link href="/store" className="btn-tech-outline text-center flex items-center gap-2">
                Visit Store
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-50"></div>
            <Image
              src="/hero-city.png"
              alt="Smart Digital Cityscape"
              fill
              className="object-contain animate-float"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose i2M Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose <span className="text-primary">i2M</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Proven Results', desc: 'Real numbers backing energy and water savings.', icon: Activity },
              { title: 'All-in-One Systems', desc: 'Unified automation, devices, and protection.', icon: Zap },
              { title: 'Reliable Assistance', desc: 'Ground support in Egypt, Africa, and the Gulf.', icon: Users },
              { title: 'Greener Future', desc: 'Focus on waste reduction and environmental protection.', icon: Droplets },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 tech-card"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">Our <span className="text-primary">Solutions</span></h2>
              <p className="text-gray-500 max-w-xl">Comprehensive smart systems designed for efficiency and safety.</p>
            </div>
            <Link href="/services" className="btn-tech-outline">View All Services</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="tech-card group h-[550px] flex flex-col"
              >
                <div className="relative h-2/5 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                  <Image
                    src={index === 0 ? "/service-launch.png" : index === 1 ? "/service-strategy.png" : "/hero-abstract.png"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between bg-white/90">
                  <div>
                    <div className="text-primary mb-4 p-2 bg-primary/5 inline-block">
                      {service.icon === 'Zap' && <Zap size={32} />}
                      {service.icon === 'Shield' && <Shield size={32} />}
                      {service.icon === 'Globe' && <Globe size={32} />}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 uppercase">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details?.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-400 font-mono italic">
                          <span className="text-primary mt-1">▶</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Initialize Protocol</span>
                    <ArrowRight className="text-gray-300 group-hover:text-primary transition-all group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Tech Background */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative rounded-none border border-primary/20 bg-[#0A0A0A] overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-30">
              <Image src="/hero-city.png" alt="Background" fill className="object-cover mix-blend-luminosity" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90 z-10"></div>

            <div className="relative z-20">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">UPGRADE?</span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                Reduce costs and environmental impact today. Our experts are ready to assist you in Egypt and beyond.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-tech hover:shadow-[0_0_30px_#2563EB]">
                  Contact Our Experts
                </Link>
                <Link href="/store" className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-24 px-4 md:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary z-10"></div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/about-team.png" alt="i2M Team" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground uppercase">Tech <span className="text-primary">Logs</span></h2>
            <div className="space-y-6">
              {news.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer border-b border-gray-100 pb-6 last:border-0"
                >
                  <div className="text-xs font-mono text-primary mb-2 flex justify-between items-center">
                    <span>{item.date}</span>
                    <span className="text-gray-300">SYSTEM_UPDATE_ID-{item.id.padStart(3, '0')}</span>
                  </div>
                  <h4 className="font-bold text-xl group-hover:text-primary transition-colors mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-1">{item.summary}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/news" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-all hover:pr-4">
              Read All Logs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
