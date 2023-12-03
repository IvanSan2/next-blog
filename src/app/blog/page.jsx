import styles from "./blogPage.module.css";
import Menu from "../components/menu/Menu";
import CardList from "../components/cardList/CardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
