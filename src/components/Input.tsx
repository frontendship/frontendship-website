import { cx } from 'class-variance-authority';
import React from 'react';
import { AlertCircle } from 'react-feather';

const baseClasses = cx([
  'py-2.5 px-3.5 border transition-all',
  'text-gray-800 shadow-sm rounded-lg border-gray-300 placeholder:text-gray-500',
  'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300',
  'disabled:opacity-50 disabled:cursor-not-allowed w-full'
]);
const errorClasses = '!border-red-300 focus:ring-2 focus:ring-red-100';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const ErrorField = ({ errorMessage }: { errorMessage?: string }) => {
  return <div className="mt-1.5 text-red-500">{errorMessage}</div>;
};

export const Input: React.FC<Props> = ({ errorMessage, label, ...props }) => {
  return (
    <div className="inline-block w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative ">
        <input
          className={errorMessage ? cx(baseClasses, errorClasses) : baseClasses}
          {...props}
        />
        {errorMessage && (
          <span className="absolute right-3 text-red-500">
            <AlertCircle width={14} height={14} />
          </span>
        )}
      </div>
      {errorMessage && <ErrorField errorMessage={errorMessage} />}
    </div>
  );
};
