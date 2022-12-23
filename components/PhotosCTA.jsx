import Link from "next/link";
import React from "react";

const PhotosCTA = () => {
  return (
    <div className="container mx-auto mt-32 pb-32 px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-right  text-white  ">
        photography<br></br> shots
      </h2>

      <div className="border-b-2 border-sky-200 my-16 "></div>

      <div className="flex flex-col lg:flex-row items-top justify-between">
        <div className="relative flex flex-col lg:flex-row lg:w-2/3 ">
          <img
            src="https://github.com/AntonioObra/blog/blob/bc442534632f42395ce1fd8a08e4cf0059949d9c/public/images/IMG_1395.JPG?raw=true"
            className=" w-[400px] h-[500px] object-cover"
          />
          <img
            src="https://github.com/AntonioObra/blog/blob/bc442534632f42395ce1fd8a08e4cf0059949d9c/public/images/IMG_1492.JPG?raw=true"
            className=" absolute top-20 left-72 w-[500px] h-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-16 lg:w-1/3">
          <h4 className="text-3xl text-white text-right">
            one of my passions is photography and the beauty you can capture
            with it
          </h4>

          <Link
            href="/photos"
            className="text-black bg-sky-200 py-5 px-7 font-bold border-2 border-sky-200 text-center hover:bg-[#0f0f0f] hover:text-sky-200 duration-150"
          >
            view my gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotosCTA;
