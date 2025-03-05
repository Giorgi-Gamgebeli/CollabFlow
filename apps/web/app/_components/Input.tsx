"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { HTMLInputTypeAttribute, useState } from "react";
import { useFormStatus } from "react-dom";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  id?: Path<T>;
  autoComplete?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  hidden?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<T>;
};

function Input<T extends FieldValues>({
  type,
  id,
  autoComplete,
  disabled,
  placeholder,
  defaultValue,
  hidden,
  onBlur,
  register,
}: InputProps<T>) {
  const { pending } = useFormStatus();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        hidden={hidden}
        disabled={pending || disabled}
        {...(register && id
          ? register(id, { valueAsNumber: type === "number" })
          : { onBlur: onBlur, name: id })}
        className="border-brand-600 outline-brand-700 w-full rounded-md border bg-white px-[1.2rem] py-[1.1rem] shadow-[0_0_0_rgba(0,0,0,0.04)] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-600"
      />

      {type === "password" && (
        <Icon
          icon={
            showPassword ? "qlementine-icons:eye-crossed-16" : "ri:eye-line"
          }
          className="text-brand-500 absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-[1.7rem]"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
}

export default Input;
