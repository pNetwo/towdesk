import { Bell, Plus } from "lucide-react";
import { Services } from "./Services";

export function Dashboard() {
  const SERVICE_EXAMPLE = {
    id: "1",
    driver: "Paulo Neto",
    insurer: "Porto Seguro",
    travel: "43 km",
    isCompleted: true,
    valueOS: "R$ 380,00",
  };

  return (
    <div className="w-full">
      <header className="flex justify-between items-center bg-zinc-200 h-18 p-8">
        <h1 className="text-blue-100 font-semibold text-lg">
          Ordens de serviço
        </h1>

        <div className="border border-gray-400 rounded-lg p-2 bg-zinc-300">
          <Bell size={18} className="text-zinc-500" />
        </div>
      </header>

      <div className="p-3 m-auto lg:max-w-5xl grid grid-cols-2 md:grid-cols-3 items-center gap-4">
        <div className="w-full border border-zinc-400 rounded-lg bg-zinc-200 p-3">
          <p className="text-sm text-zinc-500 font-semibold">
            Total de serviços
          </p>
          <span className="text-blue-100 font-bold">128</span>
        </div>
        <div className="w-full border border-zinc-400 rounded-lg bg-zinc-200 p-3">
          <p className="text-sm text-zinc-500 font-semibold">
            Km total percorrido
          </p>
          <span className="text-blue-100 font-bold">3.849</span>
        </div>
        <div className="w-full border border-zinc-400 rounded-lg col-span-2 md:col-span-1 bg-zinc-200 p-3">
          <p className="text-sm text-zinc-500 font-semibold">Valor total</p>
          <span className="text-blue-100 font-bold">R$ 47.320</span>
        </div>
      </div>

      <div className=" m-auto md:min-w-lg lg:max-w-5xl justify-center transition duration-300 ease-linear">
        <main className=" bg-zinc-200 rounded-lg border border-zinc-400 mx-3">
          <div className="flex justify-between items-center p-3">
            <h2 className="text-blue-100 font-semibold">Registros</h2>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Pesquisar"
                className="border border-zinc-400 bg-zinc-300 rounded-md p-2"
              />
              <a
                href="/"
                className="p-2 h-10 flex justify-center items-center gap-2 bg-blue-100 text-zinc-200 rounded-lg hover:bg-blue-200 transition ease-linear"
              >
                <Plus size={18} />
                Nova OS
              </a>
            </div>
          </div>

          <div className="bg-zinc-200 border-zinc-400 rounded-lg flex flex-col">
            <div className="grid grid-cols-5 px-3 gap-4 py-1 border-y border-zinc-400 bg-zinc-300">
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Motorista
              </span>
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Seguradora
              </span>
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Km
              </span>
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Concluido
              </span>
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Valor
              </span>
            </div>

            <div className="overflow-y-scroll max-h-85.5 md:max-h-134.5">
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
              <Services data={SERVICE_EXAMPLE} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
