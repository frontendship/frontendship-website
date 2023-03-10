import { Disclosure } from '@headlessui/react';
import React from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';

import { Hero } from '@/components/hero';
import { FaqList } from '@/data/faq';

export const FaqSection: React.FC = () => {
  return (
    <Hero>
      <Hero.Title>Frequently asked questions</Hero.Title>
      <Hero.Subtitle>
        Everything you need to know about the product and billing.
      </Hero.Subtitle>
      <section className="mx-auto w-full max-w-3xl">
        {FaqList.map(({ id, title, description }) => (
          <Disclosure key={id} as="div" className="border-b py-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="text-gray-900 font-medium text-lg">
                    {title}
                  </span>
                  {open ? (
                    <MinusCircle className="h-5 w-5 text-blue-600" />
                  ) : (
                    <PlusCircle className="h-5 w-5 text-blue-600" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="text-sm text-gray-500">
                  <p className="text-left text-base text-gray-500">
                    {description}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </section>
    </Hero>
  );
};
