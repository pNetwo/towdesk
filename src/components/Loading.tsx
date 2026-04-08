import { Loader } from "lucide-react";

export function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-2">
      <span className="font-semibold text-lg text-zinc-500">Carregando</span>
      <Loader className="animate-spin text-blue-100 [animation-duration:3s]" />
    </div>
  );
}
