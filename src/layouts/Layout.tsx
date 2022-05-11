import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <nav>
          <div>
            <h1>
              <Link href="/">Food</Link>
            </h1>
          </div>
          <ul>
            <li>
              <Link href="#">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="px-16 py-6 bg-gray-100">{children}</main>
    </>
  );
}
