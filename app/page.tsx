import { Header } from "@/components/Header";
import HeroSection from "@/components/sections/hero-section";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
      </div>
    </main>
  );
}
