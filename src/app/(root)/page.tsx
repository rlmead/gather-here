import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full flex-col items-center bg-secondary text-primary">
      <div className="container flex flex-col content-center">
        <h1 className="mt-8 text-center text-7xl">gather here.</h1>
        <p className="p-5 text-center text-2xl">
          a social network for forming local friendship groups based on shared
          interests
        </p>
        <div className="container mx-auto text-center md:inline-flex">
          <div className="container mx-auto text-center">
            <Link href="/auth">
              <button className="btn btn-success btn-wide m-2 rounded">
                Sign Up
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-accent btn-wide m-2 break-after-column rounded">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center md:inline-flex">
        <div className="container mx-auto text-center">
          <Link href="/auth">
            <button className="btn btn-info btn-wide m-2 rounded">
              Info Color
            </button>
          </Link>
          <Link href="/about">
            <button className="btn btn-warning btn-wide m-2 break-after-column rounded">
              Warning Color
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
