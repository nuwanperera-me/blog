import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="inline-flex items-center">
        <h1 className="bg-clip-text bg-gradient-to-t from-zinc-700 to-zinc-400 text-transparent text-4xl font-semibold">
          Plyn htt ynn!
        </h1>
        <span className="pl-2 text-4xl">😾</span>
      </div>
      <p className="text-lg max-w-96 text-center text-zinc-600 pt-4">
        The page you're looking for doesn't exist. Please check the URL or click
        the button below to go back to the homepage.
      </p>
    </div>
  );
}
