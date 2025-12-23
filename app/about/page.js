// app/about/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BuildingOfficeIcon, UserGroupIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Founded', value: '2013', caption: 'Years in the IT industry', icon: BuildingOfficeIcon },
  { id: 2, name: 'Team members', value: '50+', caption: 'Engineers, designers & strategists', icon: UserGroupIcon },
  { id: 3, name: 'Projects delivered', value: '500+', caption: 'Products, platforms & internal tools', icon: LightBulbIcon },
  { id: 4, name: 'Support coverage', value: '24/7', caption: 'Global clients across multiple time zones', icon: ClockIcon },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    description: 'Visionary IT leader with 15+ years of experience across SaaS, cloud and product consulting.',
    image: '/images/team/alex.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    description: 'Technology strategist focusing on scalable, secure architectures for high‑growth products.',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    description: 'Leads design systems and UX for complex B2B dashboards and internal tools.',
    image: '/images/team/michael.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/40 to-transparent dark:from-slate-950/80 dark:via-slate-950/40 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-60 max-w-4xl rounded-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_60%)] opacity-60 blur-3xl dark:opacity-80" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
            >
              The IT team behind
              <span className="ml-2 bg-gradient-to-r from-blue-600 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                DevSpark.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300"
            >
              We are a multidisciplinary IT consulting and product engineering team focused on building
              secure, cloud‑native platforms, internal tools, and customer‑facing apps for companies that
              care about quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4 rounded-3xl bg-white/85 p-7 shadow-md shadow-slate-900/5 ring-1 ring-slate-200/80 backdrop-blur-lg dark:bg-slate-900/85 dark:ring-slate-700/80"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/40">
                  <stat.icon className="h-7 w-7 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                </div>
                <dd className="order-first text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </dd>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {stat.name}
                </dt>
                {stat.caption && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-24 pt-4 sm:pb-32 sm:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Leadership & delivery team
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              A senior core team that combines engineering, product, and design experience from
              fast‑growing startups and enterprises.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start justify-between rounded-2xl bg-white/90 p-7 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200/70 backdrop-blur-lg transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900/90 dark:ring-slate-700/70"
              >
                <div className="flex items-center gap-x-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                    0{index + 1}
                  </span>
                  <span>Core leadership</span>
                </div>
                <div className="group relative mt-4 w-full">
                  {person.image && (
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-500/60 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                          {person.name}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-300">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  )}
                  {!person.image && (
                    <>
                      <h3 className="text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-300">
                        {person.role}
                      </p>
                    </>
                  )}
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {person.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-500 px-6 py-16 text-center shadow-2xl sm:px-16">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-fuchsia-400/30 blur-3xl" />
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s plan your next IT initiative.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Whether you need a new product, a migration to the cloud, or a long‑term engineering
              partner, our team can plug in where you need us most.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Talk to our team
              </a>
              <a
                href="/services"
                className="text-sm font-semibold leading-6 text-white/90 hover:text-white"
              >
                Explore IT services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}