import styles from "./PostCardV2.module.scss";
import moment from "moment";
import Link from "next/link";

const PostCardV2 = ({ post }) => {
  return (
    <div className={styles.PostCard}>
      <Link href={`/posts/${post.slug}`}>
        <div className={styles.PostCardImg}>
          <img src={post.featuredImage.url} alt="" />
        </div>

        <div className={styles.container}>
          <div className={styles.PostInfo}>
            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>{" "}
            <h3> {post.title}</h3>
            <h5>{post.excerpt}</h5>
            {/* <p>{post?.categories[0]?.name}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCardV2;
