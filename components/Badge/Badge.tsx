import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const badgeStyles = cva(
  [
    'font-medium',
    'rounded-3xl',
    'flex',
    'shrink-0',
    'items-center',
    'justify-center',
    'w-fit',
    'h-fit'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-violet-50',
          'text-violet-700',
          '[&>h4]:text-violet-50',
          '[&>h4]:bg-violet-700'
        ],
        light: ['bg-violet-50', 'text-violet-700', '[&>h4]:bg-white'],
        green: [
          'bg-green-50',
          'text-green-700',
          '[&>h4]:bg-green-700',
          '[&>h4]:text-white'
        ],
        blue: [
          'bg-blue-50',
          'text-blue-700',
          '[&>h4]:bg-blue-700',
          '[&>h4]:text-white'
        ],
        red: [
          'bg-red-50',
          'text-red-700',
          '[&>h4]:bg-red-700',
          '[&>h4]:text-white'
        ],
        orange: [
          'bg-orange-50',
          'text-orange-700',
          '[&>h4]:bg-orange-700',
          '[&>h4]:text-white'
        ],
        gray: [
          'bg-gray-50',
          'text-gray-700',
          '[&>h4]:bg-gray-700',
          '[&>h4]:text-white'
        ]
      },
      size: {
        sm: [
          'text-xs',
          'px-[4px]',
          'py-[1px]',
          '[&>*]:px-1',
          '[&>*]:py-[1px]',
          '[&>*]:my-[2px]'
        ],
        md: [
          'text-sm',
          'px-[4px]',
          'py-[1px]',
          '[&>*]:px-2',
          '[&>*]:py-[1px]',
          '[&>*]:my-[2px]'
        ],
        lg: [
          'text-sm',
          'px-[6px]',
          'py-[2px]',
          '[&>*]:px-2',
          '[&>*]:py-[2px]',
          '[&>*]:my-[3px]'
        ]
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

type BadgeBaseProps = VariantProps<typeof badgeStyles>;
interface Props extends BadgeBaseProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className, size, variant }: Props) => {
  return (
    <div className={badgeStyles({ className, size, variant })}>
      {typeof children == 'string' ? <span>{children}</span> : children}
    </div>
  );
};

const BadgeTitle = ({ children }: { children: string }) => {
  return <h4 className="shrink-0 rounded-2xl">{children}</h4>;
};

const BadgeContent = ({ children }: { children: string }) => {
  return <span className="shrink-0">{children}</span>;
};

Badge.Title = BadgeTitle;
Badge.Content = BadgeContent;

export default Badge;
