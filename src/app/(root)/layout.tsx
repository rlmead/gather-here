import Footer from "@/app/ui/footer";
import Navbar from "@/app/ui/navbar";

export default function LayoutWithHeaderAndFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
