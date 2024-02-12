import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/next.svg" alt="logo" width={74} height={29} />
      </Link>
      <div className={styles.text}>2024 xyz | All rights reserved</div>
    </div>
  );
};

export default Footer;
