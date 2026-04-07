import { CircleCheckBig, Truck, Plus } from "lucide-react";
import { Navigate, useLocation } from "react-router";

export function Confirm() {
  const { state } = useLocation();
  const location = useLocation();

  const details = [
    { label: "Motorista", value: state.driver },
    { label: "Seguradora", value: state.insurer },
    { label: "KM percorrido", value: `${state.travel} km` },
    { label: "Valor da OS", value: `R$ ${state.valueOS}` },
  ];

  if (!location.state?.fromSubmit) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg-zinc-200 rounded-xl m-auto flex flex-col justify-center items-center p-10 gap-6">
      <h1 className="text-2xl text-blue-100 font-bold">
        OS cadastrada com sucesso!
      </h1>

      <CircleCheckBig size={180} className="text-blue-100" />

      <p className="text-sm text-zinc-700">
        A ordem de serviço foi registrada e já está disponível no sistema.
      </p>

      <div className="w-full">
        {details.map((item) => (
          <div key={item.label} className="flex justify-between border-b border-zinc-400 py-2">
            <span className="text-zinc-700">{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>

      <a href="/" className="w-full p-3 h-12 flex justify-center items-center gap-2 bg-blue-100 text-zinc-200 rounded-lg hover:bg-blue-200 transition ease-linear">
        <Plus/> Cadastrar nova OS
      </a>

      <a href=""></a>

    </div>
  );
}
