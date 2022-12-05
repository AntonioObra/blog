import styles from "./EditorPicks.module.scss";
import React, { useState, useEffect } from "react";
import PostCardV2 from "../PostCard/PostCardV2";

const EditorPicks = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.EditorPicks}>
      <h2>Editor&#39;s Pick</h2>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <PostCardV2 key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default EditorPicks;
