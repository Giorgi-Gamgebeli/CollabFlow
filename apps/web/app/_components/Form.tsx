type FormProps = {
  type?: "regular" | "modal";
  children: React.ReactNode;
  action?: (FormData: FormData) => void;
  onSubmit?: () => void;
};

function Form({ children, action, onSubmit }: FormProps) {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className="flex h-full flex-col justify-center px-14 py-10"
    >
      {children}
    </form>
  );
}

export default Form;
