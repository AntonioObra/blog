import PostCard2 from "./PostCard2";

const LatestPosts = ({ posts }) => {
  return (
    <div className="container mx-auto mt-48 px-5 lg:px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-left  dark:text-white  ">
        editors<br></br> picks
      </h2>

      <div className="border-b-4 border-blue-500 my-5 lg:my-16 "></div>

      <div className="  max-w-8xl  flex flex-col items-top justify-between space-y-5 md:space-y-0  md:flex-row flex-wrap md:space-x-2">
        {posts &&
          posts.map((post, index) => <PostCard2 key={index} post={post} />)}
      </div>
    </div>
  );
};

export default LatestPosts;
