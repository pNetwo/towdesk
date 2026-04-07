type Props = React.ComponentProps<"input"> & {
  legend?: string;
  className?: string;
};

export function InputOrders({
  legend,
  type = "text",
  className,
  ...rest
}: Props) {
  return (
    <fieldset
      className={`flex max-h-20 text-zinc-500 font-semibold mb-6 ${className ?? ""}`}
    >
      {legend && (
        <legend className="uppercase text-xs mb-2 text-inherit">
          {legend}
        </legend>
      )}
      <input
        {...rest}
        type={type}
        className="w-full h-12 bg-zinc-200 border border-zinc-300 rounded-lg px-3 text-sm outline-none focus-within:border-blue-100"
      />
    </fieldset>
  );
}
