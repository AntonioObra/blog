import Link from "next/link";

import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";

type ViewAllProps = {
  text: string;
  url: string;
};

const ViewAll = ({ text, url }: ViewAllProps) => {
  return (
    <div className="flex flex-row-reverse items-center gap-4 mt-12 ">
      <Link
        href={url}
        className={buttonVariants({
          variant: "outline",
          className:
            "hover:text-primary hover:bg-secondary duration-300 transition-all peer",
        })}
      >
        {text} <Icons.arrowRight className="ml-4 h-4 w-4" />
      </Link>
      <div className="bg-secondary w-full h-[2px]  peer-hover:bg-primary transition-all duration-300"></div>
    </div>
  );
};

export default ViewAll;
