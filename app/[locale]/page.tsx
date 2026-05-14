import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import Support from "@/components/Support";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Pricing />
        <Security />
        <Support />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
