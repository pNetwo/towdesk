import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <div className="w-lg flex flex-col bg-zinc-800 items-center py-8">
      <h1 className="text-2xl mb-8">Bem-vindo de volta</h1>
      <form onSubmit={onSubmit} className="w-full px-4">
        <Input
          required
          legend="E-mail"
          type="email"
          placeholder="usuario@empresa.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          required
          legend="Senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Entrar
        </Button>

        <div className="flex justify-center mt-8">
          <a
            href="/signup"
            className="text-sm font-semibold text-zinc-300 hover:text-blue-200 transition ease-linear"
          >
            Criar conta
          </a>
        </div>
      </form>
    </div>
  );
}
