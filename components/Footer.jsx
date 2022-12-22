import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto mt-48 pb-32 px-20">
      <div className="border-b-2 border-sky-200 my-16 "></div>
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-left  text-white  ">
        made by antonio obradovic
      </h2>

      <div className="flex items-start space-x-6 mt-12">
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
  );
};

export default Footer;
