"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

      if (scrollYProgress.get() < 0.05 || scrollYProgress.get() === 1) {
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
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn("w-full p-4 fixed", className)}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <p className="font-semibold bg-clip-text text-transparent text-2xl bg-gradient-to-t from-zinc-700 to-zinc-400">
              Aughh
            </p>
          </Link>
          <Link
            href="/subscribe"
            className="py-2 px-4 border bg-zinc-950 border-zinc-800 transition-all duration-300 hover:bg-zinc-800 rounded-full font-medium text-sm text-zinc-200"
          >
            Subscribe
          </Link>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
