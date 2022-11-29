import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>blog.obradovic</h2>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Footer;
