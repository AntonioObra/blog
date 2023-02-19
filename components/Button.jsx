import Link from "next/link";
import React from "react";

const Button = ({ text, link, variant }) => {
  if (variant === "light") {
    return (
      <Link
        href={link}
        className={`text-white  bg-indigo-600  py-5 px-7 font-bold border-4 border-indigo-600   text-center hover:bg-transparent hover:text-indigo-600  duration-150 w-full md:w-fit`}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        href={link}
        className={`text-white  bg-indigo-400  py-5 px-7 font-bold border-4 border-indigo-400   text-center hover:bg-transparent hover:text-indigo-400  duration-150 w-full md:w-fit`}
      >
        {text}
      </Link>
    );
  }
};

export default Button;
