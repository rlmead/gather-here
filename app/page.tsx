import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/about")
  };

  return (
    <main className="flex min-h-full flex-col items-center mx-auto text-primary bg-secondary">
      <div className="container flex flex-col content-center">
        <h1 className="text-7xl text-center mt-8">gather here.</h1>
        <p className="text-2xl text-center p-5">a social network for forming local friendship groups based on shared interests</p>
        <div className="container mx-auto md:inline-flex text-center">
          <div className="container mx-auto text-center">
            <Link href="/signup">
              <button className="btn btn-success btn-wide rounded m-2">
                Sign Up
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-info btn-wide rounded m-2 break-after-column">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
