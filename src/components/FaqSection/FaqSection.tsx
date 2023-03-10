import { Disclosure } from '@headlessui/react';
import React from 'react';

import { Hero } from '@/components/hero';
import { FaqList } from '@/data/faq';

export const FaqSection: React.FC = () => {
  return (
    <Hero>
      <Hero.Title>Frequently asked questions</Hero.Title>
      <Hero.Subtitle>
        Everything you need to know about the product and billing.
      </Hero.Subtitle>
      <section className="mx-auto w-full max-w-3xl space-y-2">
        {FaqList.map(({ id, title, description }) => (
          <Disclosure key={id} as="div">
            <Disclosure.Button className="flex w-full justify-between border-b px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{title}</span>
              asd
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {description}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </section>
    </Hero>
  );
};
