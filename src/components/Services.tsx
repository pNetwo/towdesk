export type ServicesProps = {
  id: string;
  driver: string;
  insurer: string;
  travel: string;
  isCompleted: boolean;
  valueOS: string;
};

type Props = React.ComponentProps<"a"> & {
  data: ServicesProps;
};

export function Services({ data, ...rest }: Props) {
  return (
    <a {...rest}>
      <div className="grid grid-cols-5 p-3 items-center border-b border-zinc-400 hover:bg-blue-50 hover:cursor-pointer transition ease-linear">
        <span className="text-sm font-bold">{data.driver}</span>
        <span className="text-sm text-zinc-500 font-semibold">
          {data.insurer}
        </span>
        <span className="text-sm text-zinc-500 font-semibold">
          {data.travel}
        </span>
        <span
          className={`w-fit text-xs font-semibold p-1 text-center rounded-full ${data.isCompleted ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
        >
          {data.isCompleted ? "Concluído" : "Pendente"}
        </span>

        <span className="text-sm font-semibold text-blue-100 ">
          R${data.valueOS}
        </span>
      </div>
    </a>
  );
}
