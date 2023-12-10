import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { env } from "process";

import { allBlogs } from "contentlayer/generated";

import { Mdx } from "@/components/Mdx";
import ViewAll from "@/components/ViewAll";
import { Icons } from "@/components/Icons";
import PostCard from "@/components/PostCard";
import { PageSection } from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";

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

const BackToPosts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
      <Link
        href="/posts"
        className={buttonVariants({ variant: "link" })}
      >
        <Icons.arrowLeft className="mr-2 w-4 h-4" />
        Back to Posts
      </Link>

      <div className="bg-secondary w-full h-[2px] "></div>
    </div>
  )
}

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = params;

  const post = await getPostFromParams(slug);
  const otherPosts = allBlogs.filter((post) => post.slugAsParams !== slug);

  return (
    <main className="py-16 md:py-24 lg:py-32">
      <section className="container mb-20">
        <BackToPosts />

        <PageSection
          heading={post.title}
          text={post.description}
          border={false}
          className="mb-12"
          orientation="left"
        />

        <div className="overflow-hidden rounded-xl my-16 shadow-xl md:shadow-2xl shadow-primary/50 md:shadow-primary border-2 border-primary">
          <Image
            src={`/images/posts/${post.image}`}
            alt={post.title}
            width={1920}
            height={919}
            priority
            className="object-cover w-full min-h-[400px]"
          />
        </div>

        <div className="mb-16 pt-10 max-w-3xl mx-auto">
          <Mdx code={post.body.code} />
        </div>

        <BackToPosts />

      </section>

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="container">
          <PageSection
            heading="Other posts"
            text="A list of my other posts"
            border={false}
            className="mb-12"
            orientation="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
            {otherPosts.slice(0, 2).map((post) => (
              <PostCard
                key={post.title}
                title={post.title}
                image={post.image}
                tag={post.tag}
                slug={post.slugAsParams}
              />
            ))}
          </div>

          <ViewAll text="View All Posts" url="/posts" />
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
