import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Navbar />

      <div className={styles.CenterHeader}>
        <h1>blog.obradovic</h1>
        <h5>
          just my thoughts Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Natus, omnis quos nostrum sapiente cumque eveniet rem ad odio
          vero, ea ducimus sequi amet voluptas animi quia minima repudiandae
          expedita autem!
        </h5>
      </div>
    </div>
  );
};

export default Header;
