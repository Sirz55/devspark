'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './theme-provider';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const isActive = (path) => {
    const base =
      'relative text-sm font-medium tracking-wide transition-colors duration-200';
    const active =
      'text-blue-600 dark:text-blue-300';
    const inactive =
      'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white';
    return `${base} ${pathname === path ? active : inactive}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/80 shadow-md shadow-slate-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-2 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-blue-500/40 flex items-center justify-center text-white text-lg font-bold">
              D
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300">
                DevSpark
              </span>
              <span className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
                IT Services & Product Engineering
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center gap-10 lg:flex">
          <div className="flex items-center gap-6 rounded-full bg-slate-950/5 px-4 py-1.5 ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:ring-slate-700/70">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={isActive(item.href)}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Get Started</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 dark:bg-slate-950/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/40">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold">
                D
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                DevSpark
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-xl px-3 py-3 text-base ${isActive(
                      item.href
                    )} hover:bg-slate-50 dark:hover:bg-slate-800/70`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 px-4 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
