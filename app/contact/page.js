export default function Contact() {
  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/75 via-white/30 to-transparent dark:from-slate-950/80 dark:via-slate-950/40 dark:to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            Start your next IT project with us
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300 max-w-2xl mx-auto">
            Share a bit about your product, roadmap, or infrastructure. Our team will respond within
            one business day with next steps and availability.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white/85 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/85 dark:ring-slate-700/70">
          <div className="md:flex">
            <div className="p-8 md:p-10 md:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-500 text-white relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
              <h2 className="text-2xl font-semibold mb-4">Contact information</h2>
              <p className="mb-6 text-sm text-blue-100 max-w-sm">
                Prefer email or a quick call? Reach out directly and we&apos;ll line up a short discovery
                session with our team.
              </p>
              <div className="space-y-6 text-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 p-2 rounded-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-blue-50">hello@devspark.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 p-2 rounded-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                      Phone
                    </h3>
                    <p className="mt-1 text-sm text-blue-50">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 p-2 rounded-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                      Location
                    </h3>
                    <p className="mt-1 text-sm text-blue-50">
                      123 Tech Street, Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-blue-400/30 mt-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-blue-100/80 mb-2">
                    Typical response time
                  </p>
                  <p className="text-sm text-blue-50">Under 24 hours on business days.</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 md:w-1/2 bg-white/80 dark:bg-slate-950/80">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                    placeholder="Tell us about your product, goals, timeline, and tech stack..."
                    defaultValue={''}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1 block w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                    >
                      Approx. budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      className="mt-1 block w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
                      placeholder="$10k – $50k, $50k+..."
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-md text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors duration-200"
                  >
                    Request a discovery call
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
