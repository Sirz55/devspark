// app/about/page.js
'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, UserGroupIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Founded', value: '2013', icon: BuildingOfficeIcon },
  { id: 2, name: 'Team Members', value: '50+', icon: UserGroupIcon },
  { id: 3, name: 'Projects', value: '500+', icon: LightBulbIcon },
  { id: 4, name: 'Support', value: '24/7', icon: ClockIcon },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in tech industry',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    description: 'Technology strategist and innovation expert',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    description: 'Creating beautiful, intuitive user experiences',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              About <span className="text-blue-600">Our Company</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto"
            >
              We're a passionate team of developers, designers, and strategists dedicated to building exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <stat.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 text-slate-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Meet the talented individuals leading our company to success.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start justify-between bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-blue-600">0{index + 1}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-blue-600">{person.role}</p>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                    {person.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Get in touch with our team to discuss how we can help bring your ideas to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white">
              Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}