import Footer from "@/components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-grow flex flex-col w-full">
        {children}
      </div>
      <Footer />
    </>
  );
}
