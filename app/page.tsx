import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0c0630]">
      <HeroSection />
      <InfoSection />
    </main>
  );
}
