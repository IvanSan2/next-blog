import styles from "./featuredSlide.module.css";
import Image from "next/image";

export default function FeaturedSlide({ slide }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={slide.img} alt="" fill className={styles.image} />
          <div className={styles.textContainer}>
            {/* max 70 symbols for title */}
            <h1 className={styles.title}>
              {slide.title.length > 70
                ? slide.title.slice(0, 67) + "..."
                : slide.title}
            </h1>
            <div className={styles.user}>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>Ivan San</span>
                <span className={styles.date}>14.12.2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
