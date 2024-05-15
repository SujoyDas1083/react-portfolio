import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sujoy</h1>
        <p className={styles.description}>
          I'm a Front-End developer with 6 month's of Exprience using React and
          Nodejs.reach out if you'd like to hire me
        </p>
        <a href="mailto:sujoydas1083@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage2.png")} alt="Hero image of me"className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
