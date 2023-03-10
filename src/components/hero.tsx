import React from 'react';
export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center px-5 pt-16 pb-12 text-center md:px-8 md:pt-24">
      {children}
    </section>
  );
}

Hero.Label = function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 text-base font-semibold text-blue-700">
      {children}
    </span>
  );
};

Hero.Title = function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-6 text-4xl font-semibold text-gray-900 md:text-6xl">
      {children}
    </h1>
  );
};

Hero.Subtitle = function HeroSubtitle({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-12 lg:max-w-3xl text-lg md:text-xl font-normal text-gray-500 leading-7">
      {children}
    </h2>
  );
};
