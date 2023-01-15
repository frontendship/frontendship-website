import { cva } from 'class-variance-authority';

export default cva(['py-2.5 px-3.5 border transition-all'], {
  variants: {
    variant: {
      default: [
        'text-gray-800 shadow-sm rounded-lg border-gray-300 placeholder:text-gray-500',
        'focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-300',
        'disabled:opacity-50 disabled:cursor-not-allowed'
      ]
    },
    error: {
      true: '!border-red-300 focus:ring-2 focus:ring-red-100'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
});
