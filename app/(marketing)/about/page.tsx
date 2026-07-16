import AboutHero from "@/components/AboutHero";
import AboutWhatWeDo from "@/components/AboutWhatWeDo";
import AboutHowWeDo from "@/components/AboutHowWeDo";
import AboutWhyItWorks from "@/components/AboutWhyItWorks";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0b0742]">
      <AboutHero />
      <AboutWhatWeDo />
      <AboutHowWeDo />
      <AboutWhyItWorks />
      <AboutCTA />
    </main>
  );
}
