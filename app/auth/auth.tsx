'use client';

import { useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Auth({ session }: { session: Session | null }) {
  const [login, setLogin] = useState(true);
  const toggle = () => setLogin(!login);

  const supabase = createClientComponentClient<Database>();

  const handleSignup = async (email: string, password: string) => {
    if (email && password) {
      const { error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        console.log({ error });
      }
    }
  }

  const handleLogin = async (email: string, password: string) => {
    if (email && password) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.log({ error });
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  const inputStyling = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

  const buttonStyling = "btn btn-success btn-wide rounded m-2"

  return session ? (
    <button className={buttonStyling} onClick={handleLogout}>Logout</button>
  ) : (
    <main>
      <form onSubmit={(e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        login ? handleLogin(email, password) : handleSignup(email, password);
      }}>
        <div className="container flex flex-col items-center w50">
          <input
            className={inputStyling}
            type="email"
            name="email"
            placeholder="Email" />
          <input
            className={inputStyling}
            type="password"
            name="password"
            placeholder="Password" />
          <button className={buttonStyling} type="submit">{login ? "Log In" : "Sign Up"}</button>
          <a className="" onClick={() => toggle()}>{
          login ? "New here? Sign up!"
          : "Already have an account? Log in!"
        }</a>
        </div>
      </form>
    </main>
  );
}
