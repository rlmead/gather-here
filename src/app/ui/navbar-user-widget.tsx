"use client";

import { createClient } from "@/utils/supabase/client";
import { useContext } from "react";
import { SessionContext } from "@/app/providers";
import Link from "next/link";

export default function NavbarUserWidget() {
  const supabase = createClient();

  const session = useContext(SessionContext);
  const user = session?.user;

  return user ? (
    <details>
      <summary>Hello, {user.email}</summary>
      <ul className="rounded-t-none bg-base-100 p-2">
        <li>
          <Link href="/auth/profile">My Profile</Link>
        </li>
        <li>
          <button onClick={() => void supabase.auth.signOut()}>Sign Out</button>
        </li>
      </ul>
    </details>
  ) : (
    <Link href="/auth/login">Log In / Sign Up</Link>
  );
}
