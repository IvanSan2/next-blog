"use client";
import styles from "./featuredSlider.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeaturedSlide from "../featuredSlide/FeaturedSlide";

export default function FeaturedSlider({ slides }) {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useLayoutEffect(() => {
    setSliderWidth(ref.current.clientWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setSliderWidth(ref.current.clientWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * sliderWidth}px)`,
          }}
        >
          {slides.map((slide) => (
            <div className={styles.slide}>
              <FeaturedSlide slide={slide} key={slide.id} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div
          className={styles.arrowLeft}
          style={{ display: currentIndex === 0 && "none" }}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          ❰
        </div>
        <div
          className={styles.arrowRight}
          style={{
            display: currentIndex === slides.length - 1 && "none",
          }}
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          ❱
        </div>
      </div>
    </div>
  );
}
