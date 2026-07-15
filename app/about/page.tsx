import AboutHero from "@/components/AboutHero";
import AboutProblem from "@/components/AboutProblem";
import AboutWhatWeDo from "@/components/AboutWhatWeDo";
import AboutWhyItWorks from "@/components/AboutWhyItWorks";
import AboutCTA from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#080227]">
      <AboutHero />
      <AboutProblem />
      <AboutWhatWeDo />
      <AboutWhyItWorks />
      <AboutCTA />
    </main>
  );
}
