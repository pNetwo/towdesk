import { ChevronRight } from "lucide-react";
import { Select } from "../components/Select";

export function WorkOrder() {
  return (
    <form className="w-full bg-zinc-200">
      <header className="bg-zinc-100 flex flex-1 gap-1 p-4 items-center mb-4 border-b border-zinc-300">
        <span className="text-zinc-500 font-semibold ">Ordens de serviço</span>
        <ChevronRight size={18} className="text-zinc-500" />
        <span className="text-blue-100 font-bold">Nova OS</span>
      </header>

      <div className="flex flex-col  bg-zinc-100 m-4 rounded-lg border border-zinc-300">
        <div className="flex justify-between p-4">
          <h2 className="text-2xl font-semibold text-blue-100">
            Nova ordem de serviço
          </h2>
          <span className="bg-orange-300 text-orange-900 text-xs flex justify-center items-center rounded-full p-1.5">
            Pendente
          </span>
        </div>

        <hr className="border-b-0 border-zinc-300" />

        {/* Desktop */}

        <div className="hidden md:flex m-4 flex-col gap-3">

            <h3 className="text-blue-200 uppercase font-semibold text-sm">
              Nova ordem de serviço
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <Select legend="Motorista" />

              <Select legend="Seguradora"/>
            </div>
          </div>
      </div>
    </form>
  );
}
