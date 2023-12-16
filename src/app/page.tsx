import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <div className="container flex flex-col content-center">
        <h1 className="text-7xl text-center mt-8">gather here.</h1>
        <p className="text-2xl text-center p-5">a social network for forming local friendship groups based on shared interests</p>
        <div className="container mx-auto md:inline-flex text-center">
          <div className="container mx-auto text-center">
            <Link href="/auth">
              <button className="btn btn-secondary btn-wide rounded m-2">
                Sign Up
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-accent btn-wide rounded m-2 break-after-column">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
