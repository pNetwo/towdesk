import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { InputOrders } from "../components/InputOrders";
import { Select } from "../components/Select";
import { drivers } from "../utils/drivers";
import { insurers } from "../utils/insurer";

export function WorkOrder() {
  const [driverList, setDriverList] = useState("");
  const [insurerList, setInsurerList] = useState("")

  return (
    <form className="w-full bg-zinc-200">
      <header className="bg-zinc-100 flex flex-1 gap-1 p-4 items-center mb-4 border-b border-zinc-300">
        <span className="text-zinc-500 font-semibold ">Ordens de serviço</span>
        <ChevronRight size={18} className="text-zinc-500" />
        <span className="text-blue-100 font-bold">Nova OS</span>
      </header>

      <div className="px-4">
        <div className="flex flex-col bg-zinc-100 rounded-lg border border-zinc-300 m-auto md:min-w-lg lg:max-w-5xl justify-center transition duration-300 ease-linear">
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

          <div className="p-4 flex-col gap-3">
            <h3 className="text-blue-200 mb-4 uppercase font-semibold text-sm">
              Nova ordem de serviço
            </h3>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-2 gap-6 sm:hidden">
              <Select required legend="Motorista" />

              <Select required legend="Seguradora" />
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col">
              <Select
                required
                legend="Motorista"
                value={driverList}
                onChange={(e) => setDriverList(e.target.value)}
              >
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </Select>

              <Select required legend="Seguradora" value={insurerList} onChange={(e) => setInsurerList(e.target.value)}>
                {
                  insurers.map((insurer) => (
                    <option key={insurer.id} value={insurer.id}>
                      {insurer.name}
                    </option>
                  ))
                }
              </Select>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 sm:hidden gap-4">
              <InputOrders
                required
                legend="Data do serviço"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                defaultValue={new Date().toISOString().split("T")[0]}
              />
              <InputOrders
                required
                legend="KM percorrido"
                type="number"
                placeholder="Ex: 42"
              />
              <InputOrders
                required
                legend="Valor da OS (R$)"
                type="number"
                placeholder="Ex: 380,00"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden">
              <InputOrders
                required
                legend="Data do serviço"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                defaultValue={new Date().toISOString().split("T")[0]}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputOrders
                  required
                  legend="KM percorrido"
                  type="number"
                  placeholder="Ex: 42"
                />
                <InputOrders
                  required
                  legend="Valor da OS (R$)"
                  type="number"
                  placeholder="Ex: 380,00"
                />
              </div>
            </div>

            <hr className="border-b-0 border-zinc-300" />

            <div>
              <h3 className="text-blue-200 uppercase font-semibold text-sm mt-2 mb-4">
                Endereços
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <InputOrders
                  required
                  legend="Endereço de origem"
                  placeholder="Cidade - Estado"
                />
                <InputOrders
                  required
                  legend="Endereço de destino"
                  placeholder="Cidade - Estado"
                />
              </div>

              <div>
                <label
                  htmlFor="info"
                  className="uppercase text-xs font-semibold mb-2 text-zinc-500 "
                >
                  Observações
                </label>
                <textarea
                  id="info"
                  placeholder="Informações adicionais sobre o serviço..."
                  className="w-full h-24 p-2 text-zinc-500 font-semibold bg-zinc-200 border border-zinc-300 rounded-lg px-3 text-sm outline-none focus-within:border-blue-100"
                ></textarea>
              </div>

              <div className="flex mb-4 justify-end items-end w-full gap-4 mt-8">
                <Button className="w-40 bg-zinc-400 hover:bg-zinc-400 hover:opacity-85">
                  Cancelar
                </Button>
                <Button className="w-40">Cadastrar OS</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
