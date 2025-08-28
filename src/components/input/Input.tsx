import React, { HTMLInputTypeAttribute } from "react";

interface InputeProps {
  isDisabeled?: boolean;
  label: string;
  defaultValue?: string;
  type: HTMLInputTypeAttribute;
}

const Input: React.FC<InputeProps> = ({
  isDisabeled,
  label,
  defaultValue,
  type,
  ...props
}) => {
  return (
    <div className="flex flex-col border-b py-2">
      <label
        htmlFor={label}
        className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
        defaultValue={defaultValue}
        disabled={isDisabeled}
        {...props}
      />
    </div>
  );
};

export default Input;
