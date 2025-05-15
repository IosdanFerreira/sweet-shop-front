import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/InputPassword";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function RegisterForm() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

  const formSchema = z
    .object({
      name: z
        .string()
        .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
      email: z.string().email({ message: "Insira um email válido" }),
      password: z.string().regex(passwordRegex, {
        message:
          "A senha deve conter 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas devem ser iguais",
      path: ["confirmPassword"], // Aponta o erro especificamente para o campo confirmPassword
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(
    null
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsDialogOpen(true);
    setFormData(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              const showError =
                form.formState.errors.name && form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel
                    className={cn(showError ? "text-destructive" : "")}
                  >
                    Nome
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

          {/* Confirmar Senha */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => {
              const showError =
                form.formState.errors.confirmPassword &&
                form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel
                    className={cn(showError ? "text-destructive" : "")}
                  >
                    Confirmar senha
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

          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Login Realizado com sucesso</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="mb-2 text-md flex gap-2">
                    <span className="block font-semibold">Email:</span>
                    {formData?.email}
                  </div>

                  <div className="mb-2 text-md flex gap-2">
                    <span className="block font-semibold">Senha:</span>
                    {formData?.password}
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            type="submit"
            className="w-full cursor-pointer text-md py-6 text-xl"
          >
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default RegisterForm;
