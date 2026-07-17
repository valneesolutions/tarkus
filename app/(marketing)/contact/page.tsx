import { Suspense } from "react";
import ContactHero from "@/components/ContactHero";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0b0742]">
      <Suspense fallback={<div className="min-h-screen bg-[#0b0742]" />}>
        <ContactHero />
      </Suspense>
    </main>
  );
}
