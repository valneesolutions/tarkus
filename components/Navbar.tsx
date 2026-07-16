import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const isLight = theme === "light";

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
          style={
            isLight
              ? {
                  // CSS filter to color the white logo to rich navy blue (#0b0742)
                  filter: "brightness(0) saturate(100%) invert(10%) sepia(85%) saturate(4975%) hue-rotate(242deg) brightness(62%) contrast(124%)"
                }
              : undefined
          }
          priority
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6 md:gap-10">
        <Link
          href="/contact-us"
          className={`text-sm md:text-base font-medium transition-colors ${
            isLight ? "text-[#0b0742] hover:text-opacity-80" : "text-white hover:text-zinc-300"
          }`}
        >
          Contact Us
        </Link>
        <Link
          href="/about"
          className={`text-sm md:text-base font-medium transition-colors ${
            isLight ? "text-[#0b0742] hover:text-opacity-80" : "text-white hover:text-zinc-300"
          }`}
        >
          Company
        </Link>
        <Link
          href="/contact-us"
          className={`px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md ${
            isLight
              ? "bg-[#0b0742] text-white hover:bg-opacity-90"
              : "bg-white text-zinc-950 hover:bg-zinc-100"
          }`}
        >
          Talk to us
        </Link>
      </div>
    </nav>
  );
}
