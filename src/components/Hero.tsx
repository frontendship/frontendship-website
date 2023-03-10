import { cva } from 'class-variance-authority';
import React from 'react';

const heroTitle = cva(['mb-6 font-semibold text-gray-900'], {
  variants: {
    size: {
      lg: 'md:text-6xl text-4xl',
      md: 'md:text-5xl text-4xl',
      sm: 'md:text-4xl text-3xl'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center text-center">
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

Hero.Title = function HeroTitle({
  children,
  size
}: {
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'sm';
}) {
  return <h1 className={heroTitle({ size })}>{children}</h1>;
};

Hero.Subtitle = function HeroSubtitle({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-12 text-lg font-normal leading-7 text-gray-500 md:text-xl lg:max-w-3xl">
      {children}
    </h2>
  );
};
