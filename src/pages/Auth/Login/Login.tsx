import Container from "@/components/container";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Logo from "@/components/logo";
import { ThemeSwitch } from "@/components/layouts/theme-switch";
import { cn } from "@/lib/utils";

export default function Login() {
  return (
    <Container>
      <div className={cn("absolute top-4 right-5", "lg:right-15")}>
        <ThemeSwitch />
      </div>
      <div className="flex flex-col gap-12 items-center justify-center py-10 px-1 min-h-screen">
        <Logo />
        <div className="flex flex-col border-[1px] w-full max-w-[450px] px-6 py-12 bg-card shadow-lg rounded-xl">
          <div className="flex flex-col items-center justify-center mb-5">
            <span
              className={cn(
                "text-neutral-700 bg-clip-text text-2xl font-bold mb-2",
                "dark:text-white"
              )}
            >
              Login
            </span>
            <p className="text-muted-foreground text-lg">Bem-vindo de volta!</p>
          </div>

          <LoginForm />

          <div className="flex items-center justify-center gap-1 my-8 text-center">
            <p className="text-muted-foreground">Ainda não possui uma conta?</p>
            <Link
              className={cn("text-primary font-semibold ", "hover:underline")}
              to={"/cadastro"}
            >
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
