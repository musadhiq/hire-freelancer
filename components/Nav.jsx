import { navLinks } from "@/constants/NavLinks";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-end p-4 mt-4">
      <ul className="flex gap-12 items-center justify-center text-lg">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="blue-h transition-colors duration-200 ease-in-out"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
