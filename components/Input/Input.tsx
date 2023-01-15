import { forwardRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import { FieldError, useFormContext } from 'react-hook-form';
import InputClasses from './Input.classes';

interface InputBaseProps extends VariantProps<typeof InputClasses> {
  label?: string;
  name: string;
}

// TODO: Icon will be displayed in error situations
type Props = React.InputHTMLAttributes<HTMLInputElement> & InputBaseProps;

/**
 * @example <Input name="email" label="Email" placeholder="olivia@untitledui.com"  />
 *  */
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, variant, label, size, ...rest }, ref) => {
    const {
      formState: { errors }
    } = useFormContext();

    return (
      <div>
        {label && (
          <label className="block font-medium text-sm mb-1 text-gray-800">
            {label}
          </label>
        )}
        <input
          className={InputClasses({
            variant,
            size,
            error: !!errors[rest.name]
          })}
          ref={ref}
          {...rest}
        />
        <ErrorField name={rest.name} />
      </div>
    );
  }
);

const ErrorField = ({ name }: { name: string }) => {
  const {
    formState: { errors }
  } = useFormContext();

  const error = errors[name] as FieldError;

  return (
    <div className="text-red-500 shadow-xs shadow-red-300 mt-1.5">
      {error?.message}
    </div>
  );
};

export default Input;
