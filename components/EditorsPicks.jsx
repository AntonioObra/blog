import PostCard2 from "./PostCard2";

const LatestPosts = ({ posts }) => {
  return (
    <div className="container mx-auto mt-32 px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-left  text-white  ">
        editors<br></br> picks
      </h2>
      {/* fix */}
      <div className="border-b-2 border-sky-200 my-16 "></div>

      <div className="  lg:max-w-8xl  flex flex-col items-top justify-between space-y-5 md:space-y-0  md:flex-row flex-wrap ">
        {posts &&
          posts.map((post, index) => <PostCard2 key={index} post={post} />)}
      </div>
    </div>
  );
};

export default LatestPosts;
