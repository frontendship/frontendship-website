import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

export const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  '2xl': 64
};

interface Props extends ImageProps {
  className?: string;
  size?: keyof typeof SIZES;
  src: string;
  alt: string;
}

export const Avatar = ({
  className,
  size = 'md',
  src,
  alt,
  ...props
}: Props) => (
  <Image
    {...props}
    src={src}
    alt={alt}
    width={SIZES[size]}
    height={SIZES[size]}
    className={twMerge(
      className,
      'box-content rounded-full border-4 border-transparent transition-colors hover:border-blue-100'
    )}
  />
);

export default Avatar;
