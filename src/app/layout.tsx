import type { Metadata } from "next";
import { atkinson_hyperlegible } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "gather here.",
  description:
    "A social network for forming local friendship groups based on shared interests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={atkinson_hyperlegible.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
