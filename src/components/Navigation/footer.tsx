import Link from 'next/link';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons';
import { FooterRoutes } from '@/data/navigation';

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-8">
      <div className="grid border-b border-b-gray-200 py-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <span>LOGO</span>
        </div>
        <div className="mt-12 md:col-span-6 md:mt-0">
          <nav className="grid grid-cols-2 gap-x-8 md:grid-cols-3">
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
      <section className="flex flex-col-reverse justify-between  py-8 md:flex-row">
        <span className="mt-6 text-base text-gray-400  md:mt-0">
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
