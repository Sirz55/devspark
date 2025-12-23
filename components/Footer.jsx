'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900/85 backdrop-blur text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              DevSpark
            </h3>
            <p className="text-blue-100">
              Transforming ideas into exceptional digital experiences through innovative web development and design.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-blue-200 hover:text-white transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-blue-200 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-blue-200 hover:text-white transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#web-development" className="text-blue-100 hover:text-white">Web Development</Link></li>
              <li><Link href="/services#ui-ux-design" className="text-blue-100 hover:text-white">UI/UX Design</Link></li>
              <li><Link href="/services#mobile-apps" className="text-blue-100 hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services#seo" className="text-blue-100 hover:text-white">SEO Optimization</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="text-blue-100 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Newsletter</h4>
            <p className="mt-4 text-blue-100">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-700">
          <p className="text-center text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} DevSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
