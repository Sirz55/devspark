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
      <section className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden pt-24 sm:pt-28 md:pt-32">
        {/* Glow overlay that lets the global background show through */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/75 via-white/35 to-transparent dark:from-slate-950/80 dark:via-slate-950/40 dark:to-transparent" />
        {/* Floating cinematic orbs */}
        <div className="pointer-events-none absolute -left-28 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/40 via-sky-400/30 to-transparent blur-3xl opacity-70 dark:from-sky-500/40 dark:via-blue-400/40 sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/35 via-indigo-500/25 to-transparent blur-3xl opacity-80 dark:from-fuchsia-500/45 dark:via-indigo-500/40 sm:h-80 sm:w-80" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-20 sm:px-6 md:flex-row md:items-center md:gap-16 md:pb-28 lg:px-8">
          {/* Left: copy */}
          <div className="max-w-xl space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-200"
            >
              <RocketLaunchIcon className="w-4 h-4" />
              <span>Modern IT consulting & product engineering</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-tight dark:text-white"
            >
              We build
              <span className="relative mx-2 inline-block">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 via-sky-400/30 to-fuchsia-500/30 blur-xl" />
                <span className="relative bg-gradient-to-r from-blue-600 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                  cinematic
                </span>
              </span>
              IT platforms.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 md:max-w-xl mx-auto md:mx-0 dark:text-slate-300"
            >
              We are a full‑stack IT partner for SaaS, startups, and enterprises—designing,
              building, and scaling secure, cloud‑native software that your customers love to use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center xs:justify-center sm:justify-start sm:flex-row sm:max-w-md"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                View IT services
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Book a free consultation
              </a>
            </motion.div>

            {/* Stats */}
            <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:max-w-xl sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 md:max-w-none">
              {[
                { value: '70+', label: 'IT projects delivered' },
                { value: '15+', label: 'Industries served' },
                { value: '5+', label: 'Cloud & tech stacks' },
                { value: '24/7', label: 'Managed support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: cinematic preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-xl mt-4 md:mt-0"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(59,130,246,0.2),rgba(236,72,153,0.25),rgba(129,140,248,0.3),transparent_65%)] opacity-80 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Featured project
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    SaaS Analytics Dashboard
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    High-performance, responsive platform built with Next.js, Tailwind, and motion-first UX.
                  </p>
                </div>
                <div className="hidden flex-col items-end gap-1 text-right sm:flex">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-500 ring-1 ring-emerald-500/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Conversion rate
                  </p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">
                    +43%
                  </p>
                </div>
              </div>

              {/* Mini analytics preview */}
              <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-xs shadow-inner dark:border-slate-700/70 dark:bg-slate-900/90">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    Realtime traffic
                  </span>
                  <span className="rounded-full bg-slate-900 text-[10px] font-semibold uppercase tracking-wide text-slate-50 dark:bg-slate-100 dark:text-slate-900 px-2 py-1">
                    Next.js & Tailwind
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {[65, 80, 55, 90].map((value, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-14 overflow-hidden rounded-xl bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-end">
                        <div
                          className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 via-sky-500 to-fuchsia-500"
                          style={{ height: `${value}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        Q{i + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
