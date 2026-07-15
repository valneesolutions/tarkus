import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 md:px-16 md:py-8">
      {/* Logo */}
      <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
        <Image
          src="/logo.svg"
          alt="Tarkus Logo"
          width={180}
          height={180}
          className="h-20 w-auto md:h-24"
          priority
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6 md:gap-10">
        <Link
          href="/contact-us"
          className="text-white hover:text-zinc-300 text-sm md:text-base font-medium transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-zinc-300 text-sm md:text-base font-medium transition-colors"
        >
          Company
        </Link>
        <Link
          href="/contact-us"
          className="bg-white text-zinc-950 px-6 py-2.5 rounded-full hover:bg-zinc-100 font-semibold text-sm md:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          Talk to us
        </Link>
      </div>
    </nav>
  );
}
