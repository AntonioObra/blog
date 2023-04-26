import Link from "next/link";
import react, { useState } from "react";
import { CgSun } from "react-icons/cg";
import { FiMoon } from "react-icons/fi";

const navLinks = [
  { link: "/", name: "blog.obradovic" },
  { link: "/posts", name: "posts" },
  { link: "/photos", name: "photos" },
  { link: "/about", name: "about" },
  { link: "/contact", name: "contact" },
  { link: "/goals", name: "goals" },
];

const Navbar = ({ setDarkMode, isDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dark:bg-[#0a0a0a] sticky top-0 z-50 bg-[#ECE7E5]">
      <nav className=" container mx-auto py-6 dark:text-white flex justify-between items-start md:justify-start lg:space-x-6 px-5 lg:px-24 ">
        {/* Desktop Menu Links */}
        {navLinks.map((link, i) => (
          <Link
            href={link.link}
            className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-lg hidden md:block"
            key={i}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Menu Link */}
        <Link
          href="/"
          className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-lg md:hidden block"
        >
          blog.obradovic
        </Link>

        {isDark ? (
          <button onClick={() => setDarkMode(false)} title="Toggle light mode">
            <CgSun className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-2xl hidden md:block outline-none" />
          </button>
        ) : (
          <button onClick={() => setDarkMode(true)} title="Toggle dark mode">
            <FiMoon className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-2xl hidden md:block outline-none" />
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className={`z-30 block md:hidden focus:outline-none hamburger  ${
            open && "open"
          } `}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-top "></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            open ? "open" : "hidden"
          }  flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y-4 divide-blue-500 opacity-90 bg-black `}
        >
          {navLinks.map((link, i) => (
            <div className="w-full py-3 text-center" key={i}>
              <Link
                href={link.link}
                className=" hover:text-blue-500 -ml-1 duration-150 hover:-translate-y-1 text-lg"
              >
                {link.name}
              </Link>
            </div>
          ))}

          {isDark ? (
            <button
              onClick={() => setDarkMode(false)}
              className="w-full pt-2 flex items-center justify-center outline-none"
            >
              <CgSun className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-4xl  md:hidden outline-none " />
            </button>
          ) : (
            <button
              onClick={() => setDarkMode(true)}
              className="w-full pt-2 flex items-center justify-center outline-none"
            >
              <FiMoon className="hover:text-blue-500 duration-150 hover:-translate-y-1 text-4xl  md:hidden outline-none" />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
