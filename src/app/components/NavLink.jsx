import React from "react";
import Link from "next/link";

function NavLink({ href, title }) {
  return (
    <Link href={href} className="text-white font-bold hover:text-sky-500">
      {title}
    </Link>
  );
}

export default NavLink;
