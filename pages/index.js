import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen  bg-[#0f0f0f] ">
      <Head>
        <title>blog.obradovic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header */}
      <header className="container  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 ">
        <div className="w-2/3 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-left z-20 text-white ">
            blog.<br></br>{" "}
            {/* <span className="decoration-8 underline decoration-sky-300 "> */}{" "}
            obradovic
            {/* </span> */}
          </h1>
          <div className="border-b-2 border-sky-200 my-5"></div>
          <p className="text-xl text-white">
            byte of the internet for my thoughts regarding my web development
            journey, reading and videogames
          </p>
          <div className="border-b-2 border-sky-200 my-5 mb-7"></div>
          <div className="flex items-start space-x-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/antonioobra8"
              className="text-black bg-sky-200 py-5 px-7 font-bold border-2 border-sky-200 text-center hover:bg-[#0f0f0f] hover:text-sky-200 duration-150 "
            >
              follow me on twitter
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AntonioObra"
              className="text-white bg-sky-700 py-5 px-7 font-bold border-2 border-sky-700 text-center hover:bg-[#0f0f0f] hover:text-sky-700 duration-150 "
            >
              checkout my github
            </a>
          </div>
        </div>
        <div className="">
          <img
            src="/images/blob3.svg"
            className="hidden lg:block md:w-96 md:h-96 "
          />
        </div>
      </header>
    </div>
  );
}
