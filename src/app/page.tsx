import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Pricing />
      <FAQ />
      <ContactFooter />
    </main>
  );
}
