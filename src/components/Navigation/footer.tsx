import Link from 'next/link';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons';
import { FooterRoutes } from '@/data/navigation';

export const Footer = () => {
  return (
    <footer className="px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 border-b border-b-gray-200 py-16">
        <div className="md:col-span-6">
          <span>LOGO</span>
        </div>
        <div className="md:col-span-6 mt-12 md:mt-0">
          <nav className="grid md:grid-cols-3 grid-cols-2 gap-x-8">
            {FooterRoutes?.map(({ id, routes }) => (
              <ul className="space-y-3 last:mt-8 last:md:mt-0" key={id}>
                {routes?.map(({ id, name, href }) => (
                  <li
                    key={id}
                    className="font-semibold text-gray-500 first:text-sm first:text-gray-400"
                  >
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
      </div>
      <section className="py-8 flex justify-between  flex-col-reverse md:flex-row">
        <span className="text-gray-400 text-base mt-6  md:mt-0">
          © 2077 Untitled UI. All rights reserved.
        </span>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <LinkedinIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
