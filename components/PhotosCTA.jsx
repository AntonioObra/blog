import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotosCTA = () => {
  return (
    <div className="container mx-auto mt-32 pb-32 px-5 lg:px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-right  dark:text-white  ">
        photography<br></br> shots
      </h2>

      <div className="border-b-4 border-sky-600 dark:border-sky-200 my-16 "></div>

      <div className="flex flex-col lg:flex-row items-top justify-between">
        <div className="relative flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:w-2/3 ">
          <Image
            src="/images/IMG_1395.JPG"
            className=" w-[400px] h-[500px] object-cover"
            width={1500}
            height={1500}
            alt="Image IMG_1395 taken in the hospital in Zagreb"
          />
          <Image
            src="/images/IMG_1492.JPG"
            className=" lg:absolute lg:top-20 lg:left-72 w-[500px] h-[500px] object-cover"
            width={1500}
            height={1500}
            alt="Image IMG_1492 taken in the hospital in Zagreb"
          />
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-16 lg:w-1/3">
          <h4 className="text-2xl text-center lg:text-3xl dark:text-white lg:text-right">
            one of my passions is photography and the beauty you can capture
            with it
          </h4>

          <Link
            href="/photos"
            className="text-white dark:text-black bg-sky-600 dark:bg-sky-200 py-5 px-7 font-bold border-4 border-sky-600 dark:border-sky-200 text-center hover:bg-transparent hover:text-sky-600 dark:hover:text-sky-200 duration-150 w-full md:w-fit"
          >
            view my gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotosCTA;
