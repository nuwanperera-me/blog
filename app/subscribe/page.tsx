// export default function SubscribePage() {
//   return (
//     <div className="w-full mt-32 flex flex-col items-center justify-center ">
//       <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-600 drop-shadow-lg text-center font-sans font-bold">
//         News Letter
//         </h1>
//         <h2 className="mt-4 text-2xl text-zinc-500 font-semibold">
//           Coming soon 🫡
//         </h2>
//     </div>
//   );
// }

"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import HoverBorderGradient from "@/components/ui/hover-border-gradient";

export default function SparklesPreview() {
  return (
    <>

    <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">

      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        NewsLetter
      </h1>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zinc-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zinc-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-zinc-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </>
  );
}
