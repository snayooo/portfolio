import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-fit px-4 h-12 flex flex-row justify-between items-center gap-4 text-lg font-semibold z-50 bg-white/30 backdrop-blur-sm border-[1.5px] border-black rounded-full p-2">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/#about" className="hover:underline">About</Link>
      <Link href="/#portfolio" className="hover:underline">Portfolio</Link>
      <Link href="/#contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
