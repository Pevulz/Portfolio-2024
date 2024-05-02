"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Experiences", path: "#experiences" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-10">
      <div className="h-20 flex flex-wrap items-center justify-between mx-auto px-8 bg-slate-900">
        <Link href={"/"} className="text-4xl text-white font-extrabold">
          HOME
        </Link>
        <div className="mobile-menu block md:hidden">
          {navOpen ? (
            <>
              <button
                onClick={() => setNavOpen(false)}
                className="border-2 rounded-lg border-sky-500 px-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setNavOpen(true)}
                className="border-2 rounded-lg border-sky-500 px-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="md:flex gap-8 xl:gap-16">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MobileMenu links={navLinks}></MobileMenu> : null}
    </nav>
  );
}

export default Navbar;
