'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies for optimal performance.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Mobile Apps',
    description:
      'Cross-platform mobile applications that deliver seamless user experiences.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces designed with your users in mind.',
    icon: PaintBrushIcon,
  },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Soft overlay that lets the global background show through */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-white/70 via-blue-50/60 to-indigo-100/50 dark:from-slate-900/70 dark:via-slate-800/60 dark:to-slate-900/50 backdrop-blur-sm" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-6 dark:bg-blue-900/20 dark:border-blue-800/30 dark:text-blue-200"
            >
              <RocketLaunchIcon className="w-4 h-4" />
              <span>Transform Your Digital Presence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              We Build Digital{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Experiences
              </span>{' '}
              That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto dark:text-slate-300"
            >
              Transform your ideas into reality with our cutting-edge development
              and design services. We create digital experiences that engage,
              inspire, and convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="#services"
                className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Explore Our Services
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-4xl mx-auto">
              {[
                { value: '100+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '10+', label: 'Years Exp' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full mb-6 dark:bg-blue-900/20 dark:text-blue-300">
              Our Services
            </span>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Comprehensive Digital Solutions
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto dark:text-slate-300">
              We offer a full range of services to help your business thrive in
              the digital world.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/85 dark:bg-slate-800/80 backdrop-blur border border-slate-100/70 dark:border-slate-700/60 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 dark:bg-blue-900/30 dark:text-blue-400">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 dark:text-white">
                  {service.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
