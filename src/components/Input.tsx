type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex max-h-20 mb-6">
      {legend && (
        <legend className="uppercase text-xs mb-2 text-inherit">
          {legend}
        </legend>
      )}
      <input
        {...rest}
        type={type}
        className="w-full h-12 border bg-zinc-900 border-2 border-zinc-700 rounded-lg px-3 text-sm outline-none focus-within:border-blue-100"
      />
    </fieldset>
  );
}
