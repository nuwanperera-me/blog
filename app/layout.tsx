import "@/styles/globals.css";

import React from "react";

import { cn } from "@/lib/utils";
import { geist } from "@/styles/fonts";

import type { Metadata } from "next";

import { FloatingNav } from "@/components/nav-bar";
import { SparklesCore } from "@/components/ui/sparkles";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Aughh",
  description: "Staically generated blog with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-geist antialiased",
          "bg-zinc-950",
          "min-h-screen",
          geist.variable,
          "back"
        )}
      >
        <main className="z-10">
          <FloatingNav className="z-30" />
          <div className=" relative w-full h-auto min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 ">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.4}
                maxSize={1.4}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#3f3f46"
              />
            </div>
            <div className="z-20 pt-[70px] p-4 h-full min-h-newscreen">
              {children}
            </div>
            <Footer className="z-40" />
          </div>
        </main>
      </body>
    </html>
  );
}
