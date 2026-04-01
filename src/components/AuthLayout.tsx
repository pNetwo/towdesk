import { Outlet } from "react-router";

import logo from "../assets/tow-truck.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900 text-zinc-200 px-4">
      <main className="flex border border-zinc-500 rounded-lg overflow-hidden max-w-md lg:max-w-xl">
        <div className="w-60 flex flex-col justify-center items-center bg-blue-100 px-4">
          <img src={logo} alt="logotipo" className="my-6" />
          <span className="text-2xl">TowDesk</span>
          <p className="text-zinc-400 text-sm items-center">
            Gestão de Guinchos
          </p>
        </div>

        <Outlet />
      </main>
    </div>
  );
}
