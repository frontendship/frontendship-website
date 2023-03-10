import '@/styles/globals.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

import Button from '@/components/button';
import { Input } from '@/components/Input';
import { Footer } from '@/components/Navigation/footer';
import { Header } from '@/components/Navigation/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <div className="bg-gray-50">
        <form className="mx-auto grid px-4 py-12 md:max-w-7xl md:grid-cols-12  md:gap-x-8 md:px-8">
          <div className="md:col-span-7">
            <h1 className="text-xl font-medium text-gray-900">
              Join our newsletter
            </h1>
            <p className="col-span-5 mt-2 text-gray-500">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="mt-8 md:col-span-5 md:mt-0">
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <Input placeholder="Enter your email" />
              <Button className="mt-2 md:mt-0">Subscribe</Button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
