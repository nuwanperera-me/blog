import React from "react";

import Link from "next/link";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-zinc-50 text-4xl font-semibold">Home Page</h1>
      <Link href="/posts">
        <p className="inline-flex gap-2 pt-4 underline text-zinc-50 text-md ">Go posts <ArrowUpRightIcon className="" width="0.87rem" /></p>
      </Link>
    </div>
  );
}
