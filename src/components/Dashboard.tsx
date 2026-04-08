import { Bell, Search } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { Button } from "./Button";
import { Pagination } from "./Pagination";
import type { ServicesProps } from "./Services";
import { Services } from "./Services";

const SERVICE_EXAMPLE = {
  id: "1",
  driver: "Carlos Mendes",
  insurer: "Porto Seguro",
  travel: "43 km",
  isCompleted: true,
  valueOS: formatCurrency(380),
};

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [services, setServices] = useState<ServicesProps[]>([SERVICE_EXAMPLE]);

  function fetchServices(e: React.SubmitEvent) {
    e.preventDefault();

    console.log(search);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

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

            <form
              onSubmit={fetchServices}
              className="h-10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Pesquisar"
                className="border border-zinc-400 bg-zinc-300 rounded-md p-2"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" className="w-10 h-10">
                <Search />
              </Button>
            </form>
          </div>

          <div className="bg-zinc-200 border-zinc-400 rounded-lg flex flex-col">
            <div className="grid grid-cols-5 px-3 py-1 border-y border-zinc-400 bg-zinc-300">
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
                Status
              </span>
              <span className="uppercase text-sm font-semibold text-zinc-500">
                Valor
              </span>
            </div>

            <div className="overflow-y-scroll max-h-73 md:max-h-122">
              {services.map((item) => (
                <Services key={item.id} data={item} href={`/services/${item.id}`}/>
              ))}
            </div>

            <Pagination
              current={page}
              total={totalOfPage}
              onNext={() => handlePagination("next")}
              onPrevious={() => handlePagination("previous")}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
