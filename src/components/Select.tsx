type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex max-h-20 text-zinc-500 mb-6">
      {legend && (
        <legend className="uppercase text-xs mb-2 text-inherit">
          {legend}
        </legend>
      )}
      <select
        className="w-full h-12 bg-zinc-200 border border-zinc-300 rounded-lg px-3 text-sm outline-none focus-within:border-blue-100"
        value=""
        {...rest}
      >
        <option value="" disabled hidden>
          {" "}
          Selecione
        </option>

        {children}
      </select>
    </fieldset>
  );
}
