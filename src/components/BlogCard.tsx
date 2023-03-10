import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'react-feather';

interface Props {
  children: React.ReactNode;
  href?: string;
}

export function BlogCard({ children }: Props) {
  return <article className="flex flex-col gap-3">{children}</article>;
}

BlogCard.Title = function Title({
  children,
  href = '/',
  ref
}: Props & { ref?: any }) {
  return (
    <Link href={href} ref={ref} className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
      <ArrowUpRight />
    </Link>
  );
};

BlogCard.Description = function Description({ children }: Props) {
  return <p className="text-gray-500">{children}</p>;
};

BlogCard.Image = function Images({
  source
}: {
  source: { src: string; alt: string };
}) {
  return (
    <div className="w-full overflow-hidden">
      <Image
        src={source.src}
        alt={source.alt}
        height={705}
        width={1253}
        className="h-full w-full object-cover object-center "
      />
    </div>
  );
};

BlogCard.Information = function Information({
  author,
  date
}: {
  author: string;
  date: string;
}) {
  return (
    <div className="text-sm font-semibold text-blue-700">
      <span>{author}</span>
      <span className="mx-1">•</span>
      <span>{date}</span>
    </div>
  );
};
