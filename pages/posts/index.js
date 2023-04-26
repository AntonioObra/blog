import react, { useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getCategories, getPosts } from "../../services";
import PostCard from "../../components/PostCard";

export default function PostPage({ posts, categories }) {
  const [filterPosts, setFilterPosts] = useState(posts);

  const handleTagFilter = (item) => {
    setTimeout(() => {
      if (item === "All") {
        setFilterPosts(posts);
      } else {
        setFilterPosts(
          posts.filter((post) => post.node.categories[0].name.includes(item))
        );
      }
    }, 0);
  };

  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
      <div className="container mx-auto pt-10 md:pt-32 px-5 lg:px-20">
        <h2 className="text-6xl  md:text-7xl xl:text-9xl font-semibold text-left dark:text-white  ">
          all<br></br> posts
        </h2>
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-5 mt-10">
          <h5
            className="dark:text-white cursor-pointer hover:text-blue-500 lg:text-xl hover:underline"
            onClick={() => handleTagFilter("All")}
          >
            All
          </h5>
          {categories.map((category, index) => (
            <h5
              className="dark:text-white cursor-pointer lg:text-xl hover:text-blue-500 hover:underline"
              onClick={() => handleTagFilter(category.name)}
              key={index}
            >
              {category.name}
            </h5>
          ))}
        </div>

        <div className="border-b-4 border-blue-500 my-5 md:my-10 "></div>

        <div className="lg:max-w-8xl flex flex-col items-top justify-between space-y-5 md:space-y-0 md:flex-row flex-wrap ">
          {posts &&
            filterPosts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 100,
  };
};
