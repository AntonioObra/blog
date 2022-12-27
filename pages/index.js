import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Typewriter from "typewriter-effect";
import EditorsPicks from "../components/EditorsPicks";

import { getFeaturedPosts, getPosts } from "../services";
import LatestPosts from "../components/LatestPosts";
import PhotosCTA from "../components/PhotosCTA";
import Footer from "../components/Footer";

export default function Home({ posts, featuredPosts }) {
  return (
    <div className="h-screen">
      <Head>
        <title>blog.obradovic</title>
        <meta
          name="description"
          content="Blog made by Antonio Obradović, posts about web dev, reading and videogame breakdowns."
        />
        <meta
          property="og:description"
          content="Blog made by Antonio Obradović, posts about web dev, reading and videogame breakdowns."
        />
        <meta
          property="og:image"
          content="https://blog.obradovic.dev/images/blob6.svg"
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header */}
      <header className="container px-5 md:px-0  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 ">
        <div className=" mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-left z-20 text-white ">
            blog. <br></br> obradovic
            {/* <Typewriter
              options={{
                strings: ["obradovic", "dev", "photos", "reading"],
                autoStart: true,
                loop: true,
              }}
              style={{ color: "white" }}
            /> */}
          </h1>
          <div className="border-b-2 border-sky-200 my-5"></div>
          <p className="text-xl text-white">
            byte of the internet for my thoughts regarding my web development
            journey, reading and videogames
          </p>
          <div className="border-b-2 border-sky-200 my-5 mb-7"></div>
          <div className="flex flex-col space-x-0 space-y-5 items-start md:space-x-6 md:flex-row md:space-y-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/antonioobra8"
              className="text-black bg-sky-200 py-5 px-7 font-bold border-2 border-sky-200 text-center hover:bg-[#0f0f0f] hover:text-sky-200 duration-150 w-full md:w-fit"
            >
              follow me on twitter
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AntonioObra"
              className="text-white bg-sky-700 py-5 px-7 font-bold border-2 border-sky-700 text-center hover:bg-[#0f0f0f] hover:text-sky-700 duration-150  w-full md:w-fit"
            >
              checkout my github
            </a>
          </div>
        </div>
        <div className="">
          <Image
            width={500}
            height={500}
            alt="blob header image"
            src="/images/blob6.svg"
            className="hidden lg:block lg:w-[500px] lg:h-[500px]  "
          />
        </div>
      </header>

      {/* Latest Posts */}
      <LatestPosts posts={posts} />

      {/* Intersection */}

      <div className=" container mx-auto mt-32 px-5 lg:px-20 ">
        <div className="border-b-2 border-sky-200 my-10"></div>
        <h2 className="text-5xl text-left md:text-7xl xl:text-8xl font-bold   outline-title">
          <Typewriter
            options={{
              strings: [
                "you could be good today, but instead you choose tomorrow",
                "the person who does wrong, does wrong to themselves",
                "better to trip with the feet than with the tounge",
                "to stop talking about what the good man is like, and just be one",
              ],
              autoStart: true,
              loop: true,
            }}
            style={{ color: "white" }}
          />
        </h2>
        <div className="border-b-2 border-sky-200 my-10"></div>
      </div>

      {/* Editor Picks */}
      <EditorsPicks posts={featuredPosts} />

      {/* Photos CTA */}
      <PhotosCTA />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts,
      featuredPosts,
    },
  };
};
