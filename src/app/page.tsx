import Experience from "@/components/Experience";
import { DocsPageHeader } from "@/components/PageHeader";
import PostCard from "@/components/PostCard";

import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="-mt-20">
      {/* Shader Hero  */}
      {/* <Experience /> */}

      {/* Latest Posts */}
      <section className="container my-20">
        <DocsPageHeader heading="Latest posts" />

        {/* Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.slice(0, 6).map((post) => (
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
