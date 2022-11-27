import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h3>home</h3>
      <ul>
        <li>blog</li>
        <li>bookshelf</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
