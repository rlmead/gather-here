import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <div className="container flex flex-col items-center">
        <h1 className="text-7xl">gather here.</h1>
        <p className="text-2xl p-4">a social network for forming local friendship groups based on shared interests</p>
        <div className="container flex items-center justify-center">
          <Link href="/auth">
            <button className="btn btn-secondary btn-wide rounded m-2">
              Sign Up
            </button>
          </Link>
          <Link href="/about">
            <button className="btn btn-accent btn-wide rounded m-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
