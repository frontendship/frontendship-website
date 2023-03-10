import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

import Button from '@/components/button';
import { HeaderLinks } from '@/data/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={router.pathname === '/' ? 'bg-gray-50' : ''}>
      <div className="border-b border-gray-100 py-3 px-4 md:py-4 md:px-8">
        <nav className="mx-auto hidden max-w-7xl md:block">
          <ul className="flex flex-row items-center gap-6 gap-x-8">
            {HeaderLinks?.map(({ id, name, href }) => (
              <li
                key={id}
                className="text-base font-semibold text-gray-500 first:mr-2"
              >
                <Link href={href}> {name}</Link>
              </li>
            ))}
            <li className="ml-auto">
              <Button>Join to Discord</Button>
            </li>
          </ul>
        </nav>
        <nav className="block md:hidden">
          <ul className="flex flex-row items-center justify-between">
            <li>Home</li>
            <li className="flex items-center">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="block md:hidden">
        {isMenuOpen && (
          <nav
            className={`absolute w-full py-6 shadow-xl  ${
              router.pathname === '/' ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <ul className="space-y-2">
              {HeaderLinks?.slice(1).map(({ id, name, href }) => (
                <li key={id} className="px-4 py-3 ">
                  <Link href={href} className="font-semibold text-gray-900">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
