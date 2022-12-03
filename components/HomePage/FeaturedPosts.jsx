import styles from "./FeaturedPosts.module.scss";
import PostCard from "../PostCard/PostCard";

const FeaturedPosts = ({ posts }) => {
  return (
    <div className={styles.FeaturedPosts}>
      <div className={styles.header}>
        <div className={styles.LeftSide}>
          <h2>Popular topics</h2>
        </div>
      </div>

      <div className={styles.container}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
