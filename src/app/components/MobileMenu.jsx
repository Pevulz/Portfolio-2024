import React from "react";
import NavLink from "./NavLink";

function MobileMenu({ links }) {
  return (
    <ul className="h-screen text-4xl font-bold flex flex-col justify-center items-center bg-black gap-y-8 opacity-90">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MobileMenu;
