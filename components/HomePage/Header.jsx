import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Navbar />

      {/* <div className={styles.Carousel}>
      <img src="images/marcus.jpg" alt="" />
    </div> */}

      <div className={styles.Container}>
        <div className={styles.LeftHeader}>
          <img src="images/blob1.svg" alt="" />
        </div>
        <div className={styles.CenterHeader}>
          <h1>blog.obradovic</h1>
          <h5>
            just my thoughts Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Natus, omnis quos nostrum sapiente cumque eveniet rem ad odio
            vero, ea ducimus sequi amet voluptas animi quia minima repudiandae
            expedita autem!
          </h5>
        </div>
        <div className={styles.RightHeader}>
          <img src="images/blob2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
