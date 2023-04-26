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
import Button from "../components/Button";

export default function Home({ posts, featuredPosts }) {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
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
          content="https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/carrot-635578.jpg"
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="container px-5 md:px-0  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 ">
        <div className=" mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-left z-20 dark:text-white ">
            blog. <br></br> obradovic
          </h1>
          <div className="border-b-4 border-blue-500 my-5"></div>
          <p className="text-xl dark:text-white">
            byte of the internet for my thoughts regarding my web development
            journey, reading and videogames
          </p>
          <div className="border-b-4 border-blue-500 my-5 mb-7"></div>
          <div className="flex flex-col space-x-0 space-y-5 items-start md:space-x-6 md:flex-row md:space-y-0">
            <Button
              text="follow me on twitter"
              link="https://twitter.com/antonioobra8"
              variant="light"
            />
            <Button
              text="checkout my github"
              link="https://github.com/AntonioObra"
              variant="dark"
            />
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
        <div className="border-b-4 border-blue-500 my-10"></div>
        <h2 className="text-5xl text-left md:text-7xl xl:text-8xl font-bold   outline-title text-transparent">
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
          />
        </h2>
        <div className="border-b-4 border-blue-500 my-10"></div>
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
    revalidate: 100,
  };
};
