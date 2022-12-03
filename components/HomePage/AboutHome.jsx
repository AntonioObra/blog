import styles from "./AboutHome.module.scss";

import Typewriter from "typewriter-effect";

const AboutHome = () => {
  return (
    <div className={styles.AboutHome}>
      {/* <h2>you could be good today, but instead you choose tomorrow</h2> */}

      <Typewriter
        options={{
          strings: [
            "<h2>you could be good today, but instead you choose tomorrow</h2>",
            "<h2>the person who does wrong, does wrong to themselves</h2>",
            "<h2>better to trip with the feet than with the tounge</h2>",
            "<h2>to stop talking about what the good man is like, and just be one</h2>",
          ],
          autoStart: true,
          loop: true,
        }}
        style={{ color: "white" }}
      />
    </div>
  );
};

export default AboutHome;
