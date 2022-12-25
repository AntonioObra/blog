import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto pb-16 md:mt-48 md:pb-32  px-5 lg:px-20">
      <div className="border-b-2 border-sky-200 my-16 "></div>
      <h2 className="text-4xl md:text-7xl xl:text-8xl font-semibold text-center md:text-left  text-white  ">
        made by antonio obradovic
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-6 mt-12">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/antonioobra8"
          className="text-black bg-sky-200 py-5 px-7 font-bold border-2 border-sky-200 text-center hover:bg-[#0f0f0f] hover:text-sky-200 duration-150  w-full md:w-fit "
        >
          follow me on twitter
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AntonioObra"
          className="text-white bg-sky-700 py-5 px-7 font-bold border-2 border-sky-700 text-center hover:bg-[#0f0f0f] hover:text-sky-700 duration-150 w-full md:w-fit"
        >
          checkout my github
        </a>
      </div>
    </div>
  );
};

export default Footer;
