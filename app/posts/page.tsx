import React from "react";

import BlogCard from "@/components/blogcard";

export default async function Page() {
  return (
    <div className="max-w-2xl mx-auto mt-16 scroll-smooth ">
      <div className="mt-6 flex flex-col space-y-8">
        <BlogCard />
      </div>
    </div>
  );
}
