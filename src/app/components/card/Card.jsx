import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import image from "../../../../public/p1.jpeg";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.2.2023 - </span>
          <span
            className={styles.category}
            style={{ background: "var(--categoryWeb)" }}
          >
            Web
          </span>
        </div>
        <Link href="/">
          <h2 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sit
          vero, quisquam eaque porro cumque perferendis ipsam. Officia possimus
          ipsum, aut, similique ullam, molestias iure voluptates nostrum
          reprehenderit in tempora?
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
