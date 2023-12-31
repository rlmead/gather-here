"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const supabase = createClientComponentClient<Database>();

  const { push } = useRouter();

  const handleLogin = async (email: string, password: string) => {
    if (email && password) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        // TODO: handle error in UI
        console.log({ error });
      }

      push("/about");
    }
  };

  const inputStyling = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

  const buttonStyling = "btn btn-success btn-wide rounded m-2"

  return (
    <main>
      <form onSubmit={(e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        handleLogin(email, password);
      }}>
        <div className="container flex flex-col items-center w50">
          <input
            className={inputStyling}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="username" />
          <input
            className={inputStyling}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password" />
          <button className={buttonStyling} type="submit">Log In</button>
          <a href="/signup">New here? Sign up!</a>
        </div>
      </form>
    </main>
  );
}
