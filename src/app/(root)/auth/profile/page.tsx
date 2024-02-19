import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.auth.getSession();
  const user = data?.session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <main className="mx-auto flex min-h-full flex-col items-center bg-secondary text-primary">
      <div className="container flex flex-col items-center">
        <h1 className="mt-16 text-7xl">My Profile</h1>
        <p className="p-5 text-center text-2xl">
          Hello {user.email}, you are logged in!
        </p>
      </div>
    </main>
  );
}
