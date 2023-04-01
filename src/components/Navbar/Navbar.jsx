import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Blog Post", path: "/blog/:id" },
  ];

  return (
    <nav className="bg-purple-300 h-12 p-2">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
       <span className="md:hidden">
       {!open === true ? (
          <Bars3Icon className="h-6 w-6 text-purple-500" />
        ) : (
          <XMarkIcon className="h-6 w-6 text-purple-500" />
        )}
       </span>
      </div>
      <ul className={`md:flex absolute duration-200 md:static bg-purple-300 ${ open ? 'top-6' : '-top-36'}`}>
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
