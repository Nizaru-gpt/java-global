import AboutHero from "../components/about/AboutHero";
import AboutJava from "../components/about/AboutJava";
import OurExpertise from "../components/about/OurExpertise";
import OurVision from "../components/about/OurVision";
import Stats from "../components/home/Stats";
import Clients from "../components/home/Clients";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutJava />
      <OurExpertise />
      <OurVision />
      <Stats />
      <Clients />
    </main>
  );
}
