import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const PhotosCTA = () => {
  return (
    <div className="container mx-auto mt-32 pb-32 px-5 lg:px-20">
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-right  dark:text-white  ">
        photography<br></br> shots
      </h2>

      <div className="border-b-4 border-blue-500 my-16 "></div>

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

          <Button link="/photos" text="view my gallery" variant="dark" />
        </div>
      </div>
    </div>
  );
};

export default PhotosCTA;
