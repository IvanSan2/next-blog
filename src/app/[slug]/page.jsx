import Image from "next/image";
import Menu from "../components/menu/Menu";
import styles from "./singlePage.module.css";
import image from "../../../public/p1.jpeg";
import userImage from "../../../public/fashion.png";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={userImage} alt="" fill className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Ivan San</span>
              <span className={styles.date}>14.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={image} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              deleniti non maxime illo temporibus accusantium numquam est
              commodi, libero in, accusamus labore molestias, a et veritatis
              quos officiis explicabo! Debitis! Sed aspernatur vero maiores
              nostrum commodi neque labore eos quam quos. Nisi omnis aliquam
              sint modi sed asperiores nostrum aperiam minima! Temporibus
              asperiores debitis tempore dolore voluptatem dolor provident
              accusamus! Incidunt animi, expedita atque numquam recusandae
              tempore similique id eaque quam? Placeat quaerat ducimus et omnis
              facilis quas aspernatur animi, ex aut dolores incidunt dolor
              commodi officia nisi consequuntur modi. Accusamus dolor nam illo
              facere? Nemo sed quae exercitationem reprehenderit optio quam
              nesciunt impedit eveniet ex, dolorem sequi maiores, quas neque
              voluptatem aliquam. Magni voluptatibus odio cum explicabo
              architecto fugiat? Suscipit molestiae ad quos reprehenderit
              tempora veniam quas, assumenda placeat quae minima aut similique
              cumque blanditiis repudiandae vel vero itaque fugit exercitationem
              qui recusandae sequi culpa quo minus rerum. Labore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
