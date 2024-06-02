import React from "react";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

export default function Footer(props: FooterProps) {
  const { className } = props;
  return(
    <footer className="w-full mt-4">
      <div className={cn("w-full h-32 flex flex-col-reverse justify-center items-center gap-4 mx-auto backdrop-blur-sm p-4", className)}>
        <p className="text-center text-sm text-zinc-200 ">
          &copy; {new Date().getFullYear()} Aughh. All rights reserved.
        </p>
        <p className="text-zinc-50">Made by <a href="https://www.nuwanperera.me/">Nuwan Perera</a></p>
      </div>
    </footer>
  );
}
