import React from 'react';

import Accordion from '@/components/Accordion/Accordion';
import { faqAccordionItems } from '@/components/FaqSection/FaqSection.items';

const FaqSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <div className="mb-5">
        <h2 className="text-center text-3xl font-semibold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 md:text-xl">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <Accordion items={faqAccordionItems} />
    </section>
  );
};

export default FaqSection;
