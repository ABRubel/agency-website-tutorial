import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {/* <h2 className={styles.subtitle}>About Agency</h2> */}
        <h1 className={styles.title}>
          Empowering New Zealand with sustainable energy solutions from our
          power office.
        </h1>
        <p className={styles.desc}>
          We specialise in installing and maintaining Passive Fire Protection
          Systems for Commercial and Residential buildings throughout the Upper
          North Island including Auckland, Hamilton, Tauranga and surrounding
          areas. It’s all about risk management. You need to be sure that if
          fire breaks out those systems will do exactly what they were designed
          to do – protect people and property in a safe, reliable and effective
          manner.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
