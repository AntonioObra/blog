import ViewAll from "@/components/ViewAll";
import PostCard from "@/components/PostCard";
import Experience from "@/components/Experience";
import { PageSection } from "@/components/PageHeader";

import { allBlogs } from "contentlayer/generated";

import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";

export default function Home() {
  // * Sort posts by date
  allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <main className="-mt-20">
      {/* Shader Hero  */}
      <Experience />

      {/* Latest Posts */}
      <section className="container my-20">
        <PageSection heading="Featured Posts" orientation="right" border={false} className="mb-12" text="A list of my featured posts that are must read" />

        {/* Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.slice(0, 6).map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              image={post.image}
              tag={post.tag}
              slug={post.slugAsParams}
              date={formatDate(post.date)}
            />
          ))}
        </div>

        {/* View All Posts */}
        <ViewAll text="View All Posts" url="/posts" />
      </section>
    </main>
  );
}
