import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 text-primary">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          gather here.
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal bg-secondary px-1">
          <li>
            <Link href="/auth">Sign In</Link>
          </li>
          <li>
            <details>
              <summary>More Info</summary>
              <ul className=" rounded-t-none bg-base-100 p-2">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/join">Join a Group</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
