import React from "react";

type FormRowProps = {
  label?: string;
  error?: string;
  children: React.ReactNode;
};

function FormRow({ label, error, children }: FormRowProps) {
  // Check if the children is a React element before accessing its props same as (children?.props.id)
  const childElement = React.Children.only(
    Array.isArray(children) ? children[0] : children,
  );
  const id = childElement.props.id;

  return (
    <div className="flex flex-col gap-0.5 pt-[1.5rem] lg:pt-[1.2rem]">
      {label && (
        <label className="text-brand-500 font-light" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="ml-10 text-[1.4rem] text-red-700">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
