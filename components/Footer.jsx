import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="container mx-auto pb-16 md:mt-48 md:pb-32  px-5 lg:px-20">
      <div className="border-b-4 border-indigo-400  my-16 "></div>
      <h2 className="text-4xl md:text-7xl xl:text-8xl font-semibold text-center md:text-left  dark:text-white  ">
        made by antonio obradovic
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-6 mt-12">
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
  );
};

export default Footer;
