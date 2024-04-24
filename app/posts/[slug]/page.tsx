import React from "react";

import { notFound } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import MDXContent from "@/components/mdx-content";

import { getPostBySlug, getPosts } from "@/lib/api";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import autherImage from "@/public/a.png";
import ShareButtons from "@/components/share-buttons";

const APP_DOMAIN = "https://augh-blog.vercel.app";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto flex flex-col mt-6 ">
      <Link className="mt-6 mb-6" href="/">
        <span className="py-2 px-4 pr-6 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors duration-200 inline-flex items-center text-sm text-zinc-200">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to blog
        </span>
      </Link>
      <div className="relative border border-zinc-800 rounded-2xl">
        <Image
          src={post.cover}
          width={900}
          height={300}
          alt="Cover image"
          className="rounded-t-2xl"
        />
        <Image
          src={autherImage}
          width={40}
          height={40}
          alt={""}
          className="absolute top-0 right-0 rounded-md m-4 border border-zinc-900"
        />
        <div className="p-4">
          <h1 className="text-4xl text-zinc-50 font-semibold">{post.title}</h1>
          <p className="text-sm text-zinc-200 mt-4">
            {post.time} • {post.date}
          </p>
          <div className="">
          <ShareButtons url={`${APP_DOMAIN}/posts/${params.slug}`} title={post.title} />
        </div>
          <article className="max-w-none prose prose-invert prose-img:rounded-2xl prose-md mt-6 mx-auto">
            <MDXContent source={post.content} />
          </article>
        </div>

      </div>
    </div>
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return {
    title: `${post.title} | someblog`,
  };
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
