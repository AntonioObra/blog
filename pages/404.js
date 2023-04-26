import React from "react";
import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
      <section className="container pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 ">
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-left z-20 dark:text-white md:h-46">
            404
          </h1>
          <div className="border-b-4 border-blue-500 my-5"></div>
          <p className="text-xl dark:text-white text-left ">
            this page doesn&#39;t exist
          </p>
          <div className="border-b-4 border-blue-500 my-5 mb-7"></div>
          <div className="flex items-end float-right space-x-6">
            <Button text="go back" link="/" variant="dark" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
