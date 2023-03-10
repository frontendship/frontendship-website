import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva(
  ['font-semibold', 'rounded-lg', 'border', 'shadow-sm', 'shadow-violet-100/5'],
  {
    variants: {
      variant: {
        filled: [
          'text-white',
          'bg-blue-600',
          'border-blue-600',
          'hover:bg-blue-700',
          'focus:ring-4',
          'ring-blue-100',
          'disabled:bg-blue-200',
          'disabled:border-blue-200',
          'disabled:cursor-not-allowed'
        ],
        outline: [
          'text-black',
          'bg-white',
          'border-gray-300',
          'hover:border-gray-400',
          'focus:ring-4',
          'ring-gray-100',
          'disabled:bg-gray-200',
          'disabled:cursor-not-allowed'
        ]
      },
      fullWidth: {
        true: 'w-full'
      },
      size: {
        sm: ['text-sm', 'px-[14px]', 'py-2'],
        md: ['text-sm', 'px-4', 'py-[10px]'],
        lg: ['px-[18px]', 'py-[10px]'],
        xl: ['px-5', 'py-3'],
        '2xl': ['text-lg', 'px-7', 'py-4']
      }
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md'
    }
  }
);

// TODO: Icon
type ButtonBaseProps = VariantProps<typeof buttonStyles>;
interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {}

export const Button = ({
  className,
  variant,
  fullWidth,
  size,
  ...props
}: Props) => (
  <button
    {...props}
    className={buttonStyles({ className, variant, size, fullWidth })}
  />
);
