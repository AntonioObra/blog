import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto text-center p-6 text-white flex items-center justify-center space-x-6">
      <Link
        href="/posts"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1"
      >
        posts
      </Link>
      <Link
        href="/photos"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1"
      >
        photos
      </Link>
      <Link
        href="/"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1"
      >
        blog.obradovic
      </Link>
      <Link
        href="/about"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1"
      >
        about
      </Link>
      <Link
        href="/contact"
        className="hover:text-sky-100 duration-150 hover:-translate-y-1"
      >
        contact
      </Link>
    </nav>
  );
};

export default Navbar;
