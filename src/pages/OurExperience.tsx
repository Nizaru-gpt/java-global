import PageHero from "../components/experience/PageHero";
import Mission from "../components/experience/Mission";
import Services from "../components/home/Services";  // full-width section
import Projects from "../components/experience/Projects";
import Team from "../components/experience/Team";
import Clients from "../components/home/Clients";

export default function OurExperience() {
  return (
    <main>
      {/* HERO  */}
      <PageHero />

      {/* Mission  */}
      <section className="container-xl section">
        <Mission />
      </section>

      {/* Our Services  */}
      <Services />

      {/* Our Project */}
      <section className="container-xl section">
        <Projects />
      </section>

      {/* Our Team */}
      <section className="container-xl section">
        <Team />
      </section>

      {/* Our Clients */}
      <section className="container-xl section">
        <Clients />
      </section>
    </main>
  );
}
