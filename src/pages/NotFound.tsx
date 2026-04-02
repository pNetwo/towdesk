import { CircleX } from "lucide-react";

export function NotFound() {
  return (
    <div className="w-screen h-screen bg-zinc-900 text-zinc-300 flex flex-col justify-center items-center">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-semibold">Ops! Essa página não existe.</h1>
        <CircleX size={48} className="text-red-500"/>
      </div>

      <a href="/" className="mt-10 bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition ease-linear">Voltar para o início</a>
    </div>
  );
}
