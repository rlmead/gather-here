import type { Metadata } from "next";
import { atkinson_hyperlegible } from "./ui/fonts";
import "./ui/globals.css";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={atkinson_hyperlegible.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
