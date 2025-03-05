type FormProps = {
  type?: "regular" | "modal";
  children: React.ReactNode;
  action?: (FormData: FormData) => void;
  onSubmit?: () => void;
  className?: string;
};

function Form({ children, action, onSubmit, className }: FormProps) {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className={`border-brand-600 rounded-xl border px-10 py-8 ${className}`}
    >
      {children}
    </form>
  );
}

export default Form;
