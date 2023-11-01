import React from "react";
import styles from "./menu.module.css";
import MenuPost from "../menuPost/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>What's hot</h3>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <MenuPost />
        <MenuPost />
        <MenuPost />
      </div>
    </div>
  );
};

export default Menu;
