import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <h3>home</h3>
      </Link>

      <ul>
        <Link href="/posts">
          <li>blog</li>{" "}
        </Link>
        <Link href="/bookshelf">
          <li>bookshelf</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
        <Link href="/contact">
          <li>contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
