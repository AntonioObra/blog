import Navbar from "../Navbar/Navbar";
import styles from "./PostHeader.module.scss";

const PostHeader = ({ title, excerpt, img }) => {
  return (
    <div className={styles.Header}>
      <img src={img} alt="" />

      <div className={styles.nav}>
        <Navbar />
      </div>

      <div className={styles.CenterHeader}>
        <h1>{title}</h1>
        <h5>{excerpt}</h5>
      </div>
    </div>
  );
};

export default PostHeader;
