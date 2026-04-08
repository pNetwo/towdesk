import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/Button";
import { InputOrders } from "../components/InputOrders";
import { Select } from "../components/Select";
import { driversList } from "../utils/driversList";
import { insurersList } from "../utils/insurerList";

export function WorkOrder() {
  const [driver, setDriver] = useState("");
  const [insurer, setInsurer] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [travel, setTravel] = useState("");
  const [valueOS, setValueOS] = useState("");
  const [originAddress, setOriginAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [observations, setObservations] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate - 1;
    }

    navigate("/confirm", {
      state: { fromSubmit: true, driver, insurer, travel, valueOS },
    });
  }

  return (
    <form onSubmit={onSubmit} className="w-full bg-zinc-200">
      <header className="bg-zinc-100 flex flex-1 gap-1 p-4 items-center border-b border-zinc-300">
        <span className="text-zinc-500 font-semibold ">Ordens de serviço</span>
        <ChevronRight size={18} className="text-zinc-500" />
        <span className="text-blue-100 font-bold">Nova OS</span>
      </header>

      <div className="px-6 my-6">
        <div className="flex flex-col bg-zinc-100 rounded-lg border border-zinc-300 m-auto md:min-w-lg lg:max-w-5xl justify-center transition duration-300 ease-linear">
          <div className="flex justify-between p-4">
            <h2 className="text-2xl font-semibold text-blue-100">
              Nova ordem de serviço
            </h2>
          </div>

          <hr className="border-b-0 border-zinc-300" />

          <div className="p-4 flex-col gap-3">
            <h3 className="text-blue-200 mb-4 uppercase font-semibold text-sm">
              Nova ordem de serviço
            </h3>

            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
              <Select
                required
                legend="Motorista"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                disabled={!!params.id}
              >
                {driversList.map((i) => (
                  <option key={i.id} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </Select>

              <Select
                required
                legend="Seguradora"
                value={insurer}
                onChange={(e) => setInsurer(e.target.value)}
                disabled={!!params.id}
              >
                {insurersList.map((i) => (
                  <option key={i.id} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
              <InputOrders
                required
                name="data"
                legend="Data do serviço"
                type="date"
                className="col-span-2 md:col-span-1"
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                disabled={!!params.id}
              />
              <InputOrders
                required
                name="travel"
                legend="KM percorrido"
                type="number"
                placeholder="Ex: 42"
                onChange={(e) => setTravel(e.target.value)}
                disabled={!!params.id}
              />
              <InputOrders
                required
                name="valueOS"
                legend="Valor da OS (R$)"
                type="number"
                placeholder="Ex: 380,00"
                onChange={(e) => setValueOS(e.target.value)}
                disabled={!!params.id}
              />
            </div>

            <hr className="border-b-0 border-zinc-300" />

            <div>
              <h3 className="text-blue-200 uppercase font-semibold text-sm mt-4 mb-4">
                Endereços
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <InputOrders
                  required
                  legend="Endereço de origem"
                  placeholder="Cidade - Estado"
                  onChange={(e) => setOriginAddress(e.target.value)}
                  disabled={!!params.id}
                />
                <InputOrders
                  required
                  legend="Endereço de destino"
                  placeholder="Cidade - Estado"
                  onChange={(e) => setDestinationAddress(e.target.value)}
                  disabled={!!params.id}
                />
              </div>

              <div>
                <label
                  htmlFor="info"
                  className="uppercase text-xs font-semibold text-zinc-500"
                >
                  Observações
                </label>
                <textarea
                  className="w-full h-24 mt-1.5 p-2 text-zinc-500 font-semibold bg-zinc-200 border border-zinc-300 rounded-lg px-3 text-sm outline-none focus-within:border-blue-100"
                  id="info"
                  placeholder="Informações adicionais sobre o serviço..."
                  onChange={(e) => setObservations(e.target.value)}
                ></textarea>
              </div>

              <div className="flex mb-4 justify-end items-end w-full gap-4 mt-8">
                <Button type="submit" className="w-40" isLoading={isLoading}>
                  {params.id ? "Voltar" : "Enviar"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
