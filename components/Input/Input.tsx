import InputClasses from './Input.classes';

// TODO: Icon will be displayed in error situations
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const ErrorField = ({ errorMessage }: { errorMessage?: string }) => {
  return <div className="mt-1.5 text-red-500">{errorMessage}</div>;
};

const Input: React.FC<Props> = ({ errorMessage, label, ...props }) => {
  return (
    <div className="inline-block">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={InputClasses({
          error: Boolean(errorMessage)
        })}
        {...props}
      />
      {errorMessage && <ErrorField errorMessage={errorMessage} />}
    </div>
  );
};

export default Input;
