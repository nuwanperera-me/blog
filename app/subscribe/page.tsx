"use client";
import React from "react";

export default function SparklesPreview() {
  return (
    <div className="">
      <div className="mt-32 p-6 rounded-2xl ">
        <h1 className="text-center font-bold drop-shadow-sm bg-clip-text text-transparent text-5xl md:text-8xl bg-gradient-to-t from-zinc-700 to-zinc-400">
          NewsLetter
        </h1>
        <div className="relative w-[20rem] md:w-[40rem]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zinc-500 to-transparent h-[2px] md:w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zinc-500 to-transparent h-px md:w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent h-[5px] md:w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent h-px md:w-1/4" />
        </div>
        <p className="text-center text-zinc-600 font-semibold text-lg mt-6">
          Coming soon!
        </p>
      </div>
    </div>
  );
}
