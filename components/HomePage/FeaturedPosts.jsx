import styles from "./FeaturedPosts.module.scss";
import PostCard from "../PostCard/PostCard";

const FeaturedPosts = ({ posts }) => {
  return (
    <div className={styles.FeaturedPosts}>
      <h2>featured posts</h2>

      <div className={styles.container}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
