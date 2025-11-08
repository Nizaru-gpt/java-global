import Hero from "../components/home/Hero";
import IntroBlocks from "../components/home/IntroBlocks";
import Services from "../components/home/Services";
import WhyUs from "../components/home/WhyUs";
import Stats from "../components/home/Stats";
import Clients from "../components/home/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroBlocks />
      <Services />
      <WhyUs />
      <Stats />
      <Clients />
    </main>
  );
}
