"use client";

import { useEffect, useState } from "react";

import PostCard from "@/components/PostCard";
import { allBlogs } from "contentlayer/generated";
import { PageHeader } from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";

export default function PostsPage() {
  // * Get all unique filters
  const allBlogsFilters = allBlogs.map((post) => post.tag);
  const uniqueFilters = [...new Set(allBlogsFilters)];

  // * Set State
  const [activeFilter, setActiveFilter] = useState("All Posts");
  const [filteredPosts, setFilteredPosts] = useState(allBlogs);

  // * Filter posts based on active filter
  useEffect(() => {
    if (activeFilter !== "All Posts") {
      setFilteredPosts(allBlogs.filter((post) => post.tag === activeFilter));
    } else {
      setFilteredPosts(allBlogs);
    }
  }, [activeFilter])

  return (
    <main className="container py-16 md:py-20">
      <PageHeader
        heading="All Posts"
        text="Filter through posts by categories"
        className="mb-12"
      />

      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className={buttonVariants({ variant: activeFilter === "All Posts" ? "default" : "outline", size: "default" })} onClick={() => setActiveFilter("All Posts")}>All Posts</button>

        {uniqueFilters.map((filter) => (
          <button
            key={filter}
            className={buttonVariants({ variant: activeFilter === filter ? "default" : "outline", size: "default" })}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            image={post.image}
            tag={post.tag}
            slug={post.slugAsParams}
          />
        ))}
      </div>
    </main>
  );
}
