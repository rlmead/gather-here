import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./ui/globals.css";
import { atkinson_hyperlegible } from "./ui/fonts";
import type { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "gather here.",
  description:
    "A social network for forming local friendship groups based on shared interests",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={atkinson_hyperlegible.className}>
        <Navbar session={session}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
