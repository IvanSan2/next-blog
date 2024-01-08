"use client";
import Image from "next/image";
import styles from "./comments.module.css";
import userImage from "@/../../public/fashion.png";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import HeartIcon from "../icons/HeartIcon";
import SendIcon from "../icons/SendIcon";

const Comments = () => {
  const { theme } = useContext(ThemeContext);

  const [placeholder, setPlaceholder] = useState("Write your comment...");

  // A function to handle the focus event
  const handleFocus = () => {
    // Set the placeholder to an empty string
    setPlaceholder("");
  };

  // A function to handle the blur event
  const handleBlur = () => {
    // Set the placeholder back to the original value
    setPlaceholder("Write your comment...");
  };

  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.form}>
          <textarea
            className={styles.textarea}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
          <div className={styles.formBar}>
            <div className={styles.utilsContainer}></div>
            <button className={styles.button}>
              <SendIcon
                fillColor={"var(--textColor)"}
                width={24}
                className={styles.commentIcon}
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
            <div className={styles.likeContainer}>
              <div className={styles.likes}>
                <div className={styles.likeButton}>
                  <HeartIcon fillColor={"var(--textColor)"} width={24} />
                </div>
                <div className={styles.likesCount}>
                  {/*Insert likes count*/ 173}
                </div>
              </div>
            </div>
          </div>
        </div>

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
              voluptas quas quod fugit voluptatibus.
            </p>
            <div className={styles.likeContainer}>
              <div className={styles.likes}>
                <div className={styles.likeButton}>
                  <HeartIcon fillColor={"red"} width={24} />
                </div>
                <div className={styles.likesCount}>
                  {/*Insert likes count*/ 4}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
