import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>blog.obradovic</h2>
          aaskd
        </div>
        <div className={styles.right}>
          <a href="https://twitter.com/antonioobra8" target="_blank">
            {" "}
            <Image src="/images/twitter.svg" alt="" width={50} height={50} />
          </a>

          <a href="https://github.com/AntonioObra" target="_blank">
            <Image src="/images/githubIcon.svg" alt="" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
