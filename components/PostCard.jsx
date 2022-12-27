import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-full md:w-[400px] h-[450px]  mb-24 p-2 cursor-pointer group  duration-300">
      <Link href={`/posts/${post.slug}`}>
        <Image
          src={post.featuredImage.url}
          alt={`Post ${post.title} Image`}
          className="h-1/2 w-full object-cover grayscale group-hover:grayscale-0 duration-150"
          width={500}
          height={500}
        />
        <p className="text-gray-300 mt-2 text-sm">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <h1 className="text-white text-2xl mt-2 line-clamp-2   group-hover:text-sky-200 duration-300 ">
          {post.title}
        </h1>
        <p className="text-gray-300 line-clamp-4 mt-2">{post.excerpt}</p>
      </Link>
    </div>
  );
};

export default PostCard;
