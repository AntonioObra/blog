import styles from "./FeaturedPosts.module.scss";
import PostCard from "../PostCard/PostCard";

const FeaturedPosts = ({ posts }) => {
  const newPosts = posts.slice(0, 8);
  return (
    <div className={styles.FeaturedPosts}>
      <div className={styles.header}>
        <div className={styles.LeftSide}>
          <h2>Popular topics</h2>
        </div>
      </div>

      <div className={styles.container}>
        {newPosts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
