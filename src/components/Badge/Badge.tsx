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
          '[&>.badge-title]:text-violet-50',
          '[&>.badge-title]:bg-violet-700'
        ],
        light: ['bg-violet-50', 'text-violet-700', '[&>.badge-title]:bg-white'],
        green: [
          'bg-green-50',
          'text-green-700',
          '[&>.badge-title]:bg-green-700',
          '[&>.badge-title]:text-white'
        ],
        blue: [
          'bg-blue-50',
          'text-blue-700',
          '[&>.badge-title]:bg-blue-700',
          '[&>.badge-title]:text-white'
        ],
        red: [
          'bg-red-50',
          'text-red-700',
          '[&>.badge-title]:bg-red-700',
          '[&>.badge-title]:text-white'
        ],
        orange: [
          'bg-orange-50',
          'text-orange-700',
          '[&>.badge-title]:bg-orange-700',
          '[&>.badge-title]:text-white'
        ],
        gray: [
          'bg-gray-50',
          'text-gray-700',
          '[&>.badge-title]:bg-gray-700',
          '[&>.badge-title]:text-white'
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
  return <span className="badge-title shrink-0 rounded-2xl">{children}</span>;
};

const BadgeContent = ({ children }: { children: string }) => {
  return <span className="shrink-0">{children}</span>;
};

Badge.Title = BadgeTitle;
Badge.Content = BadgeContent;

export default Badge;
