import React from "react";

import Link from "next/link";

import { getPosts } from "@/lib/api";

import BlogCard from "@/components/blogcard";

export default async function Page() {
  const posts = getPosts();

  return (

      <div className="max-w-2xl mx-auto mt-16">
        <div className="mt-6 flex flex-col space-y-8">
          <BlogCard />
        </div>

    </div>
  );
}
