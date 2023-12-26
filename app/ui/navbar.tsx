import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar text-primary bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">gather here.</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 bg-secondary">
          <li><Link href="/auth">Log In</Link></li>
          <li>
            <details>
              <summary>
                More Info
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/join">Join a Group</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
};