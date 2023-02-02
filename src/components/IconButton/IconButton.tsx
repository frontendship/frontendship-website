import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const iconButtonStyles = cva(['flex w-fit h-fit'], {
  variants: {
    variant: {
      default: [],
      gray: [
        'text-gray-400 fill-current hover:text-gray-500 active:text-gray-600'
      ],
      bordered: [
        'border border-gray-300 hover:border-gray-400 active:border-gray-600',
        'rounded-lg',
        'shadow-sm shadow-blue-900/5'
      ]
    },
    padding: {
      none: 'p-0',
      sm: 'p-1',
      md: 'p-2',
      lg: 'p-3'
    }
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md'
  }
});

type IconButtonBaseProps = VariantProps<typeof iconButtonStyles>;
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IconButtonBaseProps {}

const IconButton = ({ className, variant, padding, ...props }: Props) => (
  <button
    {...props}
    className={iconButtonStyles({ className, variant, padding })}
  />
);

export default IconButton;
