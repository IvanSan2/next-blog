import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "../../../../public/style.png";
import { getRandomLogoShape } from "../../utils/math.js";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=web"
          className={`${styles.category} ${styles.web}`}
        >
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
            style={{
              transition: "all 1s ease-out 0.4s",
              borderRadius: getRandomLogoShape(),
            }}
          />
          Web
        </Link>
        <Link
          href="/blog?cat=mobile"
          className={`${styles.category} ${styles.mobile}`}
        >
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
            style={{
              transition: "all 1s ease-out 0.4s",
              borderRadius: getRandomLogoShape(),
            }}
          />
          Mobile
        </Link>
        <Link
          href="/blog?cat=java"
          className={`${styles.category} ${styles.java}`}
        >
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
            style={{
              transition: "all 1s ease-out 0.4s",
              borderRadius: getRandomLogoShape(),
            }}
          />
          Java
        </Link>
        <Link
          href="/blog?cat=design"
          className={`${styles.category} ${styles.design}`}
        >
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
            style={{
              transition: "all 1s ease-out 0.4s",
              borderRadius: getRandomLogoShape(),
            }}
          />
          Design
        </Link>
        <Link
          href="/blog?cat=lifestyle"
          className={`${styles.category} ${styles.lifestyle}`}
        >
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
            style={{
              transition: "all 1s ease-out 0.4s",
              borderRadius: getRandomLogoShape(),
            }}
          />
          Lifestyle
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
