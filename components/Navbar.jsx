import Link from "next/link";
import react, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" container mx-auto  py-6 text-white flex justify-between items-start md:justify-start lg:space-x-6 px-5 lg:px-24 ">
      <Link
        href="/"
        className=" hover:text-sky-100 -ml-1 duration-150 hover:-translate-y-1 text-lg"
      >
        blog.obradovic
      </Link>

      <Link
        href="/photos"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg hidden md:block"
      >
        photos
      </Link>

      <Link
        href="/about"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg hidden md:block"
      >
        about
      </Link>
      <Link
        href="/contact"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg hidden md:block"
      >
        contact
      </Link>

      <button
        id="menu-btn"
        className="z-30 block md:hidden focus:outline-none hamburger"
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed inset-0 z-20 ${
          open ? "open" : "hidden"
        }  flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-sky-300 opacity-90 bg-black`}
      >
        <div className="w-full py-3 text-center">
          <Link
            href="/"
            className=" hover:text-sky-100 -ml-1 duration-150 hover:-translate-y-1 text-lg"
          >
            blog.obradovic
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link
            href="/photos"
            className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg "
          >
            photos
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link
            href="/about"
            className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg "
          >
            about
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link
            href="/contact"
            className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg "
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
