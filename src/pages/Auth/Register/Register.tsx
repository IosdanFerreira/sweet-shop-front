import Container from "@/components/Container";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import RegisterForm from "./components/RegisterForm";
import { cn } from "@/lib/utils";

export default function Register() {
  return (
    <Container>
      <div className="absolute top-4 right-15">
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-12 items-center justify-center h-screen">
        <Logo />
        <div className="flex flex-col border-[1px] w-full max-w-[560px] px-6 py-12 bg-card shadow-lg rounded-lg">
          <div className="flex flex-col items-center justify-center mb-5">
            <span
              className={cn(
                "text-neutral-700 bg-clip-text text-2xl font-bold mb-2",
                "dark:text-white"
              )}
            >
              Cadastro
            </span>
            <p className="text-muted-foreground">
              Bem-vindo e junte-se a nós criando uma conta gratuita!
            </p>
          </div>

          <RegisterForm />

          <div className="flex items-center justify-center gap-1 my-8 text-center">
            <p className="text-muted-foreground">Já possui uma conta?</p>
            <Link
              className={cn("text-primary font-semibold ", "hover:underline")}
              to={"/"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
