import Evolution from "@/components/evolution";
import GlobalReach from "@/components/global-reach";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Evolution />
      <Services />
      <GlobalReach />
      <Footer />
    </main>
  );
}
