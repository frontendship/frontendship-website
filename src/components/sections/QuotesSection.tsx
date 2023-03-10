import React from 'react';

import QuoteSlider from '../Quote/QuoteSlider';

export const QuotesSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-4 flex flex-col items-center justify-center md:mx-28  md:flex-row">
        <QuoteSlider />
      </div>
    </section>
  );
};
