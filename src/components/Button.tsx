type Props = React.ComponentProps<"button"> & {
  className?: string;
  isLoading?: boolean;
};

export function Button({
  children,
  className,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...rest}
      className={`flex justify-center items-center h-10 bg-blue-100 rounded-lg text-white cursor-pointer hover:bg-blue-200 transition ease-linear disabled:hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
