import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowUpRight } from 'react-feather';

interface Props {
  children: React.ReactNode;
}

const BlogCard = ({ children }: Props) => {
  return <article className="flex flex-col gap-3">{children}</article>;
};

const Description = ({ children }: Props) => {
  return <p className="text-gray-500">{children}</p>;
};

const Img = ({ attr }: { attr: ImageProps }) => {
  return <Image {...attr} />;
};

const Info = ({ author, date }: { author: string; date: string }) => {
  return (
    <div className="text-sm font-semibold text-indigo-700">
      <span>{author}</span>
      <span className="mx-1">•</span>
      <span>{date}</span>
    </div>
  );
};

const Title = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href} className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
      <ArrowUpRight />
    </Link>
  );
};

BlogCard.Image = Img;
BlogCard.Info = Info;
BlogCard.Title = Title;
BlogCard.Description = Description;

export default BlogCard;
