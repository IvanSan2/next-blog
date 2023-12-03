import Image from "next/image";
import styles from "./comments.module.css";
import userImage from "@/../../public/fashion.png";
import sendIcon from "@/../../icons/send-svgrepo-com.svg";

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
          <div className={styles.formBar}>
            <div className={styles.utilsContainer}></div>
            <button className={styles.button}>
              <Image
                className={styles.commentIcon}
                src={sendIcon}
                alt="Send message"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.login}>
          <span className={styles.loginText}>
            You need to be logged in to comment
          </span>
          <button className={styles.loginButton}>Login</button>
        </div>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userImageContainer}>
            <Image
              src={userImage}
              alt=""
              width={50}
              height={50}
              className={styles.userImage}
            />
          </div>

          <div className={styles.commentContainer}>
            <div className={styles.user}>
              <span className={styles.username}>User</span>
              <span className={styles.userDate}>01.01.2023</span>
            </div>
            <p className={styles.commentText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatum, voluptatem, quia quos iusto doloremque
              voluptas quas quod fugit voluptatibus. Quisquam quibusdam,
              voluptatum, voluptatem, quia quos iusto doloremque voluptas quas
              quod fugit voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
