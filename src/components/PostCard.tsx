import Link from "next/link";
import Image from "next/image";

import { Icons } from "@/components/Icons";
import { MotionDiv } from "@/components/MotionDiv";
import { variantsBottom } from "@/lib/motion";

type PostCardProps = {
  image: string;
  title: string;
  tag: string;
  slug: string;
  isPriority?: boolean;
  date: string;
};

const PostCard = ({
  image,
  title,
  tag,
  slug,
  isPriority,
  date
}: PostCardProps) => {
  return (
    <MotionDiv
      variants={variantsBottom}
      initial="hidden"
      transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group"
    >
      <Link href={`/posts/${slug}`}>
        <div className="overflow-hidden rounded-xl group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-300 border-2 group-hover:border-primary">
          <Image
            src={`/images/posts/${image}`}
            alt={title}
            width={1920}
            height={919}
            className="object-cover object-center w-full aspect-[4/3] group-hover:scale-105 transition-all duration-300"
            priority={isPriority ? true : false}
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <hgroup className="group-hover:pl-6 transition-all duration-300">
            <p className="uppercase text-sm text-primary">{tag}</p>
            <h1 className="text-xl">{title}</h1>
            <p className="text-sm text-muted-foreground mt-1">{date}</p>
          </hgroup>

          <div className="opacity-0 -translate-x-12  group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <Icons.arrowRight className="w-6 h-6 text-primary" />
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default PostCard;
