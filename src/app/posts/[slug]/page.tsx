import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { env } from "process";

import { allBlogs } from "contentlayer/generated";

import ViewAll from "@/components/ViewAll";
import { Icons } from "@/components/Icons";
import PostCard from "@/components/PostCard";
import { buttonVariants } from "@/components/ui/button";
import { Mdx } from "@/components/Mdx";
import { DocsPageHeader } from "@/components/PageHeader";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(slug: string) {
  const post = allBlogs.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return post;
}

// * Generate Metadata for the post
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug);

  if (!post) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | blog.obradovic`,
      description: post.description,
      type: "article",
      url: `${url}/posts/${post.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = params;

  const post = await getPostFromParams(slug);
  const otherPosts = allBlogs.filter((post) => post.slugAsParams !== slug);

  return (
    <main className="py-16 md:py-24 lg:py-32">
      <section className="container mb-20">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/posts" className={buttonVariants({ variant: "link" })}>
            <Icons.arrowLeft className="mr-2 w-4 h-4" />
            Back to Posts
          </Link>
          <div className="bg-secondary w-full h-[1px] "></div>
          {post.github && (
            <Link
              href={post.github}
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
            >
              <Icons.github className="mr-2 w-4 h-4" />
              View on GitHub
            </Link>
          )}

          {post.url && (
            <Link
              href={post?.url}
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              <Icons.externalLink className="mr-2 w-4 h-4" />
              Preview post
            </Link>
          )}
        </div>

        <hgroup>
          <h1 className="text-7xl font-heading ">{post.title}</h1>
          <p className="text-xl mt-4 text-muted-foreground">
            {post.description}
          </p>
        </hgroup>

        <div className="overflow-hidden rounded-xl my-16 shadow-2xl shadow-primary border-2 border-primary">
          <Image
            src={`/images/posts/${post.image}`}
            alt={post.title}
            width={1920}
            height={919}
            priority
          />
        </div>

        <div className="mb-16 pt-10 max-w-3xl mx-auto">
          <DocsPageHeader heading="About the post" />
          <Mdx code={post.body.code} />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/posts" className={buttonVariants({ variant: "link" })}>
            <Icons.arrowLeft className="mr-2 w-4 h-4" />
            Back to Posts
          </Link>
          <div className="bg-secondary w-full h-[1px] "></div>
          {post.github && (
            <Link
              href={post.github}
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
            >
              <Icons.github className="mr-2 w-4 h-4" />
              View on GitHub
            </Link>
          )}
          {post.url && (
            <Link
              href={post?.url}
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              <Icons.externalLink className="mr-2 w-4 h-4" />
              Preview post
            </Link>
          )}
        </div>
      </section>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="container">
          <h1 className="text-3xl">Other Posts</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
            {otherPosts.slice(0, 2).map((post) => (
              <PostCard
                key={post.title}
                title={post.title}
                image={post.image}
                tag={post.tag}
                description={post.description}
                slug={post.slugAsParams}
              />
            ))}
          </div>

          <ViewAll text="View All Posts" url="/Posts" />
        </section>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const Posts = allBlogs;

  return Posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}
