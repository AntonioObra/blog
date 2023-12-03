import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mb-8 md:mb-16">
      <div className="p-6 md:p-20 rounded-xl text-black border-2 border-secondary shadow-2xl shadow-secondary hover:shadow-primary transition-all duration-300 hover:border-primary ">
        <h1 className="text-3xl lg:text-8xl font-semibold lg:leading-snug min-w-full p-2  text-center text-transparent  bg-clip-text bg-gradient-to-b from-secondary via-blue-400  to-primary">
          Created by<br></br>Antonio Obradović
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="https://github.com/AntonioObra"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
            })}
            title="GitHub"
          >
            <Icons.github className="h-5 w-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/antonio-obradovi%C4%87-708362193/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
            })}
            title="LinkedIn"
          >
            <Icons.linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
