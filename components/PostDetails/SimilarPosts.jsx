import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { getSimilarPosts, getRecentPosts } from "../../services";
import PostCard from "../PostCard/PostCard";
import styles from "./SimilarPosts.module.scss";

const SimilarPosts = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className={styles.container}>
      <h2>Related Posts</h2>
      <div className={styles.SimilarPosts}>
        {relatedPosts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SimilarPosts;
