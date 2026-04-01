import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  return (
    <div className="w-md flex flex-col bg-zinc-800 items-center py-8">
      <h1 className="text-2xl mb-8">Bem-vindo de volta</h1>
      <form className="w-full px-4">
        <Input
          required
          legend="E-mail"
          type="email"
          placeholder="usuario@empresa.com"
        />

        <Input
          required
          legend="Senha"
          type="password"
          placeholder="usuario@empresa.com"
        />

        <Button>Entrar</Button>
      </form>
    </div>
  );
}
