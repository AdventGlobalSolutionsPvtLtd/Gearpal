import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signUp } from "@/auth/context/jwt";
import { useAuthContext } from "@/auth/hooks";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "@/routes/hooks";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function JwtSignUpForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const { checkUserSession } = useAuthContext();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const FormSchema = z.object({
    userName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Email must be a valid email address!" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters!" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter!",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter!",
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character!",
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    try {
      await signUp({
        email: data.email,
        password: data.password,
        userName: data.userName,
      });

      await checkUserSession?.();

      router.replace("/auth/jwt/sign-in");
    } catch (error: unknown) {
      const errorMessage = (error as Error)?.message || "An unknown error occurred.";

      // Display error toast
      toast({
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Submission error:", errorMessage);
    } finally {
      setIsLoading(false); // Ensure loading state is always reset
    }
  }

  return (
    <>
      <div className={cn("grid gap-6", className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username"
                        {...field}
                        autoCapitalize="none"
                        autoCorrect="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email address"
                        {...field}
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} className="mt-2">
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
