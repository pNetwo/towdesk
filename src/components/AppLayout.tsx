import { Outlet } from "react-router";

import { navItems } from "../utils/navItems";

import { LogOut, User } from "lucide-react";
import logo from "../assets/tow-truck.svg";
import { NavItem } from "./NavItem";

export function AppLayout() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:flex h-screen">
        <aside className="flex flex-col w-80 bg-blue-100 py-8">
          <div className="flex justify-center items-center gap-2 px-3">
            <img src={logo} alt="logotipo" className="w-14 h-14" />
            <span className="text-3xl text-white font-bold mt-1">TowDesk</span>
          </div>

          <hr className="border-t border-zinc-400 my-6" />

          <nav className="flex flex-1 mx-6 text-zinc-300">
            <ul className="text-lg flex flex-col gap-3">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </nav>

          <hr className="border-t border-zinc-400 my-6" />

          <div className="mx-6 flex gap-4">
            <a
              href="/"
              className="bg-blue-200 p-3 rounded-full inline-flex items-center hover:brightness-125 transition ease-linear"
            >
              <User className="text-zinc-300" />
            </a>

            <div className="flex flex-col">
              <span className="text-md font-bold text-zinc-300">Olá, Neto</span>
              <p className="text-sm text-zinc-400">Administrador</p>
            </div>
          </div>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>

      {/* Mobile */}

      <div className="md:hidden flex flex-col h-screen">
        <div className="bg-blue-100 p-6 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logotipo" className="w-14 h-14" />
            <span className="text-2xl text-white font-bold">TowDesk</span>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-white">
                Olá, Neto
              </span>
              <p className="text-sm font-semibold text-zinc-400">
                Administrador
              </p>
            </div>

            <LogOut
              size={24}
              className="text-zinc-300 cursor-pointer hover:text-white transition ease-linear"
            />
          </div>
        </div>

        <div className="flex flex-1 bg-zinc-300">
          <Outlet />
        </div>

        <div className=" text-zinc-400 p-6">
          <nav className="">
            <ul className="flex gap-4 justify-around items-center text-center">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
