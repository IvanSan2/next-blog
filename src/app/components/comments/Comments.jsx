import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.form}>
          <textarea
            className={styles.textarea}
            placeholder="Write your comment..."
          ></textarea>
          <button className={styles.button}>Comment</button>
        </div>
      ) : (
        <div className={styles.login}>
          <span className={styles.loginText}>
            You need to be logged in to comment
          </span>
          <button className={styles.loginButton}>Login</button>
        </div>
      )}
      <div className={styles.comments}></div>
    </div>
  );
};

export default Comments;
