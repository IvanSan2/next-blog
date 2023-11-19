import styles from "./blogPage.module.css";
import Menu from "../components/menu/Menu";
import CardList from "../components/cardList/CardList";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Category name</h2>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
