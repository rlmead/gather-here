"use client";

import { createClient } from "@/utils/supabase/client";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AuthError } from "@supabase/supabase-js";
import { useState } from "react";
import AuthForm, { AuthFormData } from "../auth-form";

export default function SignupPage() {
  const router = useRouter();
  const [authError, setAuthError] = useState<AuthError | null>(null);

  const supabase = createClient();

  const onSubmit: SubmitHandler<AuthFormData> = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setAuthError(error);
      return;
    }

    router.push("/auth/profile");
  };

  return <AuthForm type="signup" authError={authError} onSubmit={onSubmit} />;
}
