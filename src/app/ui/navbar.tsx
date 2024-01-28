import Link from "next/link";
import { ThemeSwitcher } from "./navbar-theme-switcher";
import NavbarUserWidget from "./navbar-user-widget";

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
            <NavbarUserWidget />
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
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
}
