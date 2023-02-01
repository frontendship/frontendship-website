import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { SIZES } from './constants';

interface Props extends ImageProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src: string;
  alt: string;
}

const Avatar = ({ className, size = 'md', src, alt, ...props }: Props) => (
  <Image
    {...props}
    src={src}
    alt={alt}
    width={SIZES[size]}
    height={SIZES[size]}
    className={twMerge(
      className,
      'box-content rounded-full border-4 border-transparent transition-colors hover:border-violet-100'
    )}
  />
);

export default Avatar;
