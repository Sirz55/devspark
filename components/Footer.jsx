'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/60 bg-transparent backdrop-blur-sm dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
              DevSpark
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Modern IT services and product engineering for SaaS, startups, and enterprises. We design, build,
              and support secure, cloud‑native software.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-sm ring-1 ring-slate-200/70 hover:text-slate-900 hover:bg-white dark:bg-slate-900/80 dark:text-slate-300 dark:ring-slate-700/70 dark:hover:text-white transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-sm ring-1 ring-slate-200/70 hover:text-slate-900 hover:bg-white dark:bg-slate-900/80 dark:text-slate-300 dark:ring-slate-700/70 dark:hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-sm ring-1 ring-slate-200/70 hover:text-slate-900 hover:bg-white dark:bg-slate-900/80 dark:text-slate-300 dark:ring-slate-700/70 dark:hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-[0.18em]">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#web-development" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services#ui-ux-design" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services#mobile-apps" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#seo" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-[0.18em]">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-[0.18em]">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Subscribe for the latest on product launches, engineering insights, and case studies.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l-xl border border-slate-200/70 bg-white/80 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-transparent dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:opacity-95 text-white px-4 py-2 rounded-r-xl text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-200/70 pt-4 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
          &copy; {new Date().getFullYear()} DevSpark. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
