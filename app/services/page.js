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
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    icon: CodeBracketIcon,
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'API Development']
  },
  {
    name: 'Mobile Development',
    description: 'Cross-platform mobile applications that deliver seamless user experiences on both iOS and Android.',
    icon: DevicePhoneMobileIcon,
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Deployment']
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind to drive engagement and conversions.',
    icon: PaintBrushIcon,
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your applications with high availability.',
    icon: CloudArrowUpIcon,
    features: ['AWS & Azure', 'Serverless Architecture', 'DevOps', 'CI/CD Pipelines']
  },
  {
    name: 'Backend Development',
    description: 'Robust backend systems and APIs to support your applications with optimal performance.',
    icon: ServerIcon,
    features: ['Node.js', 'Python', 'Database Design', 'Microservices']
  },
  {
    name: 'Security & Compliance',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: ShieldCheckIcon,
    features: ['Security Audits', 'Penetration Testing', 'GDPR Compliance', 'Data Encryption']
  }
];

export default function ServicesPage() {
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
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto"
            >
              Comprehensive digital solutions designed to help your business grow and succeed in the digital world.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Comprehensive Services
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-x-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <service.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-slate-900">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-4 flex-auto text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center sm:p-12 md:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get in touch with our team to discuss your project requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}