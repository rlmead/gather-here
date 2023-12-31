"use client";

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();

  const { push } = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }

    push("/");
  };

  return (
    <div className="navbar text-primary bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">gather here.</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 bg-secondary">
          {session
            ? <li onClick={() => handleLogout()}><Link href="">Log Out</Link></li> 
            : <li><Link href="/login">Log In</Link></li>}
          <li>
            <details>
              <summary>
                More Info
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {session
                  ? <li><Link href="/join">Join a Group</Link></li>
                  : <li><Link href="/about">About</Link></li>
                }
            </ul>
          </details>
        </li>
      </ul>
    </div>
    </div >
  )
};