import PostCard from "./PostCard";

const LatestPosts = ({ posts }) => {
  const newPosts = posts?.slice(0, 6);

  return (
    <div className="container mx-auto mt-32 px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-right  text-white  ">
        recent<br></br> posts
      </h2>

      <div className="border-b-2 border-sky-200 my-16 "></div>

      <div className="  lg:max-w-8xl  flex flex-col items-top justify-between space-y-5 md:space-y-0  md:flex-row flex-wrap ">
        {newPosts &&
          newPosts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
      </div>
    </div>
  );
};

export default LatestPosts;
