import { DocsPageHeader } from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import { allBlogs } from "contentlayer/generated";

export default function PostsPage() {
  return (
    <main className="container py-16 md:py-24 lg:py-32">
      {/* All */}
      <section>
        <DocsPageHeader
          heading="All Posts"
          text="Filter through posts by categories"
        />

        {/* Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              image={post.image}
              description={post.description}
              tag={post.tag}
              slug={post.slugAsParams}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
