"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.04 || scrollYProgress.get() === 1) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "w-full p-4 fixed backdrop-blur-sm border-b border-zinc-800",
          className
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-end gap-1">
              <Image
                src="https://nuwanperera-me.vercel.app/profile-photo.jpeg"
                width={40}
                height={40}
                alt="Home"
                className="rounded-full border border-zinc-800 saturate-0"
              />
              <p className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-zinc-700 to-zinc-400 select-none">.blog()</p>
            </div>
          </Link>
          <Link
            href="/subscribe"
            className="py-2 px-4 border bg-zinc-950 border-zinc-800 transition-all duration-300 hover:bg-zinc-800 active:bg-zinc-900 rounded-full font-medium text-sm text-zinc-200"
          >
            Subscribe
          </Link>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
