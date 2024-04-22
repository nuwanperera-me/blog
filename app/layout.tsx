import "@/styles/globals.css";

import React from "react";

import { cn } from "@/lib/utils";
import { geist } from "@/styles/fonts";

import type { Metadata } from "next";
import Link from "next/link";

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
      <body className={cn("font-geist antialiased", "bg-zinc-900", geist.variable)}>
        <main className="px-4 py-4">
          <p className="text-2xl font-semibold text-zinc-50">
            <Link href={"/"}>
              Aughh
            </Link>
          </p>
          {children}
        </main>
      </body>
    </html>
  );
}
