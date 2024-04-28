import { cn } from "@/lib/utils";
import Link from "next/link";

type NavBarProps = {
  className?: string;
};

export default function NavBar(props: NavBarProps) {
  const { className } = props;
  return (
    <nav className={cn("w-full p-4 fixed", className)}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="font-semibold bg-clip-text text-transparent text-2xl bg-gradient-to-t from-zinc-700 to-zinc-400">Aughh</p>
        </Link>
        <Link href="/subscribe" className="py-2 px-4 border bg-zinc-950 border-zinc-800 transition-all duration-300 hover:bg-zinc-800 rounded-full font-medium text-sm text-zinc-200">
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
