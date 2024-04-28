import "@/styles/globals.css";

import React from "react";

import { cn } from "@/lib/utils";
import { geist } from "@/styles/fonts";

import type { Metadata } from "next";

import NavBar from "@/components/nav-bar";

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
      <body className={cn("font-geist antialiased", "bg-zinc-900", geist.variable, "back")}>
        <main className="">
          <NavBar />
          <div className="p-4">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
