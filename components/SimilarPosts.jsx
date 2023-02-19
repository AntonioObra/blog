import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getSimilarPosts, getRecentPosts } from "../services";
import PostCard2 from "./PostCard2";

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
  }, [slug, categories]);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="pt-32 md:pt-64">
      <h2 className="text-5xl  md:text-7xl xl:text-8xl font-semibold text-right  dark:text-white  ">
        similar<br></br> posts
      </h2>

      <div className="border-b-4 border-indigo-400 my-5 lg:my-16 "></div>
      <div className="max-w-8xl  flex flex-col items-top justify-between space-y-5 md:space-y-0  md:flex-row flex-wrap md:space-x-2">
        {relatedPosts.map((post, index) => (
          <PostCard2 post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SimilarPosts;
