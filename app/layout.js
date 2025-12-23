import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Load fonts with optimized performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  title: 'DevSpark - Modern Web Development & Design',
  description: 'Transform your digital presence with our cutting-edge web development and design services. We create fast, beautiful, and user-friendly websites that drive results.',
  keywords: 'web development, web design, React, Next.js, frontend development, modern websites',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  openGraph: {
    title: 'DevSpark - Modern Web Development & Design',
    description: 'Transform your digital presence with our cutting-edge web development and design services.',
    url: 'https://devspark.example.com',
    siteName: 'DevSpark',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevSpark - Modern Web Development & Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevSpark - Modern Web Development & Design',
    description: 'Transform your digital presence with our cutting-edge web development and design services.',
    images: [{
      url: '/twitter-image.jpg',
      width: 1200,
      height: 600,
      alt: 'DevSpark - Modern Web Development & Design',
    }],
    creator: '@devspark',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
