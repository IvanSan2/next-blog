import MarkdownEditor from "../components/markdown/MarkdownEditor";
import styles from "./writePage.module.css";

const WritePage = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.titleInput} />
      <span
        type="text"
        placeholder="Description"
        className={styles.descriptionInput}
        role="textbox"
        contentEditable
      />
      <MarkdownEditor className={styles.editor} />
    </div>
  );
};

export default WritePage;
