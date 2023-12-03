import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  image: string;
  tag: string;
  slug: string;
};

const PostCard = ({ title, description, image, tag, slug }: PostCardProps) => {
  return (
    <article className="group">
      <Link href={`/posts/${slug}`}>
        <div className="border-2 border-secondary rounded-xl overflow-hidden group-hover:border-primary group-hover:shadow-md group-hover:shadow-primary/50 duration-300 transition-all">
          <Image
            src={`/images/posts/${image}`}
            alt={title}
            width="500"
            height="500"
            className="group-hover:scale-105 duration-300 transition-all w-full h-[300px] object-cover"
          />
        </div>
        <div className="mt-2">
          <span className="text-sm text-primary uppercase">{tag}</span>
          <h1 className="my-2 text-3xl group-hover:underline underline-offset-2 decoration-primary">
            {title}
          </h1>
          <p className="text-bas text-muted-foreground">{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
