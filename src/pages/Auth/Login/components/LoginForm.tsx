import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/InputPassword";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginForm() {
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

  const formSchema = z.object({
    email: z.string().email({ message: "Insira um email valido" }),

    password: z.string().regex(passwordRegex, {
      message:
        "A senha deve conter 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending, error } = useLogin({
    onSuccess: (data) => {
      toast("Usuário logado com sucesso", {
        description: `Seja bem vindo, ${data?.data?.first_name}`,
        classNames: {
          content: "text-md",
        },
      });
      // navigate("/dashboard");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ email: values.email, password: values.password });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const showError =
                form.formState.errors.email && form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel
                    className={cn(showError ? "text-destructive" : "")}
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu email"
                      className={cn(
                        "py-6",
                        showError ? "text-destructive" : ""
                      )}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.isSubmitted && <FormMessage />}
                </FormItem>
              );
            }}
          />

          {/* Senha */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              const showError =
                form.formState.errors.password && form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel
                    className={cn(showError ? "text-destructive" : "")}
                  >
                    Senha
                  </FormLabel>
                  <FormControl>
                    <InputPassword
                      placeholder="Insira sua senha"
                      className={cn(
                        "py-6",
                        showError ? "text-destructive" : ""
                      )}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.isSubmitted && <FormMessage />}
                </FormItem>
              );
            }}
          />

          {error && (
            <Alert className="text-destructive border-destructive bg-destructive/10">
              <TriangleAlert />
              <AlertTitle>Oops, algo deu errado!</AlertTitle>
              <AlertDescription className="text-destructive">
                {error?.response?.data?.errors?.map((error) => error.message)}
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full cursor-pointer text-md py-6 text-xl"
            disabled={isPending}
          >
            {isPending && (
              <LoaderCircle className="animate-spin h-5 w-5 text-white" />
            )}
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </Form>
      <Toaster closeButton />
    </div>
  );
}

export default LoginForm;
