import moment from "moment/moment";
import Link from "next/link";
import React from "react";

const PostCard2 = ({ post }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-5 md:w-96 h-96 md:h-[500px]  mb-24 p-5 pt-20 cursor-pointer group border-4 border-transparent duration-50  hover:border-sky-700 hover:bg-transparent ">
      <Link href={`/posts/${post.slug}`}>
        {/* <img
        src={post.featuredImage.url}
        alt=""
        className="h-1/2 w-full object-cover grayscale group-hover:grayscale-0 duration-150"
      /> */}
        <p className="text-gray-800 dark:text-gray-300  text-sm group-hover:text-sky-700">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <h1 className="dark:text-white text-2xl lg:text-5xl mt-2 line-clamp-3  group-hover:text-sky-700 ">
          {post.title}
        </h1>
        <p className="text-gray-800 dark:text-gray-300 line-clamp-6 mt-2 group-hover:text-sky-700">
          {post.excerpt}
        </p>
      </Link>
    </div>
  );
};

export default PostCard2;
