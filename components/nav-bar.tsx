import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 fixed ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-semibold text-zinc-50">Aughh</p>
        </Link>
        <Link href="/subscribe" className="py-2 px-4 border border-zinc-800 hover:bg-zinc-800 rounded-full font-medium text-sm text-zinc-200">
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
