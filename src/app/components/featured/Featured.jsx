import React from "react";
import styles from "./featured.module.css";
import p1 from "../../../../public/p1.jpeg";
import FeaturedSlider from "../featuredSlider/FeaturedSlider";

const Featured = () => {
  const slides = [
    {
      id: 1,
      title: "Lorem ipsum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.",
      img: p1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.",
      img: p1,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.",
      img: p1,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit 4.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.",
      img: p1,
    },
    {
      id: 5,
      title: "Lorem.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.",
      img: p1,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Welcome to <span className={styles.logo}>FullStackLife</span> blog:
        </b>{" "}
        where developers share knowledge
      </h1>
      <FeaturedSlider slides={slides} />
    </div>
  );
};

export default Featured;
