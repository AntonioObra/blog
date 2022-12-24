import moment from "moment/moment";
import Link from "next/link";
import React from "react";

const PostCard2 = ({ post }) => {
  return (
    <div className="w-full flex flex-col items-start space-y-5  md:w-[400px] h-[550px]  mb-24 p-10 pt-20 cursor-pointer border-2 border-transparent group  duration-50 hover:border-sky-200">
      <Link href={`/posts/${post.slug}`}>
        {/* <img
        src={post.featuredImage.url}
        alt=""
        className="h-1/2 w-full object-cover grayscale group-hover:grayscale-0 duration-150"
      /> */}
        <p className="text-gray-300 mt-2 text-sm">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <h1 className="text-white text-2xl lg:text-5xl mt-2 line-clamp-4 duration-300 ">
          {post.title}
        </h1>
        <p className="text-gray-300 line-clamp-6 mt-2">{post.excerpt}</p>
      </Link>
    </div>
  );
};

export default PostCard2;
