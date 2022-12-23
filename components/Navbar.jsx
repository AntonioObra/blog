import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden container mx-auto text-center p-6 text-white md:flex items-center justify-center space-x-6">
      <Link
        href="/"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg"
      >
        blog.obradovic
      </Link>

      <Link
        href="/photos"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg"
      >
        photos
      </Link>

      <Link
        href="/about"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg"
      >
        about
      </Link>
      <Link
        href="/contact"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg"
      >
        contact
      </Link>
    </nav>
  );
};

export default Navbar;
