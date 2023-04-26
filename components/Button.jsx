import Link from "next/link";
import React from "react";

const Button = ({ text, link, variant }) => {
  if (variant === "light") {
    return (
      <Link
        href={link}
        className={`text-white  bg-blue-700  py-5 px-7 font-bold border-4 border-blue-700   text-center hover:bg-transparent hover:text-blue-700  duration-150 w-full md:w-fit`}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        href={link}
        className={`text-white  bg-blue-500  py-5 px-7 font-bold border-4 border-blue-500   text-center hover:bg-transparent hover:text-blue-500  duration-150 w-full md:w-fit`}
      >
        {text}
      </Link>
    );
  }
};

export default Button;
