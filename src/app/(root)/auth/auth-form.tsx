"use client";

import { AuthError } from "@supabase/supabase-js";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/utils/cn";

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type AuthFormData = z.infer<typeof authFormSchema>;

export default function AuthForm({
  type,
  authError,
  onSubmit,
}: {
  type: "login" | "signup";
  authError: AuthError | null;
  onSubmit: SubmitHandler<AuthFormData>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
  });

  return (
    <main className="mx-auto flex min-h-full flex-col items-center bg-secondary text-primary">
      <div className="container flex max-w-xl flex-col items-center">
        <div role="tablist" className="tabs tabs-lifted tabs-lg w-full">
          <Link
            role="tab"
            href="/auth/login"
            className={`tab ${type === "login" && "tab-active"}`}
          >
            Log In
          </Link>
          <Link
            role="tab"
            href="/auth/signup"
            className={`tab ${type === "signup" && "tab-active"}`}
          >
            Sign Up
          </Link>
        </div>
        <div className="tab h-auto w-full rounded-b-lg border border-t-0 border-[var(--tab-border-color)] p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  w-full flex-col justify-stretch space-y-4"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                {...register("email")}
                type="email"
                required
                className={cn(
                  "input input-bordered w-full",
                  errors.email && "input-error",
                )}
              />
              {errors.email && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                {...register("password")}
                type="password"
                required
                className={cn(
                  "input input-bordered w-full",
                  errors.password && "input-error",
                )}
              />
              {errors.password && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                </div>
              )}
            </label>
            <div>
              <button
                className="btn btn-primary mt-2 w-full animate-none"
                type="submit"
              >
                {type === "login" ? "Log In" : "Sign Up"}
              </button>
            </div>
            {authError && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {authError.message}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
