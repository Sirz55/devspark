// app/services/page.js
'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  ServerIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Custom Software Development',
    description:
      'End‑to‑end product engineering for web, mobile, and internal tools using modern, scalable tech stacks.',
    icon: CodeBracketIcon,
    features: ['SaaS platforms', 'Enterprise web apps', 'API‑first backends', 'Integration projects'],
  },
  {
    name: 'Cloud & DevOps',
    description:
      'Design, migrate, and optimize your cloud infrastructure for reliability, security, and speed.',
    icon: CloudArrowUpIcon,
    features: ['AWS & Azure', 'Serverless & containers', 'CI/CD pipelines', 'Observability & SRE'],
  },
  {
    name: 'Mobile & Frontend',
    description:
      'High‑quality mobile and frontend experiences that feel fast, accessible, and delightful.',
    icon: DevicePhoneMobileIcon,
    features: ['React & Next.js', 'Cross‑platform mobile', 'Design systems', 'Performance optimization'],
  },
  {
    name: 'UI/UX & Product Design',
    description:
      'Strategic design for dashboards, SaaS products, and enterprise tools that teams actually want to use.',
    icon: PaintBrushIcon,
    features: ['User research', 'Product workshops', 'Interactive prototypes', 'Design systems'],
  },
  {
    name: 'Backend & API Engineering',
    description:
      'Robust, secure backends and APIs that are easy to extend, monitor, and scale.',
    icon: ServerIcon,
    features: ['Microservices', 'Data modeling', 'API gateways', 'Performance tuning'],
  },
  {
    name: 'Security & Compliance',
    description:
      'Security baked into your product lifecycle to protect users, data, and business continuity.',
    icon: ShieldCheckIcon,
    features: ['Security audits', 'Pen‑testing support', 'Compliance guidance', 'Best‑practice hardening'],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/40 to-transparent dark:from-slate-950/80 dark:via-slate-950/40 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.4),transparent_60%)] opacity-60 blur-3xl dark:opacity-70" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 backdrop-blur dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              IT Services & Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
            >
              IT services built for
              <span className="ml-2 bg-gradient-to-r from-blue-600 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                ambitious teams.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-2 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300"
            >
              From strategy to implementation, we help you design, build, and run secure, cloud‑native
              software that supports real business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 pt-4 sm:pb-28 sm:pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
              What we do
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              A full stack of IT capabilities
            </p>
            <p className="mt-4 text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Work with us on a focused project, or as a long‑term IT partner alongside your internal teams.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/70 dark:bg-slate-900/80"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-x-6 top-0 h-32 bg-gradient-to-b from-blue-500/15 via-sky-400/10 to-transparent dark:from-blue-500/25 dark:via-sky-400/20" />
                </div>

                <div className="relative flex items-center gap-x-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-900/40 dark:text-blue-300 dark:ring-blue-700/60">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                    {service.name}
                  </h3>
                </div>

                <p className="relative mt-4 flex-auto text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <ul className="relative mt-5 space-y-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-500 ring-1 ring-blue-100 dark:bg-blue-900/40 dark:text-blue-300 dark:ring-blue-700/60">
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 0-1.414-1.414L8 11.172 4.707 7.879A1 1 0 0 0 3.293 9.293l4 4a1 1 0 0 0 1.414 0l7-7Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Typical engagement: 4–12 weeks</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    In demand
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}