import styles from "./AboutHome.module.scss";

const AboutHome = () => {
  return (
    <div className={styles.AboutHome}>
      <div className={styles.Container}>
        <div className={styles.LeftSide}>
          <h2>hy! my name is antonio and welcome to my blog.</h2>
          <p>
            this is a place where i&#39;ll be documenting my journey from
            becoming an aspiring web developer to landing a full time job,
            landing freelancing jobs, as well as blog tutorials on varius topics
            around web dev. there will also be a lot of other blogs about
            videogames that were inpactfull as well as books that i read.
          </p>
        </div>
        <img src="images/Resume.svg" alt="" />
      </div>
      <div className={styles.blobs}>
        <img src="images/blob3.svg" alt="" />
        <img src="images/blob4.svg" alt="" className={styles.img2} />
      </div>
    </div>
  );
};

export default AboutHome;
