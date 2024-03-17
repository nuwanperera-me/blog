import React from "react";

import Link from "next/link";
import Image from "next/image";

import { getPosts } from "@/lib/api";

import autherImage from "@/public/a.png";

export default function BlogCard() {
  const posts = getPosts();
  return (
    <>
      {!!posts &&
        posts.map((post) => (
          <div
            key={post.slug}
            className="border border-zinc-700 hover:bg-zinc-800 transition-all duration-200 rounded-2xl"
          >
            <Link
              className="text-xl text-zinc-50 font-medium"
              href={`/posts/${post.slug}`}
            >
              <Image
                src={post.cover}
                alt={post.title}
                height={300}
                width={900}
                className="rounded-t-2xl"
              />
              <div className="p-6">
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <p className="text-sm text-zinc-400 mt-4">{post.excerpt}</p>
                <div className="mt-4 flex items-center">
                  <Image
                    src={autherImage}
                    width={40}
                    height={40} 
                    alt={""}  
                    className="rounded-md mx-4"                />
                  <p className="text-sm text-zinc-400">
                    {post.date} <span className="px-2 text-zinc-600">•</span>{" "}
                    {post.time}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
