import styles from "./PostCard.module.scss";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCardImg}>
        <img src={post.featuredImage.url} alt="" />
        <p>{post?.categories[0]?.name}</p>
      </div>

      <div className={styles.PostCardContent}>
        <div className={styles.PostInfo}>
          <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
          <Link href={`/posts/${post.slug}`}>
            {" "}
            <h3> {post.title}</h3>
          </Link>
        </div>
        <div className={styles.PostCardExcerpt}>
          <p>{post.excerpt}</p>
        </div>

        {/* <div className={styles.PostInfoCategory}></div> */}
      </div>
    </div>
  );
};

export default PostCard;
