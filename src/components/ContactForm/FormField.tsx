import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'name-split';
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  nameSei?: string;
  nameMei?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
  error,
  disabled,
  nameSei,
  nameMei
}) => {
  const commonClasses = `w-full rounded-lg border-gray-300 bg-gray-50 
    focus:bg-white focus:border-yellow-500 focus:ring-yellow-500 transition-colors
    ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (type === 'name-split') {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && (
            <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">
              必須
            </span>
          )}
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="nameSei"
              placeholder="姓"
              className={commonClasses}
              required={required}
              value={nameSei || ''}
              onChange={onChange}
              disabled={disabled}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
          <div>
            <input
              type="text"
              name="nameMei"
              placeholder="名"
              className={commonClasses}
              required={required}
              value={nameMei || ''}
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && (
          <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">
            必須
          </span>
        )}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          className={commonClasses}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className={commonClasses}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};