import Head from "next/head";
import Image from "next/image";
import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn react testing",
  },
  {
    title: "React with tailwindcss",
    excerpt: "Learn react testing",
  },
  {
    title: "React Testing with next",
    excerpt: "Learn react testing",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>blog.obradovic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
